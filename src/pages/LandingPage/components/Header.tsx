import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

export const Header: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={
        {
          // border: '1px solid',
          // borderColor: theme.palette.primary.main,
          // borderRadius: '0.5rem',
        }
      }
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {/* <img
          src={imgSrc.default}
          alt='CNAPP Logo'
          width={'100px'}
          height={'100px'}
        /> */}
        <Typography variant='h4' color={theme.palette.primary.main}>
          CNAPP Policy Compliance Synchronization & Migration Dashboard
        </Typography>
      </Box>
    </Box>
  );
};
