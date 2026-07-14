import { Card, CardContent } from '@/components/ui/card'
import iconStep1 from '@/assets/home/icon-step1.svg'
import iconStep from '@/assets/home/icon-step.svg'
import iconSuitcase from '@/assets/home/icon-suitcase.svg'
import iconClarity from '@/assets/home/icon-clarity.svg'

const cards = [
  {
    icon: iconStep1,
    title: 'חוסר התמצאות בשוק החדש',
    text: 'דרכי החיפוש שעבדו פעם כבר לא רלוונטיות, וקשה לדעת איך מחפשים עבודה היום',
  },
  {
    icon: iconStep,
    title: 'חוסר נטוורקינג',
    text: 'הזדמנויות רבות לא מגיעות מלוחות דרושים אלא דרך אנשים, קשרים ושיחות נכונות',
  },
  {
    icon: iconSuitcase,
    title: 'חוסר מיתוג',
    text: 'השוק לא מבין את הערך היחודי שלכם ולכן לא רואים אתכם כמועמדים מתאימים',
  },
  {
    icon: iconClarity,
    title: 'חוסר בהירות',
    text: 'לא תמיד ברור מה התפקיד הבא שנכון לכם במיוחד אחרי שנים ניסיון במגוון תפקידים',
  },
]

export default function WhySection() {
  return (
    <section aria-labelledby="why-title" className="px-8 py-12 lg:px-20 lg:py-16">
      <h2 id="why-title" className="mb-12 text-center text-[clamp(28px,4vw,40px)] font-bold">
        למה אנשים מוכשרים לא מצליחים להתקדם?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="w-[302px] rounded-[20px] border-foreground bg-transparent shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-3 px-7 py-2 text-start">
              <img src={card.icon} alt="" className="size-[60px]" />
              <h3 className="m-0 text-[22px] font-bold leading-[1.4] text-foreground">
                {card.title}
              </h3>
              <p className="m-0 text-base leading-[1.4] text-cream">{card.text}</p>
              <a href="#" className="text-base font-medium text-gold">
                קראו עוד ←
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
