import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const sections = [
  { n: 1, title: '01 · רקע' },
  { n: 2, title: '02 · האתגר' },
  { n: 3, title: '03 · השוואת קהלי יעד' },
  { n: 4, title: '04 · העיצוב הקיים' },
  { n: 5, title: '05 · העיצוב החדש' },
  { n: 6, title: '06 · השוואה מקיפה' },
  { n: 7, title: '07 · הנמקת החלטות' },
  { n: 8, title: '08 · סיכום' },
]

/** ניווט נקודות צף בצד — מסמן את הסקשן הפעיל לפי הגלילה */
export default function ProgressDots() {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(`sec-${s.n}`))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.id.replace('sec-', '')))
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-10 left-7 z-50 hidden flex-col items-center lg:flex print:hidden"
      aria-label="ניווט בין הסקשנים"
    >
      {sections.map((section, i) => (
        <div key={section.n} className="flex flex-col items-center">
          <button
            type="button"
            title={section.title}
            onClick={() =>
              document
                .getElementById(`sec-${section.n}`)
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            className={cn(
              'flex items-center justify-center rounded-full border font-semibold transition-all',
              active === section.n
                ? 'size-11 border-[#1c1c1e] bg-[#1c1c1e] text-[17px] text-white'
                : 'size-8 border-[#d4d4d8] bg-white text-sm text-[#b4b4b8] hover:scale-110 hover:border-[#1c1c1e] hover:bg-[#1c1c1e] hover:text-white',
            )}
          >
            {String(section.n).padStart(2, '0')}
          </button>
          {i < sections.length - 1 && <div className="h-7 w-px bg-[#d4d4d8]" />}
        </div>
      ))}
    </nav>
  )
}
