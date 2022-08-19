import { FC, useState } from 'react'
import { Alert, Grid, GridSize, IconButton, Snackbar, Typography } from '@mui/material'
import CopyIcon from '@mui/icons-material/ContentCopy'

import { useCopyToClipboard } from '../../hooks'

export const CopyText: FC<Props> = ({ textToCopy, gridSize = 12 }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false)

  const toggleConfirmation = () => {
    setIsConfirmationOpen(isCurrentlyOpen => !isCurrentlyOpen)
  }

  const { copy, isError } = useCopyToClipboard(textToCopy, toggleConfirmation)
  return (
    <>
      <Grid item container xs={gridSize}>
        <Grid item xs={11} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5'>{textToCopy}</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton size='small' disabled={!textToCopy} onClick={() => copy()}>
            <CopyIcon color='primary' />
          </IconButton>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={toggleConfirmation}
        open={isConfirmationOpen}
        autoHideDuration={3000}
      >
        <Alert onClose={toggleConfirmation} elevation={6} variant='filled' severity='success' sx={{ width: '100%' }}>
          {isError ? 'Something went wrong' : 'Copied'}
        </Alert>
      </Snackbar>
    </>
  )
}

interface Props {
  textToCopy?: string | null
  gridSize?: GridSize
}
