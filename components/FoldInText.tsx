// make this a client-side component so we can use DOM + GSAP
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// reg the scroll trigger plugin so GSAP can watch scroll position
gsap.registerPlugin(ScrollTrigger)

type FoldInTextProps = {
  children: React.ReactNode // text or elements to animate
  className?: string // optional tailwind or CSS class
}

export default function FoldInText({ children, className }: FoldInTextProps) {
  // create a ref to the element we want to animate
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // don't animate if ref is null (precaution)
    if (!el.current) return

    // GSAP animation
    gsap.fromTo(
      el.current, // element to animate

      // starting state
      {
        opacity: 0,
        translateY: '20%',
        transformOrigin: 'bottom center',
      },
      // ending state
      {
        opacity: 1,
        translateY: '0%',
        duration: 1,
        ease: 'power2.out',
        // trigger when scroll into view
        scrollTrigger: {
          trigger: el.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  // render the animated content inside a div with ref + optional classes
  return (
    <div ref={el} className={className}>
      {children}
    </div>
  )
}