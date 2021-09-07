import { regex } from './regexManual'

export const slugger = function slugger(stringToSlug: string, maintainCase?: boolean) {
  if (typeof stringToSlug !== 'string') return ''
  if (!maintainCase) stringToSlug = stringToSlug.toLowerCase()
  return stringToSlug.replace(regex, '').replace(/ /g, '-')
}
