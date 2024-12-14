import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  Button,
  Divider,
} from '@mui/material';
import { FC } from 'react';

export const RealTimeAlerts: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: '0.5rem',
        height: '100%',
        p: 1,
        gap: 1,
      }}
    >
      <Box>
        <Typography variant='h5'>Real-Time Alerts</Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' color={theme.palette.info.main}>
            CRITICAL ALERTS:
          </Typography>
          <Box flex={1}></Box>
        </Box>
        <List>
          <ListItem>
            <Typography>- No Critical Alerts</Typography>
          </ListItem>
        </List>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' color={theme.palette.info.main}>
            WARNING ALERTS:
          </Typography>
          <Box flex={1}></Box>
        </Box>
        <List>
          <ListItem>
            <Typography>- No Warning Alerts</Typography>
          </ListItem>
        </List>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box flex={1}>
          <Button variant='contained'>Acknowledge Alerts</Button>
        </Box>
      </Box>
    </Box>
  );
};
