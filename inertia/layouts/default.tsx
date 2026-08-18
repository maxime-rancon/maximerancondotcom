import { type Data } from '@generated/data'
import Navbar from '~/components/navbar'
import Footer from '~/components/footer'
import { type ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  const appName = import.meta.env.VITE_APP_NAME || 'Maxime Rançon'

  return (
    <>
      <Navbar appName={appName} />
      <br />
      <main className="py-4 pt-5">{children}</main>
      <Footer />
    </>
  )
}
