import { Button } from '@components/button'
import { Card } from '@components/card'
import { Input } from '@components/input'
import { Popover, PopoverContent, PopoverTrigger } from '@components/popover'
import { ScrollArea } from '@components/scroll-area'
import { Separator } from '@components/separator'
import { PopoverClose } from '@radix-ui/react-popover'
import { Globe2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CountryData } from '~/models/index/fetchCountries.server'

const SKIING_IMG =
    'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/ld3geyjcp23lqohxt4ci'

interface Props {
    countries?: CountryData
}

const VisitChecker = ({ countries }: Required<Props>) => {
    const [search, setSearch] = useState('')
    const countryNames = Object.keys(countries).sort()
    const [filteredCountries, setFilteredCountries] = useState(countryNames)
    const [selected, setSelected] = useState<string | undefined>(undefined)

    useEffect(() => {
        setFilteredCountries(
            countryNames.filter((c) =>
                c.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
        )
    }, [search])

    const handleSelect = (country: string) => setSelected(country)

    return (
        <div className="flex items-center space-x-4">
            <Popover
                onOpenChange={(e) => {
                    if (!e) {
                        setSearch('')
                        setFilteredCountries(countryNames)
                    }
                }}
            >
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <Globe2 className="mr-1" /> Check if I've visited a
                        country!
                    </Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                    <Input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <ScrollArea className="h-72 pt-4">
                        {filteredCountries.map((country, i) => (
                            <>
                                <Button
                                    asChild
                                    key={country}
                                    variant="ghost"
                                    onClick={() => handleSelect(country)}
                                    className="flex w-full flex-row justify-start px-2 py-0"
                                >
                                    <PopoverClose>
                                        <div className="min-w-[3rem]">
                                            <img
                                                src={countries[country].flag}
                                                alt={`${country} flag`}
                                                className="h-4"
                                            />
                                        </div>
                                        <span className="text-start">
                                            {country}
                                        </span>
                                    </PopoverClose>
                                </Button>
                                {filteredCountries.length - 1 !== i && (
                                    <Separator className="my-2" />
                                )}
                            </>
                        ))}
                    </ScrollArea>
                </PopoverContent>
            </Popover>
            {typeof selected === 'string' && (
                <div>
                    {countries[selected].visited
                        ? `${selected} - yes! 😎`
                        : `${selected} - not yet 😭`}
                </div>
            )}
        </div>
    )
}

export const LifeInsightsTravel = ({ countries }: Props) => (
    <>
        <Card className="flex flex-col justify-between space-y-6 border-none bg-slate-900 p-12 md:flex-row md:space-x-12 md:space-y-0">
            <img
                className="h-min w-full rounded-md md:w-2/5"
                src={SKIING_IMG}
                alt="Kin (left), Tom (right) skiing selfie in Switzerland"
            />
            <div className="flex w-full flex-col justify-between space-y-4 md:w-1/2">
                <div className="whitespace-pre-wrap text-xl leading-9 text-muted-foreground">
                    Since graduating from university I've always been keen to
                    travel and see as much of the world as possible. It started
                    with a 5 week trip to Japan and since then I've seen some
                    incredible sights, climbed mountains, skied slopes, tried
                    different types of food I never even knew existed and made
                    lifelong friends with some incredible people that I've met
                    with in different countries across the world.
                    {'\n\n'}
                    Next on my list of places to go is either South America or
                    Asia. I'm learning Spanish with the goal of making it easier
                    to travel the world. I can't imagine a life being stuck in
                    one place (for the time being at least). Becoming a full
                    digital nomad with no permanent home is the ultimate goal 🚀
                </div>
                {countries && <VisitChecker countries={countries} />}
            </div>
        </Card>
    </>
)
