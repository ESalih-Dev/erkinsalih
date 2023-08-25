import type { LinksFunction } from '@remix-run/cloudflare'
import { cssBundleHref } from '@remix-run/css-bundle'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import styles from './globals.css'
import { Toolbar } from '~/components/root/Toolbar'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: styles },
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-32x32.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

const App = () => {
    return (
        <html lang="en" className="dark">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Toolbar />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
