import { Gallery6 } from '@/components/blocks/gallery6'
import service1 from '@/assets/home/service-1.png'
import service2 from '@/assets/home/service-2.png'
import service3 from '@/assets/home/service-3.png'

const items = [
  {
    id: 'service-cv',
    title: 'כתיבה קורות חיים באנגלית ובעברית',
    summary:
      'כתיבה ושדרוג קורות חיים באנגלית ובעברית כולל תרגום מקצועי שמבליטים את הערך שלך, עוברים את שלב הסינון התאמה לתחום ומביאים זימונים לראיונות עבודה',
    url: '/contact',
    image: service1,
    linkText: 'להזמנת כתיבת קו״ח',
  },
  {
    id: 'service-coaching',
    title: 'ליווי בכירים ואנשי מקצוע',
    summary:
      'תהליך קצר וממוקד שיחזיר אתכם לעצמכם ולכיוון הנכון. תהליך עומק שמשלב אסטרטגיה פרקטית ועבודה מנטלית כדי לעזור לך להתקדם לתפקיד הבא שלך בצורה מדויקת',
    url: '/contact',
    image: service2,
    linkText: 'לתיאום שיחת ליווי',
  },
  {
    id: 'service-interview',
    title: 'הכנה לראיונות עבודה מקצועית',
    summary:
      'ראיונות עבודה יכולים לעורר רגשות של חרדה ולחץ בקרב רבים. אל תפספסו את ההזדמנות להציג את עצמכם כמועמדים האולטימטיביים – השקיעו ויהיה לכם יתרון',
    url: '/contact',
    image: service3,
    linkText: 'להרשמה להכנה לראיון',
  },
]

export default function ServicesSection() {
  return (
    <Gallery6
      id="services"
      heading="השירותים שלי"
      demoUrl="/contact"
      demoText="לתיאום שיחת היכרות"
      items={items}
    />
  )
}
