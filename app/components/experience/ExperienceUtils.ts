export type JobID =
  | 'PAConsulting'
  | 'AmazonPVIOS'
  | 'AmazonPVWeb'
  | 'MindfulChef'
  | 'Arcane'
  | 'Xata'
  | 'Cytora'

export type CompanySize =
  | '1 - 10'
  | '11 - 50'
  | '51 - 200'
  | '201 - 500'
  | '501 - 1000'
  | '1001 - 5000'
  | '5001 - 10,000'
  | '10,001+'

export const Language = [
  'TypeScript',
  'JavaScript',
  'Scala',
  'Java',
  'Swift',
  'Objective-C',
  'Python',
] as const
type Language = (typeof Language)[number]

export const Libraries = ['React', 'Remix', 'NextJS', 'Redux'] as const
type Libraries = (typeof Libraries)[number]

export const Styling = ['MUI', 'ChakraUI', 'TailwindCSS'] as const
type Styling = (typeof Styling)[number]

export type Technology = Language | Libraries | Styling
