import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@/pages/home'
import Services from '@/pages/services'
import Portfolio from '@/pages/portfolio'
import Blog from '@/pages/blog'
import Contact from '@/pages/contact'
import About from '@/pages/about'
import SelectionProcess from '@/pages/selection-process'
import Admin from '@/pages/admin'
import NotFound from '@/pages/not-found'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/processo-seletivo" element={<SelectionProcess />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
