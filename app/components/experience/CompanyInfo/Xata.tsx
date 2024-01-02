import {
  CompanyInfo,
  DataPoint,
} from '~/components/experience/CompanyInfo/CompanyInfo'

const description = (
  <>
    <p>A blip in my career to put it lightly...</p>
    <p>
      Made one-to-many relationships visible in the front-end (integrating with
      a new API to provide this data), along with providing customers an
      improved UX for clearer visibility on the "many" side of the relationship.
    </p>
    <p>
      Outlined and documented multiple performance issues with the front-end
      architecture affecting both local development and production. Investigated
      and diagnosed how to fix page load time in local development (~7 seconds
      to load a single page). Produced a fully functioning SSR demo of the
      landing page (pre-existing app is entirely client-side fetch + render)
      showing an 80% reduction in LCP performance.
    </p>
  </>
)

const chartData: DataPoint[] = [
  {
    name: 'Code Quality',
    value: 5,
  },
  {
    name: 'Engineer Skill',
    value: 6,
  },
  {
    name: 'Work/Life balance',
    value: 8,
  },
  {
    name: 'Freedom',
    value: 3,
  },
  {
    name: 'Happiness',
    value: 3,
  },
]

export const Xata: CompanyInfo = {
  id: 'Xata',
  logoUrl:
    'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/tnw9wcrzt9r7wrpo8b4t',
  companyName: 'Xata.io',
  companyUrl: 'https://xata.io/',
  companySize: '11 - 50',
  role: 'Senior Front End Engineer',
  tenure: 2,
  tenureDates: 'Jul 2023 - Aug 2023',
  linkedInUrl: 'https://www.linkedin.com/company/xataio/',
  technologies: ['TypeScript', 'React', 'NextJS', 'ChakraUI'],
  description,
  chartData,
}
