import { useEffect, useRef, useState } from 'react'
import { useTransition } from 'react-transition-state'
import { EXPERIENCE } from '~/routes/experience'
import { ExperienceInfo } from '~/components/experience/ExperienceInfo'
import { ExperienceDescription } from '~/components/experience/ExperienceDescription'
import { JobID } from '~/components/experience/ExperienceUtils'
import { ExperienceChart } from '~/components/experience/ExperienceChart'
interface Props {
  experience: JobID | undefined
}

export const CompanyExperience = ({ experience }: Props) => {
  const shownExperience = useRef<JobID | undefined>(experience)

  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  })

  useEffect(() => {
    if (isMounted) {
      toggle(false)
    } else {
      shownExperience.current = experience
      toggle(true)
    }
  }, [experience])

  useEffect(() => {
    if (status === 'unmounted' && experience) {
      shownExperience.current = experience
      toggle(true)
    }
  }, [status])

  let content
  if (isMounted) {
    const experienceInfo =
      shownExperience.current && EXPERIENCE[shownExperience.current]
    content = experienceInfo && (
      <div className="flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="lg:w-1/2">
          <ExperienceInfo {...experienceInfo} />
          {experienceInfo.chartData && (
            <ExperienceChart chartData={experienceInfo.chartData} />
          )}
        </div>
        <div className="lg:w-1/2">
          <ExperienceDescription
            role={experienceInfo.role}
            description={experienceInfo.description}
          />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`space-y-4 transition-all duration-1000 ease-in-out ${
        status === 'preEnter' || status === 'exiting'
          ? 'pt-0 opacity-0'
          : 'lg:pt-[10vh]'
      }`}
    >
      {content}
    </div>
  )
}
