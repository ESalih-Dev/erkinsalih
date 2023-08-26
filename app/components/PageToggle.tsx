import { Switch } from '@components/switch'
import { useLocation, useNavigate } from '@remix-run/react'
import { useState } from 'react'

export const PageToggle = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [hovering, setHovering] = useState(false)
    const isHome = pathname === '/'

    return (
        <div
            className={
                'fixed left-1/2 top-0 flex translate-x-[-50%] flex-row justify-center space-x-4 rounded-b-lg border bg-slate-950 px-4 py-2 hover:bg-slate-900'
            }
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <span
                className="w-[60px] text-center text-xl tracking-wider"
                style={{
                    opacity: hovering || isHome ? 1 : 0.3,
                    ...{ ...(isHome && { fontWeight: 700 }) },
                }}
            >
                Kin
            </span>
            <Switch
                checked={!isHome}
                onCheckedChange={(c) => navigate(c ? '/experience' : '/')}
            />
            <span
                className="w-[120px] text-center text-xl tracking-wider"
                style={{
                    opacity: hovering || !isHome ? 1 : 0.3,
                    ...{ ...(!isHome && { fontWeight: 700 }) },
                }}
            >
                Experience
            </span>
        </div>
    )
}
