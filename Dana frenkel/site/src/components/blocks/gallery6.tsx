import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'

interface GalleryItem {
  id: string
  title: string
  summary: string
  url: string
  image: string
  linkText?: string
}

interface Gallery6Props {
  id?: string
  heading?: string
  demoUrl?: string
  demoText?: string
  readMoreText?: string
  items?: GalleryItem[]
}

// קישור פנימי (נתיב ראוטר) עובר דרך Link, קישור חיצוני/עוגן נשאר <a>
function ItemLink({
  url,
  className,
  children,
}: {
  url: string
  className?: string
  children: React.ReactNode
}) {
  if (url.startsWith('/')) {
    return (
      <Link to={url} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={url} className={className}>
      {children}
    </a>
  )
}

const Gallery6 = ({
  id,
  heading = 'גלריה',
  demoUrl = '#',
  demoText = 'לכל הפרויקטים',
  readMoreText = 'לפרטים נוספים',
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }
    updateSelection()
    carouselApi.on('select', updateSelection)
    return () => {
      carouselApi.off('select', updateSelection)
    }
  }, [carouselApi])

  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="px-8 lg:px-20">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <ItemLink
              url={demoUrl}
              className="group flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold md:text-base lg:text-lg"
            >
              {demoText}
              <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            </ItemLink>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              aria-label="הקודם"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              aria-label="הבא"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            direction: 'rtl',
            loop: true,
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
          className="relative start-[-1rem]"
        >
          <CarouselContent className="-me-4 ms-8 2xl:me-[max(0rem,calc(50vw-700px-1rem))] 2xl:ms-[max(8rem,calc(50vw-700px+1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="ps-4 md:max-w-[452px]">
                <ItemLink url={item.url} className="group flex flex-col justify-between">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:text-xl lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center gap-2 text-sm transition-colors group-hover:text-gold">
                    {item.linkText ?? readMoreText}
                    <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                  </div>
                </ItemLink>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { Gallery6, type GalleryItem, type Gallery6Props }
