import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout.jsx'
import { ExperiencePage } from './pages/ExperiencePage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { WorkPage } from './pages/WorkPage.jsx'
import { WritingPage } from './pages/WritingPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
