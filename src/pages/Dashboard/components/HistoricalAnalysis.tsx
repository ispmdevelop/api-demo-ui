import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import CircleIcon from '@mui/icons-material/Circle';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

export const complianceData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Compliance Score (%)',
      data: [80, 85, 87],
      backgroundColor: 'rgb(156, 39, 176)',
    },
  ],
};

export const hipaaFailsData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'HIPAA Fails',
      data: [70, 55, 45],
      backgroundColor: 'rgb(156, 39, 176)',
    },
  ],
};

export const HistoricalAnalysis: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: '0.5rem',
        height: '100%',
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
        <TimelineIcon color='secondary' />
        <Typography color='secondary' variant='h5'>
          HISTORICAL ANALYSIS & CI/CD PANEL
        </Typography>
      </Box>

      <Divider></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.secondary.main}>
          GIT Commits (most recent first):
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <CircleIcon color='secondary' fontSize='small' />
        <Typography color={theme.palette.secondary.main}>
          f213a9 (2 days ago):
        </Typography>
        <Typography>Added encryption scrip_call()</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <CircleIcon color='secondary' fontSize='small' />
        <Typography color={theme.palette.secondary.main}>
          a9d2f7 (1 week ago):
        </Typography>
        <Typography>
          Reduced scan interval to 14 days due to HIPAA fails
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <CircleIcon color='secondary' fontSize='small' />
        <Typography color={theme.palette.secondary.main}>
          67bdc0 (2 weeks ago):
        </Typography>
        <Typography>Initial user-defined HTTP block policy</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color='secondary' variant='outlined'>
          View Diff Between Commits
        </Button>
        <Button color='secondary' variant='outlined'>
          Trigger CI Test
        </Button>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.secondary.main}>
          Trends:
        </Typography>
      </Box>
      <Box display={'flex'}>
        <Box
          flex={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography color={theme.palette.secondary.main}>
            Compliance Over Time:
          </Typography>
          <Bar data={complianceData} options={options} />
        </Box>
        <Box
          flex={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography color={theme.palette.secondary.main}>
            HIPAA Fails Over Time:
          </Typography>
          <Bar data={hipaaFailsData} options={options} />
          <Typography>(Decreasing after encryption scripts added)</Typography>
        </Box>
      </Box>
    </Box>
  );
};
