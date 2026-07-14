import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Reveal from '@/components/case-study/Reveal'
import ProgressDots from '@/components/case-study/ProgressDots'
import figmaIcon from '@/assets/case-study/figma-icon.svg'
import claudeIcon from '@/assets/case-study/claude-icon.svg'
import heroOld from '@/assets/case-study/hero-old.png'
import heroNew from '@/assets/case-study/hero-new.png'

const audienceRows = [
  ['מנהלים, בכירים, C-level, דירקטורים', 'כל מי שמחפש עבודה — כולל שינוי קריירה', 'פרופיל'],
  ['לא מצליחים לפרוץ למרות הניסיון', 'שולחים קו"ח ולא מקבלים תגובות', 'כאב מרכזי'],
  ['אסטרטגיה, מיצוב ובהירות עסקית', 'כלים פרקטיים ותמיכה קהילתית', 'ציפייה מהמוצר'],
  ['מקצועי, אוטוריטטיבי, ממוקד תוצאה', 'חם, מעודד, קהילתי', 'טון מתאים'],
  ['שיחת היכרות אישית High-touch', 'סדנה חינמית / הרשמה למייל', 'CTA מועדף'],
]

const comparisonRows = [
  ['הגיע הזמן שהשוק יבין באמת מי אתם', 'שינוי תעסוקתי. אישי. מדויק.', 'כותרת Hero'],
  ['לתיאום שיחת היכרות', 'הרשמה לסדנה חינמית', 'CTA ראשי'],
  ['כהה, זהב, ורוד סגנון יוקרתי', 'בהיר, סגול, חם', 'פלטת צבעים'],
  ['ממוקד — 6 ערכים ממוקדים', 'רחב — 8 ערכים כולל בלוג', 'ניווט'],
  ['חוסר בהירות, מיתוג, נטוורקינג', 'שולחים קו"ח ולא מקבלים תגובות', 'כאב מרכזי'],
  ['סטטיסטיקות + המלצה של בכירה', 'המלצות אישיות ורגשיות', 'הוכחה חברתית'],
  ['שלושה שלבים ברורים ומובנים', 'אין רשימת שירותים', 'תהליך'],
  ['3 שירותים פרימיום ממוקדים', '6 שירותים רחבים', 'שירותים'],
  ['מנהלים, בכירים, C-level', 'כלל מחפשי העבודה', 'קהל יעד'],
  ['ממוקד, ברור, מוביל לפעולה', 'ארוך, תוכן עשיר', 'אורך הדף'],
]

const reasons = [
  {
    tag: 'CTA שיחת היכרות במקום סדנה חינמית',
    text: 'לבכיר, "חינמי" מרגיש זול ולא מותאם. שיחת היכרות אישית מעבירה שירות High-touch, אינדיבידואלי ואיכותי בדיוק מה שמצדיק השקעה.',
  },
  {
    tag: 'צבעוניות כהה וזהב',
    text: 'הבכיר רגיל לאסתטיקה של מותגי פרימיום. צבעים כהים עם אקצנט זהב מעבירים יוקרה, רצינות ואוטוריטה בדיוק מה שהלקוח הבכיר מצפה לראות מיועצת קריירה שהוא ישלם עליה כסף רציני.',
  },
  {
    tag: 'תהליך שלב אחר שלב',
    text: 'הבכיר רגיל לחשיבה תהליכית ואסטרטגית. מבנה ברור של שלושה שלבים — אבחון → אסטרטגיה → יציאה לשוק — מוריד חרדה ומגביר אמון.',
  },
  {
    tag: 'נתונים כמותיים במקום המלצות אישיות',
    text: '152+ בכירים, 15 שנים, 98% הצלחה — הבכיר מושפע מנתונים ומהוכחות מספריות. זה מדבר אליו יותר מסיפור אישי רגשי.',
  },
  {
    tag: 'ניווט ממוקד',
    text: 'הסרת הבלוג, קבוצות הוואטסאפ ואלמנטים קהילתיים מהניווט הראשי מחזקת את הפוקוס על הסמכות המקצועית ומונעת התפזרות.',
  },
]

