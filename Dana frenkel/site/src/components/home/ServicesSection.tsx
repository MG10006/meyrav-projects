import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import service1 from '@/assets/home/service-1.png'
import service2 from '@/assets/home/service-2.png'
import service3 from '@/assets/home/service-3.png'

const services = [
  {
    image: service1,
    title: 'כתיבה קורות חיים באנגלית ובעברית',
    text: 'כתיבה ושדרוג קורות חיים באנגלית ובעברית כולל תרגום מקצועי שמבליטים את הערך שלך, עוברים את שלב הסינון התאמה לתחום ומביאים זימונים לראיונות עבודה',
    cta: 'להזמנת כתיבת קו״ח',
  },
  {
    image: service2,
    title: 'ליווי בכירים ואנשי מקצוע',
    text: 'תהליך קצר וממוקד שיחזיר אתכם לעצמכם ולכיוון הנכון. תהליך עומק שמשלב אסטרטגיה פרקטית ועבודה מנטלית כדי לעזור לך להתקדם לתפקיד הבא שלך בצורה מדויקת',
    cta: 'לתיאום שיחת ליווי',
  },
  {
    image: service3,
    title: 'הכנה לראיונות עבודה מקצועית',
    text: 'ראיונות עבודה יכולים לעורר רגשות של חרדה ולחץ בקרב רבים. אל תפספסו את ההזדמנות להציג את עצמכם כמועמדים האולטימטיביים – השקיעו ויהיה לכם יתרון',
    cta: 'להרשמה להכנה לראיון',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="px-8 py-12 lg:px-20 lg:py-16">
      <h2 className="mb-12 mt-6 text-center text-[clamp(28px,4vw,40px)] font-extrabold">
        השירותים שלי
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service) => (
          <Card
            key={service.title}
            className="w-[541px] max-w-full rounded-2xl border-gold bg-transparent shadow-none"
          >
            <CardContent className="flex flex-col items-center gap-8 p-3 text-center">
              <img
                src={service.image}
                alt={service.title}
                className="h-[308px] w-full max-w-[403px] rounded-2xl object-cover"
              />
              <h3 className="m-0 text-2xl font-bold">{service.title}</h3>
              <p className="m-0 mt-2 text-xl leading-[1.4] text-start">{service.text}</p>
              <Button
                asChild
                className="h-auto rounded-xl px-10 py-4 text-[17px] font-medium transition-transform hover:-translate-y-0.5 hover:bg-gold-hover"
              >
                <a href="#contact">{service.cta}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
