import aboutPhoto from '@/assets/home/about-photo.png'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-8 px-8 py-12 text-center lg:flex-row lg:gap-20 lg:px-20 lg:py-16 lg:text-start"
    >
      <div className="w-[380px] max-w-full shrink-0 overflow-hidden rounded-[32px]">
        <img src={aboutPhoto} alt="דנה פרנקל" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="mb-4 mt-0 text-[clamp(26px,3.5vw,36px)] font-bold">
          נעים להכיר, דנה פרנקל
        </h2>
        <p className="m-0 text-[clamp(17px,2.2vw,24px)] leading-[1.4]">
          במשך 15 שנים אני מלווה מנהלים ובכירים בצמתי הקריירה המשמעותיים ביותר שלהם. לאורך
          הדרך גיליתי שהאתגר האמיתי הוא לא כתיבת קורות חיים או שיפור פרופיל הלינקדאין, אלא
          יצירת בהירות, מיצוב ואסטרטגיה שמאפשרים להגיע להזדמנויות הנכונות. מתוך התובנה הזו
          פיתחתי תהליך שמחבר בין הניסיון, הערך והמטרות של כל לקוח – לתפקיד הבא שלו.
        </p>
      </div>
    </section>
  )
}
