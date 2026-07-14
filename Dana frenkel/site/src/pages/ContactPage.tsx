import { useState, type FormEvent } from 'react'
import SiteHeader from '@/components/home/SiteHeader'
import SiteFooter from '@/components/home/SiteFooter'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle2 } from 'lucide-react'

// TODO: להחליף במספר הווצאפ האמיתי של דנה (בפורמט בינלאומי, בלי +)
const WHATSAPP_NUMBER = '972500000000'

const topics = [
  'שיחת היכרות (20 דקות, ללא עלות)',
  'ליווי בחיפוש עבודה',
  'הכנה לראיונות',
  'משא ומתן על שכר',
  'אחר',
]

type Errors = Partial<Record<'name' | 'phone' | 'email', string>>

export default function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [topic, setTopic] = useState(topics[0])
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(): Errors {
    const next: Errors = {}
    if (!name.trim()) next.name = 'נא למלא שם מלא'
    if (!phone.trim()) next.phone = 'נא למלא מספר טלפון'
    else if (!/^0?\d[\d\s-]{7,14}$/.test(phone.trim()))
      next.phone = 'מספר הטלפון לא תקין'
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = 'כתובת האימייל לא תקינה'
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      'היי דנה, הגעתי דרך האתר.',
      `שם: ${name.trim()}`,
      `טלפון: ${phone.trim()}`,
      email.trim() && `אימייל: ${email.trim()}`,
      role.trim() && `תפקיד נוכחי: ${role.trim()}`,
      `נושא הפנייה: ${topic}`,
      message.trim() && `קצת רקע: ${message.trim()}`,
    ].filter(Boolean)

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener',
    )
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-8 py-14 lg:px-20 lg:py-20">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h1 className="m-0 text-[clamp(30px,5vw,48px)] font-bold">
            יצירת <span className="text-pink">קשר</span>
          </h1>
          <p className="m-0 text-[clamp(17px,2.2vw,22px)] text-muted-foreground">
            השאירו פרטים וההודעה תישלח אליי ישירות בווצאפ. נחזור אליכם לתיאום
            שיחת היכרות של 20 דקות — בלי שום התחייבות.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-2xl border-white/15 bg-card">
          <CardContent className="p-6 sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle2 className="size-14 text-gold" />
                <h2 className="m-0 text-2xl font-bold">ההודעה מוכנה לשליחה</h2>
                <p className="m-0 text-lg text-muted-foreground">
                  נפתח חלון ווצאפ עם הפרטים שמילאתם — נשאר רק ללחוץ שליחה.
                  אם החלון לא נפתח, אפשר לנסות שוב.
                </p>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => setSent(false)}
                >
                  חזרה לטופס
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel htmlFor="contact-name">שם מלא *</FieldLabel>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="השם שלכם"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                    />
                    <FieldError>{errors.name}</FieldError>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field data-invalid={!!errors.phone}>
                      <FieldLabel htmlFor="contact-phone">טלפון *</FieldLabel>
                      <Input
                        id="contact-phone"
                        type="tel"
                        dir="ltr"
                        className="text-right"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="050-0000000"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                      />
                      <FieldError>{errors.phone}</FieldError>
                    </Field>

                    <Field data-invalid={!!errors.email}>
                      <FieldLabel htmlFor="contact-email">אימייל</FieldLabel>
                      <Input
                        id="contact-email"
                        type="email"
                        dir="ltr"
                        className="text-right"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                      />
                      <FieldError>{errors.email}</FieldError>
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="contact-role">תפקיד נוכחי</FieldLabel>
                    <Input
                      id="contact-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder='למשל: סמנכ"לית שיווק, מנהל פיתוח'
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="contact-topic">במה אפשר לעזור?</FieldLabel>
                    <Select value={topic} onValueChange={setTopic} dir="rtl">
                      <SelectTrigger id="contact-topic" className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="contact-message">
                      ספרו לי בקצרה על המצב
                    </FieldLabel>
                    <Textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="איפה אתם היום בקריירה, ומה הייתם רוצים שיקרה?"
                    />
                  </Field>

                  <Button
                    type="submit"
                    className="h-auto rounded-xl px-8 py-[18px] text-xl font-medium transition-transform hover:-translate-y-0.5 hover:bg-gold-hover"
                  >
                    שליחה בווצאפ
                  </Button>
                </FieldGroup>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}
