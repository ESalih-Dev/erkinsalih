import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { LifeInsightsCar } from '~/components/index/LifeInsightsCar'
import { LifeInsightsFood } from '~/components/index/LifeInsightsFood'
import { LifeInsightsTravel } from '~/components/index/LifeInsightsTravel'
import { LifeQuote } from '~/components/index/LifeQuote'
import { MainContent } from '~/components/index/MainContent'
import { Socials } from '~/components/index/Socials'
import { fetchCountries } from '~/models/index/fetchCountries.server'

export const loader = async () => {
    const countries = await fetchCountries()
    return json({ countries })
}

const Index = () => {
    const { countries } = useLoaderData<typeof loader>()

    return (
        <div className="container my-20 space-y-20">
            <MainContent />
            <Socials />
            <LifeQuote />
            <LifeInsightsTravel countries={countries} />
            <LifeInsightsFood />
            <LifeInsightsCar />
        </div>
    )
}

export default Index
