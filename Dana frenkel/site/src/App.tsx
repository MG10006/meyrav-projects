import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import CaseStudyPage from '@/pages/CaseStudyPage'

function App() {
  const { pathname } = useLocation()

  // ההום־פייג' בערכה כהה, הקייס־סטאדי בערכה בהירה
  useEffect(() => {
    document.documentElement.classList.toggle('dark', pathname === '/')
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study" element={<CaseStudyPage />} />
    </Routes>
  )
}

export default App
