import { z } from 'zod'

const VISITED_COUNTRIES = [
  'Albania',
  'Australia',
  'Cyprus',
  'France',
  'Greece',
  'Hungary',
  'Indonesia',
  'Italy',
  'Japan',
  'Laos',
  'Mexico',
  'Monaco',
  'Morocco',
  'Netherlands',
  'Philippines',
  'Portugal',
  'Saint Lucia',
  'Singapore',
  'South Korea',
  'Spain',
  'Sweden',
  'Switzerland',
  'Thailand',
  'Turkey',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Vatican City',
  'Vietnam',
]

const countrySchema = z.object({
  name: z.object({ common: z.string() }),
  flags: z.object({ svg: z.string().url() }),
})

const countriesSchema = z.array(countrySchema)

export type CountryData = Record<string, { flag: string; visited: boolean }>

export const fetchCountries = async (): Promise<CountryData | undefined> => {
  try {
    const fetchedCountries = await (
      await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    ).json()
    const countries = countriesSchema.parse(fetchedCountries)
    return countries.reduce<CountryData>(
      (acc, { name: { common }, flags: { svg } }) => ({
        ...acc,
        [common]: {
          flag: svg,
          visited: VISITED_COUNTRIES.includes(common),
        },
      }),
      {}
    )
  } catch (e) {
    console.error(e)
    return undefined
  }
}
