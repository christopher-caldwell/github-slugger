import { FC } from 'react'
import { CopyText } from '../../components/copy-text'

export const Result: FC<Props> = ({ result }) => {
  return result ? <CopyText textToCopy={result} /> : null
}

interface Props {
  result: string | undefined
}
