import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'ישראלית ישראלי · סמנכ"לית · ישראל',
    quote:
      '"הגעתי תקועה אחרי 12 שנה באותה חברה. תוך ארבעה חודשים חתמתי על תפקיד ניהולי בכיר — ובעיקר, הבנתי מה אני באמת רוצה."',
  },
]

const stats = [
  { num: '152+', label: 'בכירים ואנשי מקצוע שליוותי', pink: false },
  { num: '15', label: 'שנות ניסיון בתחום', pink: true },
  { num: '98%', label: 'הגיעו לתפקיד הבא שלהם', pink: false },
]

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center gap-16 px-8 py-12 lg:px-20 lg:py-16"
    >
      <h2 className="m-0 text-center text-[clamp(28px,4vw,40px)] font-bold">
        הם כבר עברו את זה
      </h2>

      <Carousel opts={{ direction: 'rtl', loop: true }} className="w-full max-w-[816px]">
        <CarouselContent>
          {testimonials.map((item) => (
            <CarouselItem key={item.name}>
              <Card className="rounded-[20px] border-none bg-card shadow-none">
                <CardContent className="flex flex-col gap-4 px-14 py-4 text-start">
                  <p className="m-0 text-[15px] font-bold">{item.name}</p>
                  <p className="m-0 text-lg leading-[1.4]">{item.quote}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none bg-transparent text-foreground hover:bg-secondary hover:text-gold" />
        <CarouselNext className="border-none bg-transparent text-foreground hover:bg-secondary hover:text-gold" />
      </Carousel>

      <div className="flex w-full flex-wrap justify-center gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex max-w-[280px] flex-[1_1_200px] flex-col gap-1.5 border-t-[1.5px] px-6 py-2 text-center ${
              stat.pink ? 'border-pink' : 'border-gold'
            }`}
          >
            <p
              className={`m-0 text-[clamp(36px,6vw,56px)] font-bold ${
                stat.pink ? 'text-pink' : 'text-gold'
              }`}
            >
              {stat.num}
            </p>
            <p className="m-0 text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
