import { Routes, Route } from 'react-router-dom'

import { Favorites } from './pages/Favorites/Favorites'
import { Main } from './pages/Main/Main'
import { NotFound } from './pages/NotFound/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
