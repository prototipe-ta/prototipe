import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/layout'
import Home from '@/pages/home'
import Services from '@/pages/services'
import Portfolio from '@/pages/portfolio'
import Blog from '@/pages/blog'
import Contact from '@/pages/contact'
import About from '@/pages/about'
import SelectionProcess from '@/pages/selection-process'
import Admin from '@/pages/admin'
import AdminDashboard from '@/pages/admin/dashboard'
import AdminPortfolio from '@/pages/admin/portfolio'
import AdminBlog from '@/pages/admin/blog'
import NotFound from '@/pages/not-found'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas — envolvidas pelo Layout (header + nav) */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contato" element={<Contact />} />
          <Route path="quem-somos" element={<About />} />
          <Route path="processo-seletivo" element={<SelectionProcess />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Rotas do CMS — /admin/* */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="portfolio" element={<AdminPortfolio />} />
          <Route path="blog" element={<AdminBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
