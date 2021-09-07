import { slugger } from '../src'

describe('Invalid Input Slugging', () => {
  test('Empty string returns empty string', () => {
    const slug = slugger('')
    expect(slug).toBe('')
  })
  test('Undefined returns empty string', () => {
    //@ts-ignore
    const slug = slugger(undefined)
    expect(slug).toBe('')
  })
  test('Null returns empty string', () => {
    //@ts-ignore
    const slug = slugger(null)
    expect(slug).toBe('')
  })
})

describe('Valid Input Slugging', () => {
  test('No special characters', () => {
    const slug = slugger('Something bro')
    expect(slug).toBe('something-bro')
  })
  test('Exclamation mark', () => {
    const slug = slugger('Something bro!')
    expect(slug).toBe('something-bro')
  })
  test('Adding "/" results in 2 "-"', () => {
    const slug = slugger('Something bro / or whatever!')
    expect(slug).toBe('something-bro--or-whatever')
  })
  test('Adding "&" results in 2 "-"', () => {
    const slug = slugger('Something bro & or whatever!')
    expect(slug).toBe('something-bro--or-whatever')
  })
  test('Adding "#" results in 2 "-"', () => {
    const slug = slugger('Something bro # or whatever!')
    expect(slug).toBe('something-bro--or-whatever')
  })
})

describe('Maintaining Casing', () => {
  test('One capital', () => {
    const slug = slugger('Something bro', true)
    expect(slug).toBe('Something-bro')
  })
  test('All capital', () => {
    const slug = slugger('SOMETHING LOUD', true)
    expect(slug).toBe('SOMETHING-LOUD')
  })
})
