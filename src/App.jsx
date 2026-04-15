import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Partners from './pages/Partners'
import Demos from './pages/Demos'
import DemoDetail from './pages/DemoDetail'
import Events from './pages/Events'
import Materials from './pages/Materials'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/demos/:slug" element={<DemoDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
