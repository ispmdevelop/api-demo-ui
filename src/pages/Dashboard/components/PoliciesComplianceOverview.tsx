import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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

const latencyData = {
  labels: ['Latency (ms)'],
  datasets: [
    {
      label: 'ms',
      data: [120],
      backgroundColor: 'rgb(2, 136, 209)',
    },
  ],
};

export const resourceAccuracyData = {
  labels: ['Resource Accuracy (%)'],
  datasets: [
    {
      label: '%',
      data: [95],
      backgroundColor: 'rgb(2, 136, 209)',
    },
  ],
};

export const PoliciesComplianceOverview: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: theme.palette.info.main,
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
        <RemoveRedEyeIcon color='info' />
        <Typography color='info' variant='h5'>
          POLICIES & COMPLIANCE OVERVIEW PANEL
        </Typography>
      </Box>
      <Divider></Divider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          textAlign: 'left',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' color={theme.palette.info.main}>
            Recently Deployed Policies:
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            border: '1px solid',
            borderColor: theme.palette.info.main,
            borderRadius: '0.5rem',
            padding: 1,
          }}
        >
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}
          >
            <Typography color={theme.palette.info.main}>
              ID: USER_DEFINED_001:
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}
          >
            <Typography color={theme.palette.info.main}>Targets:</Typography>
            <Typography flex={1}>AWS, Azure, GCP</Typography>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}
          >
            <Typography color={theme.palette.info.main}>Compliance:</Typography>
            <Typography flex={1}>Soc2(pass), HIPAA(fail)</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography color={theme.palette.info.main}>
              Suggested Fix::
            </Typography>
            <Typography>add encryption Script</Typography>
            <Button variant='outlined' color='info'>
              Apply Fix Now
            </Button>
          </Box>
        </Box>
        <Divider></Divider>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' color={theme.palette.info.main}>
            Aggregate Metrics:
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box flex={1} display={'flex'} justifyContent={'center'}>
            <Bar data={latencyData} options={options} />
          </Box>
          <Box flex={1} display={'flex'} justifyContent={'center'}>
            <Bar data={resourceAccuracyData} options={options} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
