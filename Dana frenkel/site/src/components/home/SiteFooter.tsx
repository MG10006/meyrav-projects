import { Separator } from '@/components/ui/separator'
import logo from '@/assets/home/logo.png'
import { navLinks } from './SiteHeader'

export default function SiteFooter() {
  return (
    <footer className="bg-[#141414] pt-16">
      <div className="flex flex-wrap items-center justify-center gap-12 px-8 pb-10 lg:px-20">
        <a href="#home">
          <img src={logo} alt="דנה פרנקל" className="h-[100px] w-auto" />
        </a>
        <nav className="flex flex-wrap justify-center gap-6">
          {[...navLinks].reverse().map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <Separator className="bg-[#ebddb6]/20" />
      <div className="p-4 text-center text-base text-[#8f897f]">
        © דנה פרנקל · מדיניות פרטיות · נגישות
      </div>
    </footer>
  )
}
