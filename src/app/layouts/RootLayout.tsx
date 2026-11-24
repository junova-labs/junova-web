import { Outlet } from 'react-router'
import { Footer } from '@widgets/footer'
import { Navbar } from '@widgets/navbar'

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-chalk text-carbon">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
