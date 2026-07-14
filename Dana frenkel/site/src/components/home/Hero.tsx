import { Button } from '@/components/ui/button'
import heroBg from '@/assets/home/hero-bg.png'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[500px] items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-[70%_center]"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to left, #2c2c2e 37%, #2b2b2c 46%, rgba(102,102,102,0) 79%)',
        }}
      />
      <div className="relative z-[2] flex max-w-[560px] flex-col items-end gap-9 px-8 py-12 text-start ms-auto lg:px-20 lg:py-[60px]">
        <h1 className="m-0 text-[clamp(32px,4.5vw,64px)] font-extrabold leading-[1.2]">
          הגיע הזמן שהשוק יבין באמת<span className="text-pink"> מי אתם</span>
        </h1>
        <p className="m-0 text-[clamp(22px,3vw,40px)] font-medium leading-[1.18]">
          בהירות. מיצוב. מיתוג. נטוורקינג.
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
