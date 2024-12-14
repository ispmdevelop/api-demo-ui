import { Box, Button } from '@mui/material';
import { FC } from 'react';

const pages: string[] = [
  'Home',
  'Create Policy',
  'Policies',
  'Compliance',
  'ML Insights',
  'History',
  'Alerts',
];

export const NavBar: FC<unknown> = () => {
  // const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        flexFlow: 'wrap',
        gap: 1,
      }}
    >
      {pages.map((page) => (
        <Button
          key={page}
          sx={{ p: '1rem' }}
          color='primary'
          variant='outlined'
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};
