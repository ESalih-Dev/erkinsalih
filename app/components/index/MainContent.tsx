import { RefreshCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@components/button'
import { Card, CardDescription } from '@components/card'

const FACTS = [
    'I have a black belt in martial arts',
    "I'm currently learning Spanish",
    'The first time I had a bloody mary I almost vomitted',
    'I think Italian food is extremely overrated',
    'My favourite colour is orange - I love it so much that my car is orange',
    '99% of the time my farts are odourless 🙈',
    'The first time I saw a scorpion was in my kitchen in Mexico',
]

const getFactNumber = (prev?: number): number => {
    const getPosition = () => Math.floor(Math.random() * FACTS.length)
    let nextPos = getPosition()
    while (nextPos === prev) nextPos = getPosition()
    return nextPos
}

const RandomFactGenerator = () => {
    const [spinning, setSpinning] = useState(false)
    const [factNumber, setFactNumber] = useState(getFactNumber())

    useEffect(() => {
        if (spinning) setFactNumber(getFactNumber(factNumber))
    }, [spinning])

    const flipSpinningState = () => setSpinning(!spinning)

    return (
        <Card className="animate-fade-up p-4">
            <CardDescription className="mb-4">
                A random fact about me...
            </CardDescription>
            <div className="flex flex-row items-center">
                <Button
                    className="self-start p-2"
                    variant="outline"
                    size="icon"
                    onClick={flipSpinningState}
                >
                    <RefreshCcw
                        className={`${
                            spinning && 'animate-spin-once'
                        } min-h-4 min-w-4 transition hover:rotate-12 focus:animate-spin`}
                        onAnimationEnd={flipSpinningState}
                    />
                </Button>
                <div className="ml-4 text-xl">{FACTS[factNumber]}</div>
            </div>
        </Card>
    )
}

export const MainContent = () => (
    <div className="flex flex-col md:flex-row">
        <div className="my-20">
            <div className="relative mb-4 animate-fade-up text-xl font-light">
                Hi, i'm kin 🙂
            </div>
            <div className="relative mb-2 animate-fade-up text-4xl font-bold tracking-wider lg:whitespace-nowrap">
                i like to travel. i also like to eat.
            </div>
            <div className="relative mb-16 animate-fade-up text-4xl font-bold tracking-wider lg:whitespace-nowrap">
                i just love travelling and eating.
            </div>
            <RandomFactGenerator />
        </div>
        <div className="animate-unblur md:ml-40">
            <img
                className="rounded-3xl"
                src="https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto,ar_1.0,c_fill,w_700/yod23rsojjmnbz75vkir"
                alt="Me in front of a mirror"
            />
        </div>
    </div>
)
