import SiteHeader from '@/components/home/SiteHeader'
import Hero from '@/components/home/Hero'
import WhySection from '@/components/home/WhySection'
import ProcessSection from '@/components/home/ProcessSection'
import AboutSection from '@/components/home/AboutSection'
import ContactCta from '@/components/home/ContactCta'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WhoSection from '@/components/home/WhoSection'
import ServicesSection from '@/components/home/ServicesSection'
import SiteFooter from '@/components/home/SiteFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <WhySection />
        <ProcessSection />
        <AboutSection />
        <ContactCta />
        <TestimonialsSection />
        <WhoSection />
        <ServicesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
