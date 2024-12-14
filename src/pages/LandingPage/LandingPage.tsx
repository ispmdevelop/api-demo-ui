import { Box, useTheme } from '@mui/material';
import { FC } from 'react';
import {
  Header,
  CreateCustomPolicy,
  HistoricalAnalysis,
  PoliciesComplianceOverview,
  RealTimeAlerts,
  NavBar,
} from './components';

export const LandingPage: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        p: 1,
      }}
    >
      <Header></Header>
      <NavBar></NavBar>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          flexFlow: 'wrap',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <CreateCustomPolicy></CreateCustomPolicy>
        </Box>
        <Box sx={{ flex: 1 }}>
          <RealTimeAlerts></RealTimeAlerts>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          flexFlow: 'wrap',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <PoliciesComplianceOverview></PoliciesComplianceOverview>
        </Box>
        <Box sx={{ flex: 1 }}>
          <HistoricalAnalysis></HistoricalAnalysis>
        </Box>
      </Box>
    </Box>
  );
};
