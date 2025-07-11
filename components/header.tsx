'use client' // client side

import Link from "next/link"
import { useState } from 'react'
import { X, Menu } from 'lucide-react' // npm instaill lucide-react
// import '../app/globals.css'

// functional component for header
export default function Header() {

	const [menuOpen, setMenuOpen] = useState(false)

  	return <header className="bg-stone-100 fixed w-full z-[99]">
      <div className="container-large m-auto py-3">
        	<div className="flex flex-wrap justify-between m-auto max-w-screen">
          	<Link className="body-font" href="/">E A R T H W I S E</Link>
				
							{/* Desktop Nav */}
							<ul className="hidden md:flex gap-5 items-center body-font text-xs">
								<li><Link href="/about">ABOUT</Link></li>
								<li><Link href="/services">SERVICES</Link></li>
								<li><Link href="/gallery">GALLERY</Link></li>
								<li><Link href="/contact">CONTACT</Link></li>
							</ul>

							{/* Mobile Menu Button */}
							<button
								className="md:hidden text-stone-800"
								onClick={() => setMenuOpen(true)}
								aria-label="Open menu"
							>
								<Menu size={24} />
							</button>
						
						{/* Mobile Nav Overlay */}
						{menuOpen && (
							<div className="fixed inset-0 bg-stone-100 z-50 flex flex-col items-center justify-center text-center p-8 gap-6 body-font text-lg">
								<button
									className="absolute top-4 right-4 text-stone-800"
									onClick={() => setMenuOpen(false)}
									aria-label="Close menu"
								>
									<X size={28} />
								</button>
								<Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
								<Link href="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
								<Link href="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</Link>
								<Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
							</div>
						)}
				
        	</div>
      </div>
	</header>
}