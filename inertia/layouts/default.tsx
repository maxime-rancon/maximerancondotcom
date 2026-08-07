import { type Data } from '@generated/data'
import Navbar from '~/components/navbar'
import { type ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  const appName = import.meta.env.VITE_APP_NAME || 'Maxime Rançon'

  return (
    <>
      <Navbar appName={appName} />

      <main className="container py-4">{children}</main>
    </>
  )
}
