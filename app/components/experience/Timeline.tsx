import { Circle } from 'lucide-react'
import { EXPERIENCE } from '~/routes/experience'
import { JobID } from '~/components/experience/ExperienceUtils'

const CircleStyles =
    'min-w-fit hover:cursor-pointer transition-colors duration-300 hover:stroke-violet-600 hover:duration-500'
const LineStyles = 'h-1 rounded-lg transition-colors duration-300'

interface Props {
    setHovering: (job: JobID | undefined) => void
    experience?: JobID
    setExperience: (job: JobID | undefined) => void
}

export const Timeline = ({ setHovering, experience, setExperience }: Props) => {
    const jobs = Object.values(EXPERIENCE)
    const totalTenure = jobs.reduce((acc, { tenure }) => acc + tenure, 0)

    const experiences = [...jobs].reverse()
    return (
        <div className="flex flex-row items-center">
            {experiences.map((exp) => {
                const width = Math.round((exp.tenure / totalTenure) * 100)
                return (
                    <>
                        <Circle
                            className={`${CircleStyles} ${
                                experience === exp.id
                                    ? 'stroke-violet-800'
                                    : 'stroke-white'
                            }`}
                            onClick={() =>
                                setExperience(
                                    experience === exp.id ? undefined : exp.id
                                )
                            }
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
