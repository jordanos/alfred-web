import { Box, Button, Typography } from '@mui/material';
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
        backgroundColor: '#09251E',
        height: 100,
        borderRadius: 10,
        px: 8,
        my: 2,
      }}
    >
      <Box>
        <Typography variant="overline" fontSize={28}>
          A C S
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          {Object.keys(elements).map((key) => {
            const isActive = activeElement === key;

            return (
              <Box
                key={key}
                onClick={() => {
                  goTo(key);
                }}
                sx={{
                  cursor: 'pointer',
                  color: isActive ? 'primary.main' : 'text.primary',
                  mr: 8,
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

        <Button
          variant="outlined"
          size="large"
          sx={{
            color: 'text.primary',
            textTransform: 'none',
            fontWeight: 'bold',
            ml: 10,
          }}
        >
          Join for free
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
