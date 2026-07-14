import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import CaseStudyPage from '@/pages/CaseStudyPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  const { pathname } = useLocation()

  // הקייס־סטאדי בערכה בהירה, כל שאר הדפים בערכה כהה
  useEffect(() => {
    document.documentElement.classList.toggle('dark', pathname !== '/case-study')
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study" element={<CaseStudyPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
