import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import logo from '@/assets/home/logo.png'
import whatsappIcon from '@/assets/home/whatsapp-white.svg'

export const navLinks = [
  { href: '/contact', label: 'יצירת קשר' },
  { href: '#services', label: 'השירותים שלי' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#process', label: 'התהליך' },
  { href: '#about', label: 'אודות' },
  { href: '#home', label: 'דף הבית' },
]

// קישור ניווט: נתיבי ראוטר עוברים דרך Link, עוגנים מדפים אחרים חוזרים להום־פייג'
export function NavAnchor({
  href,
  className,
  onClick,
  children,
}: {
  href: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  const { pathname } = useLocation()

  if (href.startsWith('/')) {
    return (
      <Link to={href} onClick={onClick} className={className}>
        {children}
      </Link>
    )
  }

  const target = pathname === '/' ? href : import.meta.env.BASE_URL + href
  return (
    <a href={target} onClick={onClick} className={className}>
      {children}
    </a>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center justify-between gap-4 bg-background px-8 py-4 lg:px-20 lg:py-5">
      <Button
        asChild
        variant="outline"
        className="h-auto rounded-xl border-2 border-pink bg-transparent px-4 py-3.5 text-[17px] font-medium text-foreground hover:bg-pink/10 hover:text-foreground sm:px-9 sm:py-4"
      >
        <a href="#">
          <img src={whatsappIcon} alt="" className="size-7" />
          <span className="hidden sm:inline">לקבוצות הווצאפ לחיפוש עבודה</span>
        </a>
      </Button>

      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <NavAnchor
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-base font-medium text-foreground transition-colors hover:text-gold focus-visible:text-gold"
          >
            {link.label}
          </NavAnchor>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <NavAnchor href="#home" className="shrink-0">
          <img src={logo} alt="דנה פרנקל — ייעוץ קריירה" className="h-14 w-auto lg:h-[60px]" />
        </NavAnchor>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="פתיחת תפריט">
              <Menu className="size-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background">
            <SheetTitle className="sr-only">תפריט ניווט</SheetTitle>
            <nav className="mt-10 flex flex-col items-start gap-6 px-6">
              {[...navLinks].reverse().map((link) => (
                <NavAnchor
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-gold"
                >
                  {link.label}
                </NavAnchor>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
