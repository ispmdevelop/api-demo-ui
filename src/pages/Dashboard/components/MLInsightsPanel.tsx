import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
  Checkbox,
} from '@mui/material';
import { FC } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const MLInsightsPanel: FC<unknown> = () => {
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
        <SmartToyIcon color='secondary' />
        <Typography color='secondary' variant='h5'>
          ML INSIGHTS & RECOMMENDATIONS PANEL
        </Typography>
      </Box>

      <Divider></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.secondary.main}>
          Current ML Suggestions:
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Checkbox color='secondary' defaultChecked></Checkbox>
        <Typography>
          Always add enforce_encryption for HTTP block policies on AWS/GCP
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Checkbox color='secondary'></Checkbox>
        <Typography>
          DeployIfNotExists encryption option for Azure when available
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Checkbox color='secondary'></Checkbox>
        <Typography>Tag enforcement scripts for cost optimization</Typography>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' color={theme.palette.secondary.main}>
          Confidence Scores:
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography color={theme.palette.secondary.main}>
          Enforce Encryption:
        </Typography>
        <Typography>90% correlated with 10% HIPAA fail reduction</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography color={theme.palette.secondary.main}>
          Reduce Scan Interval:
        </Typography>
        <Typography>Stabilized compliance trend observed</Typography>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color='secondary' variant='contained'>
          Accept All Suggestions
        </Button>
        <Button color='secondary' variant='contained'>
          Accept Selected
        </Button>
        <Button color='secondary' variant='contained'>
          Reject
        </Button>
      </Box>
    </Box>
  );
};
