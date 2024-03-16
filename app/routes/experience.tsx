import { useEffect, useState } from 'react'
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
import { isMobile } from '~/utils'
import { MetaFunction } from '@remix-run/cloudflare'

export const EXPERIENCE: Record<JobID, CompanyInfo> = {
  PAConsulting,
  AmazonPVIOS,
  AmazonPVWeb,
  MindfulChef,
  Coral,
  Xata,
}

export const meta: MetaFunction = () => {
  return [
    { title: "It's Kin, you found me 🔥" },
    {
      name: 'description',
      content:
        'Look back in history at my experience working at Amazon, Mindful Chef, Coral & Xata',
    },
  ]
}

const Experience = () => {
  const isMobileDevice = isMobile()
  const [hovering, setHovering] = useState<JobID | undefined>()
  const [experience, setExperience] = useState<JobID | undefined>()

  useEffect(() => {
    if (isMobileDevice) setTimeout(() => setExperience('Xata'), 700)
  }, [])

  const handleKeyPress = (e: KeyboardEvent) => {
    if (experience == undefined) return
    const jobs = Object.keys(EXPERIENCE) as (keyof typeof EXPERIENCE)[]
    const index = jobs.indexOf(experience)
    if (e.key === 'ArrowLeft' && index > 0) {
      setExperience(jobs[index - 1])
    }
    if (e.key === 'ArrowRight' && index < jobs.length - 1) {
      setExperience(jobs[index + 1])
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => document.removeEventListener('keydown', handleKeyPress)
  })

  return (
    <div className="py-20">
      <div
        className={`pb-8 font-bold tracking-wider transition-all duration-1000 ease-in-out ${
          experience
            ? 'pt-0 text-2xl text-white'
            : 'pt-[40vh] text-4xl text-slate-400'
        }`}
      >
        My Experience
      </div>
      <div className="mb-2 space-y-2">
        <Timeline
          setHovering={setHovering}
          experience={experience}
          setExperience={setExperience}
        />
        {!isMobileDevice && <CompanyHint experience={hovering} />}
      </div>
      <CompanyExperience experience={experience} />
    </div>
  )
}

export default Experience
