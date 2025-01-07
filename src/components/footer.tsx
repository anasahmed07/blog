import Link from "next/link"
import { SiFacebook, SiInstagram, SiLinkedin, SiX ,SiYoutube } from '@icons-pack/react-simple-icons';

export default function Footer(){
    return(
        <footer className="w-full py-6 px-4 md:px-6 border-t">
            <div className="mx-auto flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 AnasLogs. All rights reserved.
                </p>
                <nav className="flex gap-4 mt-2">
                <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Privacy Policy
                </Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <Link href="#" target="blank" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <SiYoutube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <SiX className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" target="blank" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" target="blank" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <SiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
                <SiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
                </Link>
            </div>
            </div>
        </footer>
    )
}