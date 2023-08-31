import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'

const description = (
    <>
        <p>
            Mindful Chef's FE codebase was originally built scrappily by an
            agency; a strong focus of mine was improving the performance. I
            migrated the Express web server to use built-in Next.js server which
            improved the Lighthouse score by 25 points.
        </p>
        <p>
            We massively lacked visibility when customers were hitting
            bugs/errors on the website (specifically in the sign-up flow as
            customers were contacting CS for support). I investigated and
            documented customer failure points and provided insight to
            leadership into the disconnect between back-end and front-end and
            lead the work to surface metrics into DataDog for engineer + product
            visibility.
        </p>
    </>
)

export const MindfulChef: CompanyInfo = {
    id: 'MindfulChef',
    logoUrl:
        'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/qw2lrxwsjlhtfsbjscdo',
    companyName: 'Mindful Chef',
    companyUrl: 'https://www.mindfulchef.com/',
    companySize: '51 - 200',
    role: 'Front End Engineer',
    tenure: 6,
    tenureDates: 'Oct 2021 - Mar 2022',
    linkedInUrl: 'https://www.linkedin.com/company/mindful-chef/',
    technologies: ['TypeScript', 'JavaScript', 'NextJS', 'Redux'],
    description,
}
