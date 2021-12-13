import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack, Typography } from '@mui/material';

export default function AuthLoadingBackdrop() {
  return (
    <div>
      <Backdrop
        sx={{ color: 'primary.main', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
        // onClick={handleClose}
      >
        <Stack direction="row" spacing={2}>
          <CircularProgress color="inherit" />
          <Typography fontSize={28} fontWeight={600} color="primary.contrastText">Connecting...</Typography>
        </Stack>
      </Backdrop>
    </div>
  )
}
