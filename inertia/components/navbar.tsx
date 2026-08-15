import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'

type NavbarProps = {
  appName: string
}

export default function Navbar({ appName }: NavbarProps) {
  const { url } = usePage()

  const isActive = (href: string) => {
    if (href === '/') {
      return url === '/'
    }

    return url === href || url.startsWith(`${href}/`)
  }

  const activeClass = ' active fw-bold'

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom main-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-semibold" href="/">
          {appName}
        </Link>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link
                className={`nav-link${isActive('/video') ? activeClass : ''}`}
                href="/video"
                aria-current={isActive('/video') ? 'page' : undefined}
              >
                Video
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive('/automation') ? activeClass : ''}`}
                href="/automation"
                aria-current={isActive('/automation') ? 'page' : undefined}
              >
                Automation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive('/dev') ? activeClass : ''}`}
                href="/dev"
                aria-current={isActive('/dev') ? 'page' : undefined}
              >
                Dev
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive('/ai') ? activeClass : ''}`}
                href="/ai"
                aria-current={isActive('/ai') ? 'page' : undefined}
              >
                AI
              </Link>
            </li>
          </ul>
        </div>

        <a href="https://www.linkedin.com/in/mxrancon" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              transform="translate(0, -1)"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            <span> </span>Contact
          </button>
        </a>
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
