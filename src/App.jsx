import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { ExperiencePage } from './pages/ExperiencePage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { ProjectsPage } from './pages/ProjectsPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { WritingPage } from './pages/WritingPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
