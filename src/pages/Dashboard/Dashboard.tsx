import { Box, useTheme } from '@mui/material';
import { FC } from 'react';
import {
  Header,
  NavBar,
  HomeOverView,
  RealTimeAlertsPanel,
  HistoricalAnalysis,
  CreateCustomPolicy,
  PoliciesComplianceOverview,
  MLInsightsPanel,
} from './components';

export const Dashboard: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: '2px solid',
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
      <HomeOverView />
      <RealTimeAlertsPanel />
      <HistoricalAnalysis />
      <CreateCustomPolicy />
      <PoliciesComplianceOverview />
      <MLInsightsPanel />
    </Box>
  );
};
