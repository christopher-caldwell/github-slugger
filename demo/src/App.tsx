import { useState } from 'react'
import { Divider, Typography, Grid } from '@mui/material'
import { MuiFormProvider } from '@caldwell619/mui-form-generator'

import { TicketForm, ticketFormDefaultValues } from './features/ticket-form'
import { SlugForm, slugFormDefaultValues } from './features/slug-form'
import { Result } from './features/result'

const App = () => {
  const [slugResult, setSlugResult] = useState<string | undefined>()
  const [ticketResult, setTicketResult] = useState<string | undefined>()
  return (
    <Grid container spacing={1} sx={{ padding: '0 10%' }}>
      <Grid item xs={12}>
        <Typography variant='h4'>@caldwell619/github-slugger</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1'>Fork of github-slugger written in TS</Typography>
      </Grid>
      <Grid item container xs={12} sx={{ marginTop: '5vh' }} spacing={3}>
        <MuiFormProvider props={{ defaultValues: slugFormDefaultValues }}>
          <>
            <Grid item xs={12}>
              <Typography variant='h4'>Slug meh</Typography>
            </Grid>
            <Grid item xs={12}>
              <SlugForm setResult={setSlugResult} />
            </Grid>
            <Grid item xs={12}>
              <Result result={slugResult} />
            </Grid>
          </>
        </MuiFormProvider>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <MuiFormProvider props={{ defaultValues: ticketFormDefaultValues }}>
          <>
            <Grid item xs={12}>
              <Typography variant='h4'>Make a git command based on ticket</Typography>
            </Grid>
            <Grid item xs={12}>
              <TicketForm setResult={setTicketResult} />
            </Grid>
            <Grid item xs={12}>
              <Result result={ticketResult} />
            </Grid>
          </>
        </MuiFormProvider>
      </Grid>
    </Grid>
  )
}

export default App
