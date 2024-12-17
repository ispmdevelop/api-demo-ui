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
import ErrorIcon from '@mui/icons-material/Error';
import { FC } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const RealTimeAlertsPanel: FC<unknown> = () => {
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
          REAL-TIME ALERTS PANEL
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
          <ListItem
            sx={{
              border: '2px solid',
              borderColor: theme.palette.error.main,
              borderRadius: '1rem',
              maxWidth: 'fit-content',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ErrorIcon color='error' />
                <Typography color='error'>
                  Policy USER_DEFINED_001 failed HIPAA compliance at AWS
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', ml: '4rem', gap: 1 }}>
                <Typography>Recommendation:</Typography>
                <Typography>Add enforce_encryption script</Typography>
              </Box>
              <Box sx={{ display: 'flex', ml: '4rem', gap: 1 }}>
                <Button variant='outlined' color='error'>
                  Acknowledge
                </Button>
                <Button variant='outlined' color='error'>
                  Dismiss
                </Button>
                <Button variant='outlined' color='error'>
                  View Policy
                </Button>
              </Box>
            </Box>
          </ListItem>
        </List>

        <Divider></Divider>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningAmberIcon color={'warning'} />
            <Typography variant='h6' color={theme.palette.warning.main}>
              Other Alerts:
            </Typography>
          </Box>
          <Box flex={1}></Box>
        </Box>
        <List>
          <ListItem
            sx={{
              border: '2px solid',
              borderColor: theme.palette.warning.main,
              borderRadius: '1rem',
              maxWidth: 'fit-content',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WarningAmberIcon color='warning' />
                <Typography color='warning'>
                  Policy USER_DEFINED_002 duplicates existing Azure policy.
                  Merge changes?
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', ml: '4rem', gap: 1 }}>
                <Button variant='outlined' color='warning'>
                  Merge Enhancements
                </Button>
                <Button variant='outlined' color='warning'>
                  Skip Deployment
                </Button>
              </Box>
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
