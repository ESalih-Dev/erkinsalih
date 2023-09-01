import { useState } from 'react'
import { CompanyExperience } from '~/components/experience/CompanyExperience'
import { CompanyHint } from '~/components/experience/CompanyHint'
import { JobID } from '~/components/experience/ExperienceUtils'
import { Timeline } from '~/components/experience/Timeline'
import { AmazonPVIOS } from '~/components/experience/CompanyInfo/AmazonPVIOS'
import { AmazonPVWeb } from '~/components/experience/CompanyInfo/AmazonPVWeb'
import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'
import { Coral } from '~/components/experience/CompanyInfo/Coral'
import { MindfulChef } from '~/components/experience/CompanyInfo/MindfulChef'
import { PAConsulting } from '~/components/experience/CompanyInfo/PAConsulting'
import { Xata } from '~/components/experience/CompanyInfo/Xata'

// Job list starts from most-recent
export const EXPERIENCE: Record<JobID, CompanyInfo> = {
    Xata,
    Coral,
    MindfulChef,
    AmazonPVWeb,
    AmazonPVIOS,
    PAConsulting,
}

const Experience = () => {
    const [hovering, setHovering] = useState<JobID | undefined>()
    const [experience, setExperience] = useState<JobID | undefined>()

    return (
        <div className="md:my-20">
            <div
                className={`pb-8 font-bold tracking-wider transition-all duration-1000 ease-in-out ${
                    experience
                        ? 'pt-0 text-2xl text-white'
                        : 'pt-[40vh] text-4xl text-slate-400'
                }`}
            >
                My Experience
            </div>
            <div className="space-y-2">
                <Timeline
                    setHovering={setHovering}
                    experience={experience}
                    setExperience={setExperience}
                />
                <CompanyHint experience={hovering} />
            </div>
            <CompanyExperience experience={experience} />
        </div>
    )
}

export default Experience
