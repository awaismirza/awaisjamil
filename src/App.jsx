import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout.jsx'
import { ProductDocPage } from './components/product/ProductDocPage.jsx'
import { ProductSiteLayout } from './components/product/ProductSiteLayout.jsx'
import { ProductOverviewPage } from './components/product/ProductOverviewPage.jsx'
import { ProductSupportPage } from './components/product/ProductSupportPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { ExperiencePage } from './pages/ExperiencePage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { ProductsPage } from './pages/ProductsPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'
import { WritingPage } from './pages/WritingPage.jsx'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      navigate(redirect)
    }
  }, [navigate])

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Product mini-sites use their own standalone layout, not the portfolio shell */}
      <Route path="products/:slug" element={<ProductSiteLayout />}>
        <Route index element={<ProductOverviewPage />} />
        <Route path="privacy" element={<ProductDocPage kind="privacy" />} />
        <Route path="terms" element={<ProductDocPage kind="terms" />} />
        <Route path="support" element={<ProductSupportPage />} />
      </Route>
    </Routes>
  )
}
