import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
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
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="services" className="flex flex-col items-center gap-8 px-8 py-12 lg:px-20 lg:py-16">
      <h2 className="m-0 text-center text-[clamp(28px,4vw,40px)] font-extrabold">
        השירותים שלי
      </h2>

      <Carousel
        setApi={setApi}
        opts={{ direction: 'rtl', loop: true }}
        className="w-full max-w-[1200px]"
      >
        <CarouselContent className="-ms-10">
          {services.map((service) => (
            <CarouselItem
              key={service.title}
              className="ps-10 sm:basis-[80%] lg:basis-[541px]"
            >
              <Card className="h-full rounded-2xl border-gold bg-transparent shadow-none">
                <CardContent className="flex h-full flex-col items-center gap-8 p-8 text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[308px] w-full max-w-[403px] rounded-2xl object-cover"
                  />
                  <h3 className="m-0 text-2xl font-bold">{service.title}</h3>
                  <p className="m-0 text-xl leading-[1.4] text-start">{service.text}</p>
                  <Button
                    asChild
                    className="mt-auto h-auto rounded-xl px-10 py-4 text-[17px] font-medium transition-transform hover:-translate-y-0.5 hover:bg-gold-hover"
                  >
                    <Link to="/contact">{service.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden border-none bg-transparent text-foreground hover:bg-secondary hover:text-gold sm:inline-flex" />
        <CarouselNext className="hidden border-none bg-transparent text-foreground hover:bg-secondary hover:text-gold sm:inline-flex" />
      </Carousel>

      <div className="flex items-center gap-3" role="tablist" aria-label="ניווט בין שירותים">
        {services.map((service, i) => (
          <button
            key={service.title}
            type="button"
            role="tab"
            aria-selected={current === i}
            aria-label={service.title}
            onClick={() => api?.scrollTo(i)}
            className={`size-3 rounded-full transition-colors ${
              current === i ? 'bg-pink' : 'bg-muted-foreground/60 hover:bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
