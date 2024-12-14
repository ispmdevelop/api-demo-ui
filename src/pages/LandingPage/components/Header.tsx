import { Box, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

export const Header: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        // border: '1px solid',
        // borderColor: theme.palette.primary.main,
        // borderRadius: '0.5rem',
        p: '1rem',
      }}
    >
      <Typography variant='h3' color={theme.palette.primary.main}>
        CNAPP Multi-Cloud Security Policy Dashboard
      </Typography>
    </Box>
  );
};
