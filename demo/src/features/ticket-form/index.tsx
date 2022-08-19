import { FC, useContext, SetStateAction, Dispatch } from 'react'
import { MuiForm, Config, MuiFormContext } from '@caldwell619/mui-form-generator'
import { Button } from '@mui/material'
import { UseFormReturn } from 'react-hook-form'
import { slugger } from '@caldwell619/github-slugger'

export const ticketFormDefaultValues: TicketForm = {
  type: 'feature',
  ticketName: '',
  gitCommand: 'git checkout -b',
}

const inputs: Config<TicketForm>[] = [
  {
    type: 'text',
    config: {
      control: {
        gridProps: {
          xs: 3,
        },
        rules: {
          required: { value: true, message: 'This is required' },
        },
        name: 'gitCommand',
        label: 'Git Command',
      },
    },
  },
  {
    type: 'select',
    config: {
      options: [
        {
          label: 'Feature',
          value: 'feature',
        },
        {
          label: 'Fix',
          value: 'fix',
        },
        {
          label: 'Enhancement',
          value: 'enhancement',
        },
        {
          label: 'Spike',
          value: 'spike',
        },
      ],
      control: {
        gridProps: {
          xs: 3,
        },
        name: 'type',
        label: 'Type',
      },
    },
  },
  {
    type: 'text',
    config: {
      control: {
        gridProps: {
          xs: 6,
        },
        rules: {
          required: { value: true, message: 'This is required' },
        },
        name: 'ticketName',
        label: 'Name',
      },
    },
  },
]

export const TicketForm: FC<Props> = ({ setResult }) => {
  const { handleSubmit } = useContext<UseFormReturn<TicketForm>>(MuiFormContext)

  const onSubmit = ({ ticketName, type, gitCommand }: TicketForm) => {
    setResult(`${gitCommand} ${type}/${slugger(ticketName)}`)
  }

  return (
    <form>
      <MuiForm inputs={inputs} gridSpacing={1} />
      <Button sx={{ marginTop: ({ spacing }) => spacing(3) }} variant='outlined' onClick={handleSubmit(onSubmit)}>
        Slug
      </Button>
    </form>
  )
}

export interface TicketForm {
  gitCommand: string
  type: string
  ticketName: string
}

interface Props {
  setResult: Dispatch<SetStateAction<string | undefined>>
}
