import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'

type NavbarProps = {
  appName: string
}

export default function Navbar({ appName }: NavbarProps) {
  const { url } = usePage()

  const currentPath = url.split('?')[0].split('#')[0]

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/'
    }

    return currentPath === href || currentPath.startsWith(`${href}/`)
  }

  const linkClass = (href: string) => `nav-link${isActive(href) ? ' active fw-bold' : ''}`

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom main-navbar">
      <div className="container">
        <Link className="navbar-brand fw-semibold" href="/">
          {appName}
        </Link>

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  )
}
