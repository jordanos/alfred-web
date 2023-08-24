import { Box, Typography } from '@mui/material';
import React, { FC, FunctionComponent } from 'react';
import treeImg from 'assets/images/tree.png';

export interface ServiceCardInitProps {
  id: string;
  title: string;
  text: string;
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface Props extends ServiceCardInitProps {
  alignment: 'left' | 'right';
}

const ServicesCard: FC<Props> = ({ id, title, text, Icon, alignment }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2.5 }}>
      <Box
        sx={{
          position: 'relative',
          borderRadius: 50,
          width: '80%',
          alignSelf: alignment === 'left' ? 'flex-start' : 'flex-end',
          backgroundImage: `url(${treeImg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '500px 400px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            borderRadius: 50,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#00DD9C0A',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 6,
            py: 3,
            flexDirection: {
              xs: 'row',
              md: alignment === 'left' ? 'row-reverse' : 'row',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: alignment === 'left' ? 'row-reverse' : 'row',
              },
              alignItems: { xs: 'normal', md: 'center' },
              justifyContent: { xs: 'normal', md: 'space-between' },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                color: 'transparent',
                WebkitTextStroke: '1px #1F4439',
              }}
            >
              {id}
            </Typography>
            <Box
              sx={{
                minWidth: 400,
                maxWidth: 400,
                ml: { xs: 0, md: alignment === 'left' ? 0 : 2 },
                mr: { xs: 0, md: alignment === 'left' ? 2 : 0 },
              }}
            >
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight={600}
                sx={{
                  textAlign: {
                    xs: 'left',
                    md: alignment === 'left' ? 'right' : 'left',
                  },
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.disabled"
                sx={{
                  mt: 1,
                  textAlign: {
                    xs: 'left',
                    md: alignment === 'left' ? 'right' : 'left',
                  },
                }}
              >
                {text}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Icon
              style={{ width: '48px', height: '48px', alignSelf: 'center' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesCard;
