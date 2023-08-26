import { CompanyCard } from '~/components/experience/CompanyCard'
import { AmazonPVIOS } from '~/components/experience/CompanyInfo/AmazonPVIOS'
import { AmazonPVWeb } from '~/components/experience/CompanyInfo/AmazonPVWeb'
import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'
import { Coral } from '~/components/experience/CompanyInfo/Coral'
import { MindfulChef } from '~/components/experience/CompanyInfo/MindfulChef'
import { PAConsulting } from '~/components/experience/CompanyInfo/PAConsulting'
import { Xata } from '~/components/experience/CompanyInfo/Xata'

const EXPERIENCE: CompanyInfo[] = [
    Xata,
    Coral,
    MindfulChef,
    AmazonPVWeb,
    AmazonPVIOS,
    PAConsulting,
]

export const CompanyExperience = () => (
    <div className="flex flex-row space-x-8 overflow-auto py-16">
        {EXPERIENCE.map((exp) => (
            <CompanyCard key={exp.companyName} {...exp} />
        ))}
    </div>
)
