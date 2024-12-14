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
import {} from '@mui/material';

export const PoliciesComplianceOverview: FC<unknown> = () => {
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
        <Typography variant='h5'>Policies & Compliance Overview</Typography>
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
            Compliance Summary:
          </Typography>
        </Box>

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
            <Typography>- Enforce encryption on Wiz</Typography>
          </ListItem>
          <ListItem>
            <Typography>- Reduce scanning interval to bi-weekly</Typography>
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
