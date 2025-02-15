"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TrainFrontTunnel, MenuIcon, XIcon } from "lucide-react"
import { ThemeTogglerButton } from "./themeToggle"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
            <header className="px-4 lg:px-6 h-20 flex items-center">
                <Link className="flex items-center justify-center" href="/">
                    <TrainFrontTunnel className="h-6 w-6 mr-2" />
                    <span className="font-bold">Anas Blogs</span>
                </Link>
                <nav className="ml-auto items-center gap-4 sm:gap-6 hidden md:flex">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
                        Blog
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                        Contact
                    </Link>
                </nav>
                <Button
                    className="ml-auto md:hidden"
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </Button>
                <div className="md:ml-6">
                    <ThemeTogglerButton />
                </div>
                
            </header>
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800">
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
                            Blog
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
                            About
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    )
}