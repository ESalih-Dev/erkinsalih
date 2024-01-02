import { Card } from '@components/card'
import { Link } from '@remix-run/react'

const FOOD_IMG =
  'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/vmcl58pzozn3m3ndxn3q'

export const LifeInsightsFood = () => {
  return (
    <Card className="flex flex-col justify-between space-y-6 border-none bg-slate-900 p-6 sm:p-12 md:flex-row md:space-x-12 md:space-y-0">
      <div className="whitespace-pre-wrap text-xl leading-9 text-muted-foreground md:w-1/2">
        Sometimes I wonder whether I travel to see sights, enjoy new
        experiences, meet people, live in different environments...or if I'm
        just travelling to eat my way around the world 😄 {`\n`}
        No matter how I look at it, food makes up a huge part of my life and the
        food markets and restaurants are the first thing I look at when I'm
        planning my trips. I was recently asked:{`\n\n`}
        <div className="flex flex-row font-semibold italic">
          <span>Q: </span>
          <span>What's one thing you always do when visiting a new place?</span>
        </div>
        <div className="italic">
          <span>A: </span>
          <span>Airbnb food tour - every time.</span>
        </div>
        {`\n`}Besides from food, a good cup of coffee can make my day. At home I
        grind my own beans for a V60 filter (topped with a bit of frothed milk
        🤌). Out and about, my go-to is a flat white with my current favourite
        spots in London being{' '}
        <Link
          to="https://goo.gl/maps/aSJth4awFmwdCTJT9"
          className="font-semibold underline underline-offset-4 hover:text-slate-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Glass
        </Link>{' '}
        in Camden and{' '}
        <Link
          to="https://goo.gl/maps/zgNKkh4936wsPC1N7"
          className="font-semibold underline underline-offset-4 hover:text-slate-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beanberry
        </Link>{' '}
        near Holborn.
      </div>
      <img
        className="h-min w-full rounded-md md:w-2/5"
        width={448}
        height={560}
        src={FOOD_IMG}
        alt="Lobster brioche from Homer Lobster - Marais, Paris"
      />
    </Card>
  )
}
