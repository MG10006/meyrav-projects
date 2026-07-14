import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-4 bg-card px-8 py-12 text-center lg:px-20 lg:py-16"
    >
      <h2 className="m-0 text-[clamp(26px,4vw,40px)] font-bold">נתחיל בשיחה.</h2>
      <p className="m-0 text-[clamp(17px,2.2vw,24px)]">
        20 דקות, נמפה יחד את המצב ותצאו עם תמונה ברורה. בלי שום התחייבות.
      </p>
      <Button
        asChild
        className="mt-4 h-auto rounded-xl px-8 py-[18px] text-xl font-medium transition-transform hover:-translate-y-0.5 hover:bg-gold-hover"
      >
        <Link to="/contact">לתיאום שיחת היכרות</Link>
      </Button>
    </section>
  )
}
