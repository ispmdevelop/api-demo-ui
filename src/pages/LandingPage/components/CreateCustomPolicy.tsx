import {
  Box,
  Button,
  Divider,
  Input,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';

export const CreateCustomPolicy: FC<unknown> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: '0.5rem',
        p: 1,
        gap: 1,
      }}
    >
      <Box>
        <Typography variant='h5'>Create Custom Policy</Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, color: theme.palette.info.main }}>
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
          <Typography variant='h6' flex={1} color={theme.palette.info.main}>
            Conditions:
          </Typography>
        </Box>

        <Box display={'flex'}>
          <Typography flex={1} color={theme.palette.info.main}>
            Attribute:
          </Typography>
          <Typography flex={1}>[Protocol]</Typography>
          <Typography flex={1} color={theme.palette.info.main}>
            Operator:
          </Typography>
          <Typography flex={1}>[=]</Typography>
          <Typography flex={1} color={theme.palette.info.main}>
            Val:
          </Typography>
          <Typography flex={1}>[HTTP]</Typography>
        </Box>

        <Box display={'flex'}>
          <Typography flex={1} color={theme.palette.info.main}>
            Attribute:
          </Typography>
          <Typography flex={1}>[public_access]</Typography>
          <Typography flex={1} color={theme.palette.info.main}>
            Operator:
          </Typography>
          <Typography flex={1}>[=]</Typography>
          <Typography flex={1} color={theme.palette.info.main}>
            Val:
          </Typography>
          <Typography flex={1}>[true]</Typography>
        </Box>

        <Divider></Divider>

        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>Actions: </Typography>
          <Typography>[Block, Alert]</Typography>
        </Box>

        <Divider></Divider>

        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>
            Compliance Tags:
          </Typography>
          <Typography>[SOC 2, ISO 27001]</Typography>
        </Box>

        <Divider></Divider>

        {/*  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' color={theme.palette.info.main}>
            AI analysis (Auto):
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>Intent:</Typography>
          <Typography>Prevent unauthorized public HTTP access</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>Recommended:</Typography>
          <Typography>Enforce encryption, Restrict ACLS</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color={theme.palette.info.main}>Risks:</Typography>
          <Typography>Potential data exposure</Typography>
        </Box>
      </Box>

      <Divider></Divider>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box flex={1}>
          <Button variant='contained'>Save To CIR</Button>
        </Box>
        <Box flex={1}>
          <Button variant='contained'>Translate & Deploy to CNAPPs</Button>
        </Box>
      </Box>
    </Box>
  );
};
