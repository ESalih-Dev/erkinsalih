import { useEffect, useRef } from 'react'
import useTransition from 'react-transition-state'
import { JobID } from '~/components/experience/ExperienceUtils'
import { EXPERIENCE } from '~/routes/experience'

const prettifyTenure = (tenure: number): string => {
  if (tenure < 12) return `${tenure} ${tenure === 1 ? 'month' : 'months'}`
  const years = Math.floor(tenure / 12)
  const months = tenure % 12
  return `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${
    months === 1 ? 'month' : 'months'
  }`
}

interface Props {
  experience: JobID | undefined
}

export const CompanyHint = ({ experience }: Props) => {
  const prevExperience = useRef<JobID>('Xata')

  useEffect(() => {
    if (experience) prevExperience.current = experience
    toggle(!!experience)
  }, [experience])

  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  })

  let content
  if (isMounted) {
    const { logoUrl, companyName, tenure } = EXPERIENCE[prevExperience.current]
    content = (
      <>
        <img
          className={`duration-400 h-6 w-6 rounded-md transition-all ${
            status === 'preEnter' || status === 'exiting'
              ? 'mb-6 opacity-0'
              : ''
          }`}
          src={logoUrl}
          alt={`${companyName} logo`}
        />
        <div
          className={`duration-400 items-end transition-all ${
            status === 'preEnter' || status === 'exiting'
              ? 'mb-6 opacity-0'
              : ''
          }`}
        >
          <span className="text-2xl">{companyName}</span>
          <span> - {prettifyTenure(tenure)}</span>
        </div>
      </>
    )
  }
  return (
    <div className="flex h-8 flex-row items-center space-x-2 text-muted-foreground">
      {content}
    </div>
  )
}