function CsSection({
  n,
  children,
  last = false,
}: {
  n: number
  children: ReactNode
  last?: boolean
}) {
  return (
    <Reveal
      id={`sec-${n}`}
      className={`px-6 py-14 lg:px-[100px] lg:py-24 ${last ? '' : 'border-b border-border'}`}
    >
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
        <div className="flex min-w-0 flex-1 flex-col gap-7">{children}</div>
        <p className="order-first m-0 shrink-0 text-[44px] font-bold text-[#b4b4b8] lg:order-none lg:w-[140px] lg:text-end lg:text-[64px]">
          {String(n).padStart(2, '0')}
        </p>
      </div>
    </Reveal>
  )
}

function CompareTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border">
      <Table className="min-w-[820px]">
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead
                key={header}
                className="bg-muted px-5 py-4 text-start text-[17px] font-semibold text-foreground"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[2]} className="odd:bg-white even:bg-[#fafafa]">
              {row.map((cell, i) => (
                <TableCell
                  key={cell}
                  className={`whitespace-normal border-s border-border px-5 py-4 text-start text-[17px] first:border-s-0 ${
                    i === 2 ? 'font-medium text-[#55555a]' : ''
                  }`}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-card-foreground">
      <ProgressDots />

      <div className="mx-auto max-w-[1200px] pb-14">
        {/* Cover */}
        <Reveal className="flex flex-col items-center border-b border-border px-6 py-20 text-center lg:px-[100px] lg:pb-24 lg:pt-36">
          <h1 className="m-0 text-[clamp(34px,6vw,64px)] font-bold leading-[1.2] text-foreground">
            עיצוב מחדש לדף הבית<span className="block text-pink">Dana Frenkel</span>
          </h1>
          <p className="mb-0 mt-10 text-[clamp(18px,2.4vw,26px)] text-[#55555a]">
            מיצוב מחדש לקהל בכירים ומנהלים
          </p>
          <div className="mt-14 flex w-full max-w-[700px] items-center justify-center gap-7 border-t border-border pt-9">
            <div className="flex items-center gap-2">
              <img src={figmaIcon} alt="" className="size-6" />
              <span className="text-[15px] font-medium text-[#6b6b70]">Figma</span>
            </div>
            <div className="h-4 w-px bg-[#d4d4d8]" />
            <div className="flex items-center gap-2">
              <img src={claudeIcon} alt="" className="size-6" />
              <span className="text-[15px] font-medium text-[#6b6b70]">Claude</span>
            </div>
          </div>
        </Reveal>

        {/* 01 רקע */}
        <CsSection n={1}>
          <h2 className="m-0 text-[38px] font-bold text-foreground">רקע</h2>
          <p className="m-0 text-xl leading-[1.8]">
            דנה פרנקל היא יועצת קריירה ומאמנת תעסוקתית בעלת 15 שנות ניסיון. האתר הקיים שלה
            פונה לקהל רחב של מחפשי עבודה. הפרויקט הנוכחי מטרתו לבחון עיצוב חלופי לדף הבית
            שפונה לפרופיל לקוח שונה: מנהלים, בכירים ואנשי מקצוע ותיקים.
          </p>
        </CsSection>

        {/* 02 האתגר */}
        <CsSection n={2}>
          <h2 className="m-0 text-[38px] font-bold text-foreground">האתגר</h2>
          <p className="m-0 text-xl leading-[1.8]">
            האתר הקיים בנוי היטב לקהל של מחפשי עבודה כלליים, אך אינו מדבר בשפה של בכירים
            ומנהלים. האתגר היה לשמור על זהות המותג של דנה תוך התאמת הנרטיב, העיצוב והמבנה
            לקהל יעד שמצפה לרמה אחרת של מקצועיות ואסטרטגיה.
          </p>
        </CsSection>

        {/* 03 השוואת קהלי יעד */}
        <CsSection n={3}>
          <h2 className="m-0 text-[38px] font-bold text-foreground">השוואת קהלי יעד</h2>
          <CompareTable
            headers={['קהל חדש — בכירים ומנהלים', 'קהל קיים — מחפשי עבודה', 'היבט']}
            rows={audienceRows}
          />
        </CsSection>

        {/* 04 ניתוח העיצוב הקיים */}
        <CsSection n={4}>
          <div>
            <h2 className="m-0 text-[38px] font-bold text-foreground">ניתוח העיצוב הקיים</h2>
            <p className="mb-0 mt-2 text-lg text-muted-foreground">
              danafrenkel.co.il — דף הבית הנוכחי
            </p>
          </div>
          <img
            src={heroOld}
            alt="Hero — עיצוב קיים"
            className="h-[382px] w-full rounded-[14px] object-cover"
          />
          <Card className="rounded-[10px] border-border bg-card shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">4.1 כותרת ראשי Hero</h3>
              <p className="m-0 text-[19px] leading-[1.8]">
                הכותרת הראשית היא "שינוי תעסוקתי. אישי. מדויק." — פניה רגשית ורחבה המתאימה לכל
                אחד. מיד מתחת מופיע טופס הרשמה לסדנה חינמית, שהוא מוביל מגנטי קלאסי לקהל
                המוני.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-[10px] border-border bg-card shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">4.2 שפה ועיצוב</h3>
              <ul className="m-0 flex list-none flex-col gap-1 p-0 text-[19px] leading-[1.9]">
                <li>שפה כוללנית ורגשית: "מחפש.ת", "אנחנו", "לא יודעים לשים על זה את האצבע"</li>
                <li>פלטת צבעים: גוונים חמים, סגול לבנדר, סגנון נשי ופתוח</li>
                <li>ניווט רחב: דף הבית, אודות, 6 שירותים, קבוצות וואטסאפ, בלוג, יצירת קשר</li>
                <li>הוכחה חברתית: המלצות טקסטואליות אישיות ורגשיות</li>
                <li>לידים: טפסי הרשמה לסדנה חינמית, קבוצות וואטסאפ</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-[10px] border-border bg-card shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">4.3 חזקות</h3>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[17px] leading-[1.85]">
                <li>בניית אמון אישי חזקה</li>
                <li>קהילתיות — 50+ קבוצות וואטסאפ</li>
                <li>תוכן עשיר: בלוג, אינסטגרם, כתבות</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-[10px] border-border bg-card shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">
                4.4 חולשות ביחס לקהל הבכירים
              </h3>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[17px] leading-[1.85]">
                <li>הטון לא מדבר אל מנהל שמרוויח 20K+ ש"ח ורוצה שינוי אסטרטגי</li>
                <li>ה CTA סדנה חינמית מרגיש זול לבכיר</li>
                <li>פלטת הצבעים לא מעבירה רצינות ויוקרה</li>
                <li>המבנה עמוס, אין תהליך ברור</li>
              </ul>
            </CardContent>
          </Card>
        </CsSection>

        {/* 05 ניתוח העיצוב החדש */}
        <CsSection n={5}>
          <div>
            <h2 className="m-0 text-[38px] font-bold text-foreground">ניתוח העיצוב החדש</h2>
            <p className="mb-0 mt-2 text-lg text-muted-foreground">Figma website</p>
          </div>
          <img
            src={heroNew}
            alt="Hero — עיצוב חדש"
            className="h-[339px] w-full rounded-[14px] object-cover"
          />
          <Card className="rounded-[10px] border-none bg-white/50 shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">5.1 כותרת ראשי Hero</h3>
              <p className="m-0 text-[19px] leading-[1.8]">
                הכותרת החדשה היא "הגיע הזמן שהשוק יבין באמת מי אתם" — פניה אמפאורמנט לבכיר
                שמרגיש שהשוק לא רואה את ערכו. ה-CTA הראשי: "לתיאום שיחת היכרות" — אינטראקציה
                אישית ואיכותית.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-[10px] border-none bg-white/50 shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">5.2 שפה ועיצוב</h3>
              <ul className="m-0 flex list-none flex-col gap-1 p-0 text-[19px] leading-[1.9]">
                <li>שפה אוטוריטטיבית ועסקית: "בהירות. מיצוב. מיתוג. נטוורקינג."</li>
                <li>ניווט ממוקד: דף הבית, אודות, התהליך, המלצות, השירותים שלי, יצירת קשר</li>
                <li>תהליך מובנה בשלושה שלבים ברורים: אבחון וכיוון ← אסטרטגיה ← יציאה לשוק</li>
                <li>הוכחה חברתית מספרית: 152+ לקוחות בכירים, 15 שנות ניסיון, 98% הגיעו לתפקיד</li>
                <li>כרטיסי קהל יעד ספציפיים: תקועים במקום, בכירים ודירקטורים, מנהלים, שינוי קריירה</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-[10px] border-none bg-white/50 shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">5.3 חוזקות</h3>
              <div className="flex flex-col gap-5 text-[17px] leading-[1.85] lg:flex-row lg:gap-10">
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <p className="m-0">עיצוב כהה יוקרתי מרגיש Premium</p>
                  <p className="m-0">
                    CTA איכותי שיחת היכרות מתאים לחוויה של הלקוח הבכיר
                  </p>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <p className="m-0">מיצוב ברור ומובחן — מדבר ישירות לבכיר</p>
                  <p className="m-0">תהליך שלב אחר שלב מוריד חרדה ומגביר אמון</p>
                  <p className="m-0">נתונים כמותיים מחזקים אמינות</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[10px] border-none bg-white/50 shadow-none">
            <CardContent className="flex flex-col gap-4 px-8 py-2">
              <h3 className="m-0 text-2xl font-semibold text-foreground">צבעים עיקריים</h3>
              <div className="flex flex-wrap items-center gap-5">
                {[
                  { hex: '#e0127e', label: 'ורוד עז — #e0127e' },
                  { hex: '#cb9b42', label: 'זהב — #cb9b42' },
                  { hex: '#2c2c2e', label: 'כהה — #2c2c2e' },
                ].map((swatch) => (
                  <div key={swatch.hex} className="flex items-center gap-3">
                    <span
                      className="size-11 shrink-0 rounded-lg border border-border"
                      style={{ background: swatch.hex }}
                    />
                    <span className="text-base">{swatch.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CsSection>

        {/* 06 השוואה מקיפה */}
        <CsSection n={6}>
          <h2 className="m-0 text-[38px] font-bold text-foreground">
            השוואה מקיפה — עיצוב קיים מול עיצוב חדש
          </h2>
          <CompareTable
            headers={['עיצוב חדש', 'עיצוב קיים', 'אלמנט']}
            rows={comparisonRows}
          />
        </CsSection>

        {/* 07 הנמקת החלטות עיצוב */}
        <CsSection n={7}>
          <h2 className="m-0 text-[38px] font-bold text-foreground">
            הנמקת החלטות עיצוב מרכזיות
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {reasons.map((reason) => (
              <div key={reason.tag} className="flex min-w-0 flex-col gap-2.5">
                <p className="m-0 text-base font-bold text-muted-foreground">{reason.tag}</p>
                <p className="m-0 text-lg leading-[1.8]">{reason.text}</p>
              </div>
            ))}
          </div>
        </CsSection>

        {/* 08 סיכום */}
        <CsSection n={8} last>
          <h2 className="m-0 text-[38px] font-bold text-foreground">סיכום ומסקנות</h2>
          <div className="flex flex-col gap-1 text-xl leading-[1.8]">
            <p className="m-0">
              שני העיצובים נבנו לאותה זהות מקצועית — דנה פרנקל כמאמנת קריירה ויעוץ תעסוקתי,
              ההבדל הוא במי מדברים.
            </p>
            <p className="m-0">
              העיצוב הקיים ממשיך לשרת היטב את קהל מחפשי העבודה הרחב — כזה שזקוק לחום, לקהילה
              ולכלים מעשיים על מנת להשיג את המטרה.
            </p>
            <p className="m-0">
              העיצוב החדש, המבוסס על צבעי שחור, זהב ופוקסיה, משדר תחושה של מותג פרמיום נקי,
              בשל ומסודר. הוא פונה לבכיר שצריך אסטרטגיה, מיצוב ומישהו שמדבר בגובה העיניים
              שלו.
            </p>
            <p className="m-0">
              ההחלטה העסקית שדנה מעדיפה היא לגדול בערך ולפנות ללקוחות בכירים.
            </p>
          </div>
        </CsSection>

        <div className="flex justify-center px-6 pb-14 pt-5 lg:px-[100px]">
          <Button
            asChild
            className="h-auto rounded-[30px] bg-[#1c1c1e] px-10 py-[18px] text-lg font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-pink"
          >
            <Link to="/">מעבר לאתר</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
