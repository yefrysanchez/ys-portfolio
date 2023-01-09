import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectsPage from '../pages/ProjectsPage'
import SkillsPage from '../pages/SkillsPage'

const PageRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
  )
}

export default PageRouter