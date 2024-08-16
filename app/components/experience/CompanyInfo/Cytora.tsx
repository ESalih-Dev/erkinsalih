import { CompanyInfo } from './index.types'

const description = (
  <>
    <p>
      Vastly improved type-safety across the webapp. The integration of MUI and
      Redux was entirely developed in JavaScript and during the migration
      process we uncovered and fixed a variety of bugs throughout the site.
    </p>
    <p>
      Selected as the cross functional point-of-contact for the front-end team
      dedicated to working on document upload service. This involved being the
      front end <em>"expert"</em> when it came to handling any new requirements
      or bugs raised by product or back-end.
    </p>
  </>
)

export const Cytora: CompanyInfo = {
  id: 'Cytora',
  logoUrl:
    'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/iglekkmiiqed8q0cyavi',
  companyName: 'Cytora',
  companyUrl: 'https://www.cytora.com/',
  companySize: '51 - 200',
  role: 'Senior Front End Engineer',
  tenure: 5,
  tenureDates: 'Mar 2024 - Aug 2024',
  linkedInUrl: 'https://www.linkedin.com/company/cytora/',
  technologies: ['TypeScript', 'React', 'Redux', 'MUI'],
  description,
}
