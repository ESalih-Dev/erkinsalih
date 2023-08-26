import { Outlet } from '@remix-run/react'
import { PageToggle } from '~/components/PageToggle'

const Layout = () => (
    <>
        <Outlet />
        <PageToggle />
    </>
)

export default Layout
