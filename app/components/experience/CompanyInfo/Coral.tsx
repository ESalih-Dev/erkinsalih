import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'

const description = (
    <>
        <p>
            A tier-1 VC-backed startup, I joined Coral as the first front-end
            engineer (employee #5) to architect and build out the front-end for
            the MVP. Coral is an "AWS shop" so we built a serverless Node.js app
            deployed on AWS Lambda with Remix as our framework of choice. We
            built a React app entirely in TypeScript using MUI for styling and
            building out the component library presented in Storybook.
        </p>
        <p>
            As we were starting from scratch I was responsible for setting the
            coding standards for FE development. This included how front-end
            would work with design/UX through to creating the GitHub workflows
            required for releasing code into production.
        </p>
        <p>
            I left Coral when they were a size of 12 employees. In that time I
            created the front-end tech assessment and had conducted ~20
            interviews to hire an additional 2 front-end engineers into the
            team.
        </p>
    </>
)

export const Coral: CompanyInfo = {
    id: 'Coral',
    logoUrl:
        'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/awdfexkiemnj0aixgbyi',
    companyName: 'Coral',
    companyUrl: 'https://hicoral.com/',
    companySize: '1 - 10',
    role: 'Founding Front End Engineer',
    tenure: 15,
    tenureDates: 'Apr 2022 - Jun 2023',
    linkedInUrl: 'https://www.linkedin.com/company/hicoral/',
    technologies: ['TypeScript', 'React', 'Remix', 'MUI'],
    description,
}
