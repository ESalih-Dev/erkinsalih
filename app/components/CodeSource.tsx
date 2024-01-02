import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@components/hover-card'
import { Link } from '@remix-run/react'
import { Code2 } from 'lucide-react'

export const CodeSource = () => (
  <HoverCard openDelay={200}>
    <HoverCardTrigger asChild>
      <Link
        to="https://github.com/ESalih-Dev/Personal-Website"
        target="_blank"
        className="ease relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 ease-in before:absolute before:h-[150%] before:w-[150%] before:animate-spin-slow before:bg-[conic-gradient(red,yellow,lime,aqua,blue,magenta,red)] before:content-[''] after:absolute after:h-[85%] after:w-[85%] after:rounded-full after:bg-[hsl(var(--background))] hover:scale-[1.1] hover:before:animate-spin"
      >
        <Code2 className="z-10 h-6 w-6" />
      </Link>
    </HoverCardTrigger>
    <HoverCardContent className="mt-2 w-full whitespace-nowrap rounded-lg border-violet-800">
      View the code for this site on GitHub! 😎
    </HoverCardContent>
  </HoverCard>
)
