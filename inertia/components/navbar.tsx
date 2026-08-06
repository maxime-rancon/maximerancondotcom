import { Link } from '@adonisjs/inertia/react'

type NavbarProps = {
  appName: string
}

export default function Navbar({ appName }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-semibold" href="/">
          {appName}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/ai">
                AI
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/dev">
                Dev
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/multimedia">
                Multimedia
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
