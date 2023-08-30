import { useState } from 'react'
// import { CompanyExperience } from '~/components/experience/CompanyExperience'
import { CompanyHint } from '~/components/experience/CompanyHint'
import { JobID } from '~/components/experience/ExperienceUtils'
import { PageInProgressAlert } from '~/components/experience/PageInProgressAlert'
import { Timeline } from '~/components/experience/Timeline'

const Experience = () => {
    const [hovering, setHovering] = useState<JobID | undefined>()
    const [experience, setExperience] = useState<JobID | undefined>()
    console.log(experience)

    return (
        <div className="container md:my-20">
            <PageInProgressAlert />
            <div
                className={`pb-8 font-bold tracking-wider transition-all duration-1000 ease-in-out ${
                    experience
                        ? 'pt-0 text-2xl text-white'
                        : 'pt-[40vh] text-4xl text-slate-400'
                }`}
            >
                My Experience
            </div>
            <div className={`space-y-2`}>
                <Timeline
                    setHovering={(experience) => setHovering(experience)}
                    experience={experience}
                    setExperience={setExperience}
                />
                <CompanyHint experience={hovering} />
            </div>
        </div>
    )
}

export default Experience
