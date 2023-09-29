/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material/';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Box, Icon, IconButton, MenuItem } from '@mui/material';
import { FC, MouseEventHandler, useState } from 'react';
import { ActionProps, Row } from '.';
import { StyledMenu } from './styles';

interface TableActionsProps extends ActionProps {
  row: { original: Row };
  isEditDisabled: Function;
  isDeleteDisabled: Function;
}

const TableActions: FC<TableActionsProps> = ({
  onView,
  onEdit,
  onDelete,
  viewTooltip,
  editTooltip,
  deleteTooltip,
  isRowDisabled,
  actions,
  row,
  isEditDisabled,
  isDeleteDisabled,
}) => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null
  >(null);
  const open = Boolean(anchorEl);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (actions.length === 0 && !onView && !onEdit && !onDelete) {
    return null;
  }

  return (
    <div>
      <Box id="row-menu">
        <IconButton
          id="demo-customized-button"
          onClick={handleClick}
          size="small"
        >
          <MoreVertRoundedIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
      <StyledMenu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {actions.map((item) => (
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              item.onClick(row.original.id, row.original);
              handleClose();
            }}
            disabled={
              // eslint-disable-next-line no-nested-ternary
              item.isDisabled !== undefined
                ? item.isDisabled(row.original, isRowDisabled)
                : isRowDisabled !== undefined
                  ? isRowDisabled(row)
                  : false
            }
            disableRipple
          >
            <Icon
              sx={{
                color: item.color
                  ? item.color(row.original, isRowDisabled)
                  : '',
              }}
            >
              {item.icon}
            </Icon>
            {item.tooltip ? item.tooltip(row.original, isRowDisabled) : ''}
          </MenuItem>
        ))}

        {onView !== undefined && (
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              if (onView) onView(row.original.id, row.original);
              handleClose();
            }}
            disableRipple
          >
            <>
              <Icon sx={{ color: 'orange' }}>
                <VisibilityIcon />
              </Icon>
              {viewTooltip || 'View'}
            </>
          </MenuItem>
        )}

        {onEdit !== undefined && (
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              if (onEdit) onEdit(row.original.id, row.original);
              handleClose();
            }}
            disabled={isEditDisabled(row.original)}
            disableRipple
          >
            <Icon sx={{ color: 'green' }}>
              <EditIcon />
            </Icon>
            {editTooltip
              ? typeof editTooltip === 'function'
                ? editTooltip(row.original)
                : editTooltip
              : 'Edit'}
          </MenuItem>
        )}

        {onDelete !== undefined && (
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              if (onDelete) onDelete(row.original.id, row.original);
              handleClose();
            }}
            disabled={isDeleteDisabled(row.original)}
            disableRipple
          >
            <Icon sx={{ color: 'red' }}>
              <DeleteIcon />
            </Icon>
            {deleteTooltip
              ? typeof deleteTooltip === 'function'
                ? deleteTooltip(row.original)
                : deleteTooltip
              : 'Delete'}
          </MenuItem>
        )}
      </StyledMenu>
    </div>
  );
};

export default TableActions;
