import { useState, useEffect } from 'react'
import API from './utils/api'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import LibraryPage from "./pages/LibraryPage";
import './styles.css'

<Routes>
  <Route path="/dashboard" element={<DashboardPage />} />
  <Route path="/dashboard/pinsandboards" element={<pinsandboards />} />
</Routes>
export default function App() {
  const [authed, setAuthed] = useState<boolean | null>(null) // null = loading

  useEffect(() => {
    API.authStatus()
      .then(({ authenticated }: { authenticated: boolean }) => setAuthed(authenticated))
      .catch(() => setAuthed(false))
  }, [])

  // Check URL for /dashboard path (after OAuth redirect)
  useEffect(() => {
    if (window.location.pathname === '/dashboard') {
      setAuthed(true)
    }
  }, [])

  const handleLogout = async () => {
    await API.logout()
    setAuthed(false)
    window.history.pushState({}, '', '/')
  }

  if (authed === null) {
    return (
      <div className="splash">
        <div className="spinner" />
      </div>
    )
  }

  return authed ? (
    <DashboardPage onLogout={handleLogout} />
  ) : (
    <LoginPage />
  )
}
