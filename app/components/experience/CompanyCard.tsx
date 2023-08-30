import { Link } from '@remix-run/react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@components/card'
import { Linkedin } from 'lucide-react'
import { TechnologyBadge } from '~/components/experience/TechnologyBadge'
import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@components/tooltip'

export const CompanyCard = ({
    logoUrl,
    companyName,
    companyUrl,
    team,
    companySize,
    role,
    linkedInUrl,
    technologies,
}: CompanyInfo) => (
    <Card className="min-w-[400px] max-w-[400px]">
        <CardHeader>
            <CardTitle className="flex flex-row justify-between">
                <div className="flex flex-row space-x-2">
                    <img
                        src={logoUrl}
                        alt={`${companyName} logo`}
                        className="h-6 w-6 rounded-sm"
                    />
                    <Link
                        to={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:underline-offset-4"
                    >
                        {companyName}
                    </Link>
                    {team && (
                        <span className="text-lg text-muted-foreground">
                            - {team}
                        </span>
                    )}
                </div>
                <TooltipProvider delayDuration={200}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                to={linkedInUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start"
                            >
                                <Linkedin className="opacity-50 hover:opacity-100" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>{`${companyName}'s LinkedIn`}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardTitle>
            <CardDescription>{`${companySize} employees`}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
            <span className="text-lg font-extrabold text-card-foreground">
                {role}
            </span>
            <div className="flex flex-row space-x-2">
                {technologies.map((tech) => (
                    <TechnologyBadge key={tech} technology={tech} />
                ))}
            </div>
        </CardContent>
    </Card>
)
