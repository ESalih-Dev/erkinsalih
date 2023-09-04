import { Link } from '@remix-run/react'

export const Footer = () => (
    <div className="absolute bottom-4 left-1/2 flex w-full translate-x-[-50%] items-center justify-center space-x-2 px-12 text-center text-sm text-muted-foreground">
        <span>😎</span>
        <Link
            to="https://github.com/ESalih-Dev/erkinsalih"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
        >
            This website is completely open-source! View the code on GitHub!
        </Link>
        <span>😎</span>
    </div>
)
