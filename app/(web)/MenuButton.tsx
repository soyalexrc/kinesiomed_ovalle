"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <Button
                variant="branded"
                size="icon"
                className="md:hidden"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Menu className="h-6 w-6" />
            </Button>

            {/* Mobile menu */}
            <nav
                className={`fixed top-0 left-0 right-0 bg-background shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
                aria-label="Mobile menu"
            >
                <div className="p-4">
                    <Button
                        variant="branded"
                        size="icon"
                        className="absolute top-4 right-4"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6 text-white" />
                    </Button>
                    <ul className="space-y-4 mt-12 mb-4">
                        <li>
                            <a href="#" className="block py-2 text-lg hover:text-primary" onClick={closeMenu}>Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-lg hover:text-primary" onClick={closeMenu}>Acerca de nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-lg hover:text-primary" onClick={closeMenu}>Servicios</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-lg hover:text-primary" onClick={closeMenu}>Contactanos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
