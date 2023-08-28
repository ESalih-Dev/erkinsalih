import { useEffect } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@components/alert-dialog'
import { Button } from '@components/button'

export const PageInProgressAlert = () => {
    useEffect(() => {
        document.getElementById('auto-clicked')?.click()
    }, [])

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button id="auto-clicked" className="hidden" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        This page is not yet finished 🙈
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        You can of course continue to browse around, just know
                        that you're not looking at the finished product
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Got it!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
