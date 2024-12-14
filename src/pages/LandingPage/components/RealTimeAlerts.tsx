import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  Button,
  Divider,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FC } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const RealTimeAlerts: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: theme.palette.warning.main,
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
        <NotificationsIcon color='warning' />
        <Typography color='warning' variant='h5'>
          Migration & Compliance Synchronization Alerts
        </Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ErrorOutlineIcon color={'error'} />
            <Typography variant='h6' color={theme.palette.error.main}>
              CRITICAL ALERTS:
            </Typography>
          </Box>
          <Box flex={1}></Box>
        </Box>
        <List>
          <ListItem>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon color='success' />
              <Typography color='success'> No Critical Alerts</Typography>
            </Box>
          </ListItem>
        </List>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningAmberIcon color={'warning'} />
            <Typography variant='h6' color={theme.palette.warning.main}>
              WARNING ALERTS:
            </Typography>
          </Box>
          <Box flex={1}></Box>
        </Box>
        <List>
          <ListItem>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleOutlineIcon color='success' />
              <Typography color='success'> No Warning Alerts</Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box flex={1}>
          <Button color='warning' variant='contained'>
            Acknowledge Alerts
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
