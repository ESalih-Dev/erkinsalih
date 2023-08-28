import { CompanyExperience } from '~/components/experience/CompanyExperience'
import { PageInProgressAlert } from '~/components/experience/PageInProgressAlert'

const Experience = () => {
    return (
        <div className="container space-y-20 md:my-20">
            <PageInProgressAlert />
            <CompanyExperience />
        </div>
    )
}

export default Experience
