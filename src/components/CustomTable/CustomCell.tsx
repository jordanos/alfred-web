import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  renderedCellValue: ReactNode;
}

const CustomCell: FC<Props> = ({ renderedCellValue }) => {
  if (renderedCellValue === null) {
    return <i>Not assigned</i>;
  }
  return <Box>renderedCellValue</Box>;
};

export default CustomCell;
