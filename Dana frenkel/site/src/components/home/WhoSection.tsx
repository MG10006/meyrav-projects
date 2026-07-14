import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import iconProfessional from '@/assets/home/icon-professional.svg'
import iconSenior from '@/assets/home/icon-senior.svg'
import iconManagement from '@/assets/home/icon-management.svg'
import iconBackToWork from '@/assets/home/icon-back-to-work.svg'
import iconBack from '@/assets/home/icon-back.svg'

const cards = [
  {
    icon: iconProfessional,
    title: 'תקועים במקום',
    text: 'מי שמרגיש שמיצה את התפקיד הנוכחי ומוכן לאתגר הבא',
  },
  {
    icon: iconSenior,
    title: 'בכירים ודירקטורים',
    text: 'C-level והמחפשים מרחב חשיבה מחוץ לארגון',
  },
  {
    icon: iconManagement,
    title: 'מנהלים ומנהלות',
    text: 'מנהלים שרוצים להוביל מתוך בהירות ולהשפיע יותר.',
  },
  {
    icon: iconBackToWork,
    title: 'שינוי קריירה',
    text: 'מי שעומד בצומת ורוצה לעבור לתפקיד או תחום חדש.',
  },
  {
    icon: iconProfessional,
    title: 'בעלי מקצוע',
    text: 'עצמאים ומומחים שרוצים לצמוח ולבנות עסק ברור.',
  },
  {
    icon: iconBack,
    title: 'חזרה לשוק',
    text: 'אחרי הפסקה עם הילדים, מחלה, חו"ל חוזרים עם ביטחון.',
  },
]

export default function WhoSection() {
  return (
    <section
      className="px-8 py-12 lg:px-20 lg:py-16"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,.2), rgba(102,102,102,.2))',
      }}
    >
      <h2 className="mb-2 text-center text-[clamp(28px,4vw,40px)] font-extrabold">
        למי הליווי מתאים?
      </h2>
      <p className="mb-12 mt-2 text-center text-[clamp(18px,2.4vw,24px)]">
        אם אחד מהתיאורים הבאים מדבר אליך, בואו נדבר
      </p>

      <div className="mx-auto mb-16 flex max-w-[1280px] flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="min-h-[170px] max-w-[411px] flex-[1_1_380px] rounded-[10px] border-[0.5px] border-gold bg-card shadow-none transition-colors hover:bg-[#2f2f2f]"
          >
            <CardContent className="flex flex-col items-start gap-2 px-4 py-0 text-start">
              <img src={card.icon} alt="" className="size-[60px]" />
              <h3 className="m-0 text-[22px] font-medium">{card.title}</h3>
              <p className="m-0 text-base leading-[1.6] text-cream">{card.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto flex max-w-[666px] flex-col items-center gap-8 text-center">
        <h2 className="m-0 text-[clamp(26px,4vw,40px)] font-extrabold">הצעד הבא מתחיל כאן</h2>
        <p className="m-0 text-[clamp(17px,2.2vw,24px)] font-medium">
          שיחת היכרות קצרה ללא התחייבות, בשיחת היכרות נבין איפה אתם נמצאים היום, מה היעד הבא
          שלכם, והאם הליווי מתאים בדיוק לצרכים שלכם.
        </p>
        <Button
          asChild
          className="h-auto rounded-xl px-8 py-[18px] text-xl font-medium transition-transform hover:-translate-y-0.5 hover:bg-gold-hover"
        >
          <a href="#contact">לתיאום שיחת היכרות</a>
        </Button>
      </div>
    </section>
  )
}
