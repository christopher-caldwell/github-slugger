import { FC, useContext, SetStateAction, Dispatch } from 'react'
import { MuiForm, Config, MuiFormContext } from '@caldwell619/mui-form-generator'
import { Button } from '@mui/material'
import { UseFormReturn } from 'react-hook-form'
import { slugger } from '@caldwell619/github-slugger'

export const slugFormDefaultValues: ISlugForm = {
  text: '',
  willKeepCase: false,
}

const inputs: Config<ISlugForm>[] = [
  {
    type: 'text',
    config: {
      control: {
        rules: {
          required: { value: true, message: 'This is required' },
        },
        name: 'text',
        label: 'Text to Slug',
      },
    },
  },
  {
    type: 'checkbox',
    config: {
      control: {
        gridProps: { xs: 12, md: 6 },
        name: 'willKeepCase',
        label: 'Keep case intact when slugging?',
      },
    },
  },
]

export const SlugForm: FC<Props> = ({ setResult }) => {
  const { handleSubmit } = useContext<UseFormReturn<ISlugForm>>(MuiFormContext)

  const onSubmit = ({ text, willKeepCase }: ISlugForm) => {
    setResult(slugger(text, willKeepCase))
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

export interface ISlugForm {
  text: string
  willKeepCase: boolean
}

interface Props {
  setResult: Dispatch<SetStateAction<string | undefined>>
}
