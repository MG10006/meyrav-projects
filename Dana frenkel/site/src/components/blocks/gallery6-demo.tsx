import { Gallery6 } from '@/components/blocks/gallery6'

const demoData = {
  heading: 'סיפורי הצלחה',
  demoUrl: '#',
  demoText: 'לכל הסיפורים',
  readMoreText: 'לקריאת הסיפור המלא',
  items: [
    {
      id: 'item-1',
      title: 'ממנהלת צוות לסמנכ"לית',
      summary:
        'אחרי 12 שנה באותה חברה, תוך ארבעה חודשים של ליווי — חתימה על תפקיד ניהולי בכיר.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    },
    {
      id: 'item-2',
      title: 'חזרה לשוק אחרי הפסקה',
      summary:
        'בניית נרטיב מקצועי מחדש, קורות חיים ממוקדים — ושלושה זימונים לראיונות בשבועיים.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    },
    {
      id: 'item-3',
      title: 'משא ומתן על שכר',
      summary:
        'הכנה ממוקדת לשיחת השכר שהניבה שיפור של עשרות אחוזים בחבילה הכוללת.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
    {
      id: 'item-4',
      title: 'מעבר בין תעשיות',
      summary:
        'מיפוי יכולות עבירות ומיצוב מחדש — מעבר מוצלח מתעשייה מסורתית להייטק.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    },
    {
      id: 'item-5',
      title: 'ראיון ראשון אחרי שנים',
      summary:
        'סימולציות ראיונות ועבודה על ביטחון — הצעת עבודה כבר מהתהליך הראשון.',
      url: '#',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    },
  ],
}

function Gallery6Demo() {
  return <Gallery6 {...demoData} />
}

export { Gallery6Demo }
