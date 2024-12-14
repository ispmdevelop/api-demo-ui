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

export const HistoricalAnalysis: FC<unknown> = () => {
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
        <Typography variant='h5'>Historical & CI/CD Analysis</Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.info.main}>
          Deployment History (Git Diffs)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography color={theme.palette.info.main}>
          - Commit #abcd123:
        </Typography>
        <Typography>Added encryption scrip_call()</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography color={theme.palette.info.main}>
          - Commit #def456:
        </Typography>
        <Typography>Reduced scanning interval to 2 weeks</Typography>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.info.main}>
          Time-series Graphs:
        </Typography>
      </Box>
      <List>
        <ListItem>
          <Button color='secondary' variant='outlined'>
            Compliance Over Time
          </Button>
        </ListItem>
        <ListItem>
          <Button color='secondary' variant='outlined'>
            Latencies
          </Button>
        </ListItem>
        <ListItem>
          <Button color='secondary' variant='outlined'>
            Threat Detection Rates
          </Button>
        </ListItem>
      </List>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.info.main}>
          View Policy Diffs:
        </Typography>
      </Box>
      <List>
        <ListItem>
          <Button color='secondary' variant='outlined'>
            {' '}
            Compare Last month vs this month
          </Button>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Button color='secondary' variant='outlined'>
            Show improved compliance after ML changes
          </Button>
        </ListItem>
      </List>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box flex={1}>
          <Button variant='contained'>View CI Pipeline</Button>
        </Box>
        <Box flex={1}>
          <Button variant='contained'>Run Sandbox Test</Button>
        </Box>
      </Box>
    </Box>
  );
};
