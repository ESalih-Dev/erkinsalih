import { Circle } from 'lucide-react'
import { EXPERIENCE } from '~/components/experience/CompanyExperience'
import { JobID } from '~/components/experience/ExperienceUtils'

const CircleStyles = 'min-w-fit hover:cursor-pointer hover:stroke-violet-600'
const LineStyles = 'h-1 rounded-lg'

interface Props {
    setHovering: (job: JobID | undefined) => void
    experience?: JobID
    setExperience: (job: JobID) => void
}

export const Timeline = ({ setHovering, experience, setExperience }: Props) => {
    const jobs = Object.values(EXPERIENCE)
    const totalTenure = jobs.reduce((acc, { tenure }) => acc + tenure, 0)

    const experiences = [...jobs].reverse()
    return (
        <div className="flex flex-row items-center">
            {experiences.map((exp, i) => {
                const width = Math.round((exp.tenure / totalTenure) * 100)
                return (
                    <>
                        <Circle
                            className={`${CircleStyles} ${
                                experience === exp.id
                                    ? 'stroke-violet-800'
                                    : 'stroke-white'
                            }`}
                            onClick={() => setExperience(exp.id)}
                            onMouseEnter={() => setHovering(exp.id)}
                            onMouseLeave={() => setHovering(undefined)}
                        />
                        <hr
                            className={`${LineStyles} ${
                                experience === exp.id
                                    ? 'bg-violet-800'
                                    : 'bg-white'
                            }`}
                            style={{ width: `${width}%` }}
                        />
                    </>
                )
            })}
        </div>
    )
}
