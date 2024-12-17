import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
  LinearProgress,
} from '@mui/material';
import { FC } from 'react';
import HomeIcon from '@mui/icons-material/Home';

export const HomeOverView: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: theme.palette.success.main,
        borderRadius: '0.5rem',
        p: 1,
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <HomeIcon color='success' />
        <Typography color='success' variant='h5'>
          HOME / OVERVIEW SECTION
        </Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/*  */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: 1, color: theme.palette.success.main }}>
            <Typography>Compliance Score: </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box width={'50%'}>
              <LinearProgress
                variant='determinate'
                color='success'
                value={80}
              />
            </Box>
            <Typography>87%</Typography>
          </Box>
        </Box>

        <Divider></Divider>
        {/*  */}

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, color: theme.palette.success.main }}>
            <Typography>Recent Failures: </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography>HIPAA(2), SOC2 (1)</Typography>
          </Box>
        </Box>

        <Divider></Divider>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, color: theme.palette.success.main }}>
            <Typography>ML Recommended Script Calls: </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography>enforce_encryption (high confidence)</Typography>
          </Box>
        </Box>

        <Divider></Divider>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button color='success' variant='contained'>
            View Recent Policies
          </Button>
          <Button color='success' variant='contained'>
            Check CI/CD Results
          </Button>
          <Button color='success' variant='contained'>
            Go to Alerts
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
