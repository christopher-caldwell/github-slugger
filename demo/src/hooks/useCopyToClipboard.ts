/**
 * @source https://usehooks-ts.com/react-hook/use-copy-to-clipboard
 */
import { useState } from 'react'

export const useCopyToClipboard = (textToCopy?: string | null, onCopy?: () => void) => {
  const [isError, setIsError] = useState<boolean>(false)
  const copy = async (text = textToCopy) => {
    setIsError(false)
    if (!text) throw new Error('Must provide either `textToCopy` or `text`')
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      setIsError(true)
      return
    }
    await navigator.clipboard.writeText(text)
    onCopy?.()
  }

  return { copy, isError }
}
