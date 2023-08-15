import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { elements } from '.';

interface Props {
  activeElement: string | number | undefined;
  goTo: Function;
}

const Nav: FC<Props> = ({ activeElement, goTo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="overline">Logo</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {Object.keys(elements).map((key) => {
          const isActive = activeElement === key;

          return (
            <Box
              onClick={() => {
                goTo(key);
              }}
              sx={{
                cursor: 'pointer',
                color: isActive ? 'primary.main' : 'text.primary',
                mr: 2,
                '&:last-child': {
                  mr: 0,
                },
              }}
            >
              <Typography variant="body2">{elements[key].label}</Typography>
              {isActive && (
                <Box
                  sx={{
                    width: '70%',
                    borderRadius: 5,
                    height: 3,
                    mt: 0.5,
                    backgroundColor: 'primary.main',
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Nav;
