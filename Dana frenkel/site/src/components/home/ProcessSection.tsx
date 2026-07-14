import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    num: 1,
    title: 'אבחון וכיוון',
    text: 'פגישת עומק למיפוי המצב, החוזקות, הערכים והמטרות שלך.',
  },
  {
    num: 2,
    title: 'אסטרטגיה',
    text: 'הגדרת כיוון ומיצוב אישי, ובניית הנכסים: קורות חיים, לינקדאין ונרטיב מקצועי.',
  },
  {
    num: 3,
    title: 'יציאה לשוק',
    text: 'חיפוש ממוקד, הכנה לראיונות ומשא ומתן על תנאים — עד החתימה על החוזה.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="px-8 py-12 lg:px-20 lg:py-16">
      <h2 className="mb-2 text-center text-[clamp(28px,4vw,40px)] font-extrabold">
        מה תקבלו בתהליך?
      </h2>
      <p className="mb-8 mt-2 text-center text-[clamp(18px,2.4vw,24px)]">
        תהליך בשלושה שלבים — ברור, מובנה וממוקד תוצאה.
      </p>
      <div className="flex flex-wrap gap-6">
        {steps.map((step) => (
          <Card
            key={step.num}
            className="flex-[1_1_300px] rounded-[20px] border-none bg-secondary shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-3.5 px-7 py-2 text-start">
              <div className="flex size-[60px] items-center justify-center rounded-full border-2 border-gold text-[32px] font-bold">
                {step.num}
              </div>
              <h3 className="m-0 text-[22px] font-bold">{step.title}</h3>
              <p className="m-0 text-lg leading-[1.4] text-cream">{step.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
