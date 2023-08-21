import type { V2_MetaFunction } from '@remix-run/cloudflare'
import { MainContent } from '~/components/index/MainContent'
import { Socials } from '~/components/index/Socials'

export const meta: V2_MetaFunction = () => {
    return [
        { title: "It's Kin 🥶" },
        { name: 'description', content: 'Welcome to my website!' },
    ]
}

const Index = () => (
    <div className="container space-y-16 md:mt-20">
        <MainContent />
        <Socials />
    </div>
)

export default Index
