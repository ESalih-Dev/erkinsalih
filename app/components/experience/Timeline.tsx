import { Circle } from 'lucide-react'
import { EXPERIENCE } from '~/routes/experience'
import { JobID } from '~/components/experience/ExperienceUtils'
import { Separator } from '@components/separator'
import { Button } from '@components/button'

const CircleStyles =
  'w-6 hover:cursor-pointer transition-colors duration-300 hover:stroke-violet-600 hover:duration-500'
const LineStyles = 'h-1 rounded-md transition-colors duration-300'

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
            <Button
              className="p-0 hover:bg-transparent"
              variant="ghost"
              onClick={() => {
                setExperience(experience === exp.id ? undefined : exp.id)
              }}
              onMouseEnter={() => setHovering(exp.id)}
              onMouseLeave={() => setHovering(undefined)}
            >
              <Circle
                className={`${CircleStyles} ${
                  experience === exp.id ? 'stroke-violet-800' : 'stroke-white'
                }`}
              />
            </Button>
            <Separator
              className={`${LineStyles} bg-white bg-gradient-to-l from-white from-50% to-violet-800 to-50% bg-[length:200%_100%] bg-right transition-all duration-1000 ${
                experience === exp.id ? 'bg-left' : 'duration-0'
              }`}
              style={{ width: `calc(${width}% - 1.5rem)` }}
            />
          </>
        )
      })}
    </div>
  )
}
