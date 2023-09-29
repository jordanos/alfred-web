/* eslint-disable operator-linebreak */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, Tooltip } from '@mui/material';
import { toast } from 'components/Toast';
import MaterialReactTable, {
  MRT_ColumnDef,
  MRT_FullScreenToggleButton,
  MRT_PaginationState,
  MRT_RowSelectionState,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_Updater,
} from 'material-react-table';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import CustomCell from './CustomCell';
import { StyledInnerToolbarWrapper, StyledToolbarWrapper } from './styles';
import TableActions from './TableActions';

export interface Row {
  id: string | number;
  [key: string]: string | number | [] | object | undefined | null;
}

export interface ActionProps {
  onDelete: Function | undefined;
  onEdit: Function | undefined;
  onView: Function | undefined;
  viewTooltip: Function | undefined | null;
  editTooltip: Function | undefined | null;
  deleteTooltip: Function | undefined | null;
  isRowDisabled: Function | undefined;
  actions: {
    onClick: Function;
    icon: ReactNode;
    isDisabled: Function | undefined;
    tooltip: Function | undefined;
    color: Function | undefined;
  }[];
}

interface Props extends ActionProps {
  data: Row[];
  rowCount: number | undefined;
  isLoading: boolean;
  manualPagination: boolean;
  pagination: MRT_PaginationState;
  onPaginationChange: (
    updaterOrValue: MRT_Updater<MRT_PaginationState>
  ) => void;
  refetch: Function | undefined;
  headCells: MRT_ColumnDef[];
  onSelect: Function | undefined | null;
  toolbarActions: ReactNode;
  editDisabled: Function | undefined;
  deleteDisabled: Function | undefined;
  enableRowSelection: boolean;
  enableRowNumbers: boolean;
}

const CustomTable: FC<Props> = ({
  data,
  rowCount,
  isLoading = false,
  pagination,
  onPaginationChange,
  refetch,
  headCells,
  manualPagination = false,
  onDelete,
  onEdit,
  onView,
  onSelect,
  viewTooltip = null,
  editTooltip = null,
  deleteTooltip = null,
  isRowDisabled,
  actions = [],
  toolbarActions = null,
  editDisabled,
  deleteDisabled,
  enableRowSelection = true,
  enableRowNumbers = true,
}) => {
  const rowActions = useMemo(() => {
    const isEditDisabled = (row: { original: Row }) => {
      if (isRowDisabled !== undefined && editDisabled !== undefined) {
        return isRowDisabled(row) || editDisabled(row);
      }
      if (isRowDisabled !== undefined) return isRowDisabled(row);
      if (editDisabled !== undefined) return editDisabled(row);

      return false;
    };

    const isDeleteDisabled = (row: { original: Row }) => {
      if (isRowDisabled !== undefined && deleteDisabled !== undefined) {
        return isRowDisabled(row) || deleteDisabled(row);
      }
      if (isRowDisabled !== undefined) return isRowDisabled(row);
      if (deleteDisabled !== undefined) return deleteDisabled(row);

      return false;
    };

    return ({ row }: { row: { original: Row } }) => {
      return (
        <TableActions
          row={row}
          isRowDisabled={isRowDisabled}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          actions={actions}
          viewTooltip={viewTooltip}
          editTooltip={editTooltip}
          deleteTooltip={deleteTooltip}
          isEditDisabled={isEditDisabled}
          isDeleteDisabled={isDeleteDisabled}
        />
      );
    };
  }, [
    viewTooltip,
    editTooltip,
    deleteTooltip,
    onView,
    onEdit,
    onDelete,
    isRowDisabled,
    deleteDisabled,
    editDisabled,
    actions,
  ]);

  const columns = useMemo(() => {
    return headCells.map(({ ...item }) => ({
      Cell: CustomCell,
      ...item,
    }));
  }, [headCells]);

  const [rowSelection, setRowSelection] = useState({});
  const filteredRowIds = useMemo(() => {
    if (isRowDisabled) {
      return data.filter((row) => !isRowDisabled(row)).map((row) => row.id);
    }
    return data.map((row) => row.id);
  }, [data, isRowDisabled]);

  const onRowSelectionChange = (e: MRT_Updater<MRT_RowSelectionState>) => {
    const r = e(rowSelection);

    if (isRowDisabled) {
      Object.keys(r).forEach((key) => {
        if (!filteredRowIds.includes(parseInt(key, 10))) delete r[key];
      });
    }

    const isAllSelected =
      Object.keys(rowSelection).length === filteredRowIds.length &&
      Object.keys(rowSelection).length === Object.keys(r).length;

    if (isAllSelected) {
      setRowSelection({});
      return;
    }

    setRowSelection(r);
  };

  useEffect(() => {
    if (onSelect) onSelect(Object.keys(rowSelection).map((i) => Number(i)));
  }, [rowSelection, onSelect]);

  const [enableRowActions, setEnableRowActions] = useState(true);
  useEffect(() => {
    setEnableRowActions(
      onView !== undefined ||
        onEdit !== undefined ||
        onDelete !== undefined ||
        actions.length > 0
    );
  }, [onView, onEdit, onDelete, actions]);

  const [defaultPagination, setDefaultPagination] = useState({
    pageIndex: 0,
    pageSize: 25,
  });

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowNumbers={enableRowNumbers}
      enableRowSelection={enableRowSelection}
      enableRowActions={enableRowActions}
      enableSubRowSelection
      manualPagination={manualPagination}
      enablePinning
      state={{
        isLoading,
        rowSelection,
        pagination: manualPagination ? pagination : defaultPagination,
      }}
      initialState={{
        density: 'compact',
      }}
      onPaginationChange={
        manualPagination ? () => onPaginationChange : setDefaultPagination
      }
      rowCount={manualPagination ? rowCount : undefined}
      enableDensityToggle
      getRowId={(originalRow) => originalRow.id}
      onRowSelectionChange={onRowSelectionChange}
      renderRowActions={rowActions}
      positionActionsColumn="last"
      muiTableBodyRowProps={({ row }) => ({
        onClick: (e) => {
          e.stopPropagation();
          if (
            e.target?.id !== 'row-menu' &&
            e.target?.id !== 'demo-customized-button' &&
            e.target?.parentNode?.id !== 'demo-customized-menu' &&
            e.target.nodeName !== 'svg' &&
            e.target.nodeName !== 'IMG'
          ) {
            if (onView) return onView(row.original.id, row.original);
            return () => {
              return toast({
                message: 'No detail page for this row',
                severity: 'info',
              });
            };
          }

          return () => {};
        },
        sx: {
          '&:hover > *': { cursor: 'pointer' },
        },
      })}
      renderTopToolbarCustomActions={() => (
        <StyledToolbarWrapper>
          {refetch && (
            <Box>
              <Tooltip title="Refresh">
                <IconButton onClick={() => refetch()}>
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          {toolbarActions}
        </StyledToolbarWrapper>
      )}
      renderToolbarInternalActions={({ table }) => (
        <StyledInnerToolbarWrapper>
          <MRT_ToggleFiltersButton table={table} />
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
          <MRT_FullScreenToggleButton table={table} />
        </StyledInnerToolbarWrapper>
      )}
    />
  );
};

export default CustomTable;
