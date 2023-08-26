import { ReactNode } from 'react'
import { useHydrated } from '~/utils'

interface Props {
    children(): ReactNode
    fallback?: ReactNode
}
export const ClientOnly = ({ children, fallback }: Props) =>
    useHydrated() ? <>{children()}</> : <>{fallback}</>
