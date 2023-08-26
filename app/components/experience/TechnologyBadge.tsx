import { Badge } from '@components/badge'
import {
    Language,
    Libraries,
    Styling,
    Technology,
} from '~/components/experience/ExperienceUtils'

const getBadgeColour = (technology: Technology): string => {
    const tech = technology as any
    if (Language.includes(tech)) return 'bg-indigo-300 hover:bg-indigo-400'
    if (Libraries.includes(tech)) return 'bg-emerald-300 hover:bg-emerald-400'
    if (Styling.includes(tech)) return 'bg-rose-300 hover:bg-rose-400'
    return ''
}

interface Props {
    technology: Technology
}

export const TechnologyBadge = ({ technology }: Props) => (
    <Badge className={`cursor-default ${getBadgeColour(technology)}`}>
        {technology}
    </Badge>
)
