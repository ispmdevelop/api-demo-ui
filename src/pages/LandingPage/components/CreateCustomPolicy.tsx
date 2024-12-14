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
          Create Custom Policy
        </Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, color: theme.palette.success.main }}>
            <Typography>Policy Name: </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Input
              sx={{ width: '70%' }}
              color='primary'
              defaultValue={'Block Public HTTP Access'}
            />
          </Box>
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
            Operator:
          </Typography>
          <Typography flex={1}>[=]</Typography>
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
          <Typography flex={1}>[=]</Typography>
          <Typography flex={1} color={theme.palette.success.main}>
            Val:
          </Typography>
          <Typography flex={1}>[true]</Typography>
        </Box>

        <Divider></Divider>

        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.success.main}>Actions: </Typography>
          <Typography>[Block, Alert]</Typography>
        </Box>

        <Divider></Divider>

        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.success.main}>
            Compliance Tags:
          </Typography>
          <Typography>[SOC 2, ISO 27001]</Typography>
        </Box>

        <Divider></Divider>

        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' color={theme.palette.success.main}>
            AI analysis (Auto):
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.success.main}>Intent:</Typography>
          <Typography>Prevent unauthorized public HTTP access</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.success.main}>
            Recommended:
          </Typography>
          <Typography>Enforce encryption, Restrict ACLS</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.success.main}>Risks:</Typography>
          <Typography>Potential data exposure</Typography>
        </Box>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button color='success' variant='contained'>
          Save To CIR
        </Button>
        <Button color='success' variant='contained'>
          Translate & Deploy to CNAPPs
        </Button>
      </Box>
    </Box>
  );
};
