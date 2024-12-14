import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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

export const options = {
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

const labels = ['Soc 2', 'ISO 27001', 'HIPAA'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Percentage',
      data: [95, 90, 75],
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
          Policies & Compliance Overview
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography color={theme.palette.info.main}>
            USER_DEFINED_001:
          </Typography>
          <Typography flex={1}>
            Deployed to Prisma, Wiz AWS CNAPP, AZURE CNAPP
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography color={theme.palette.info.main}>Compliance:</Typography>
          <Typography flex={1}>HIPAA fail on Wiz (no encrypt)</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography color={theme.palette.info.main}>Next Steps:</Typography>
          <Typography flex={1}>
            ML suggests always add `scrip_call(enforce_encryption)` for Wiz
          </Typography>
        </Box>
        <Divider></Divider>
        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 1 }}>
          <Typography variant='h6' color={theme.palette.info.main}>
            Compliance Synchronization Summary:
          </Typography>
        </Box>
        <Bar options={options} data={data} />;
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>Soc 2: </Typography>
          <Typography>95% pass</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>ISO 27001: </Typography>
          <Typography>90% pass</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>HIPAA: </Typography>
          <Typography>75% Pass (Needs encryption)</Typography>
        </Box>
        <Divider></Divider>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography flex={1} color={theme.palette.info.main}>
            ML Recommendations:
          </Typography>
        </Box>
        <List>
          <ListItem>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AutoAwesomeIcon color='info' />
              <Typography> Enforce encryption on Wiz</Typography>
            </Box>
          </ListItem>
          <ListItem>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AutoAwesomeIcon color='info' />
              <Typography> Reduce scanning interval to bi-weekly</Typography>
            </Box>
          </ListItem>
        </List>
        <Divider></Divider>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Button variant='contained'>Apply ML Recommendations</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
