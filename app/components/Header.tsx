"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    return (
        <header className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white shadow'>

            <h1 className="text-xl font-bold">Mon Portfolio</h1>

            <nav className="space-x-4">
                <Link href="/" className={`hover:text-blue-600 ${pathname === '/' ? 'text-blue-700 font-bold' : ''}`}>
                    Accueil
                </Link>
                <Link href="/projects"
                    className={`hover:text-blue-600 ${pathname.includes('/projects') ? 'text-blue-700 font-bold' : ''}`}>
                    Projets
                </Link>
                <Link href="/contact" className={`hover:text-blue-600 ${pathname === '/contact' ? 'text-blue-700 font-bold' : ''}`}>
                    Contact
                </Link>
            </nav>

        </header>
    )
}

export default Header