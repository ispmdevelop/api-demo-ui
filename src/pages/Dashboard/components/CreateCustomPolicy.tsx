import {
  Box,
  Button,
  Divider,
  Input,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CreateCustomPolicy: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: theme.palette.success.main,
        borderRadius: '0.5rem',
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
        <AddCircleOutlineIcon color='success' />
        <Typography color='success' variant='h5'>
          CREATE CUSTOM POLICY PANEL
        </Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1, color: theme.palette.success.main }}>
          <Typography>Name: </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Input
            sx={{ width: '90%' }}
            color='primary'
            defaultValue={'User Defined HTTP Block'}
          />
        </Box>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1, color: theme.palette.success.main }}>
          <Typography>Description: </Typography>
        </Box>
        <Box sx={{ flex: 1, flexDirection: 'column' }}>
          <Input
            sx={{ width: '90%' }}
            color='primary'
            defaultValue={
              'Block all HTTP traffic where public access is enabled'
            }
          />
        </Box>
      </Box>

      <Divider></Divider>

      <Box>
        <Typography color='success'>AI Interpretation: </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography color='success'>Intent: </Typography>
        <Typography>Prevent unauthorized public HTTP</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography color='success'>Recommends: </Typography>
        <Typography>Enforce encryption, Restrict ACLs</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography color='success'>Risk: </Typography>
        <Typography>Exposure</Typography>
      </Box>

      <Divider></Divider>

      {/*  */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6' flex={1} color={theme.palette.success.main}>
          Conditions:
        </Typography>
      </Box>

      <Box display={'flex'}>
        <Typography flex={1} color={theme.palette.success.main}>
          Attribute:
        </Typography>
        <Typography flex={1}>[Protocol]</Typography>
        <Typography flex={1} color={theme.palette.success.main}>
          condition:
        </Typography>
        <Typography flex={1}>[equals]</Typography>
        <Typography flex={1} color={theme.palette.success.main}>
          Val:
        </Typography>
        <Typography flex={1}>[HTTP]</Typography>
      </Box>

      <Box display={'flex'}>
        <Typography flex={1} color={theme.palette.success.main}>
          Attribute:
        </Typography>
        <Typography flex={1}>[public_access]</Typography>
        <Typography flex={1} color={theme.palette.success.main}>
          Operator:
        </Typography>
        <Typography flex={1}>[equals]</Typography>
        <Typography flex={1} color={theme.palette.success.main}>
          Val:
        </Typography>
        <Typography flex={1}>[true]</Typography>
      </Box>

      <Divider></Divider>

      {/*  */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography color={theme.palette.success.main}>Actions: </Typography>
        <Typography>[Block, Alert]</Typography>
      </Box>

      <Divider></Divider>

      {/*  */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography color={theme.palette.success.main}>
          Compliance Tags:
        </Typography>
        <Typography>[SOC 2, ISO 27001]</Typography>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button color='success' variant='contained'>
          Validate & Convert to CIR
        </Button>
        <Button color='success' variant='contained'>
          Preview CIR
        </Button>
        <Button color='success' variant='contained'>
          Translate & Deploy
        </Button>
      </Box>
    </Box>
  );
};
