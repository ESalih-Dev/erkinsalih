import { Card, CardContent, CardHeader, CardTitle } from '@components/card'
import { ReactNode } from 'react'

interface Props {
    role: string
    description: ReactNode
}

export const ExperienceDescription = ({ role, description }: Props) => (
    <Card className="md:w-3/5">
        <CardHeader>
            <CardTitle>{role}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 whitespace-pre-wrap text-slate-300">
            {description}
        </CardContent>
    </Card>
)
