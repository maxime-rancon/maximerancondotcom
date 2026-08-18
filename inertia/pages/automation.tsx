import HomeLink from '~/components/home_link'

export default function Automation() {
  return (
    <>
      <HomeLink />
      <div>
        <h1 className="fw-bold text-center">
          🤖<span> </span>
          <span
            style={{
              fontSize: '60px',
              background: '-webkit-linear-gradient(0deg, #F54F3D, #A563FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Automation
          </span>
          <span> </span>⚙️
        </h1>
      </div>
      <p>Things to include:</p>
      <ul>
        <li>No-Code tools</li>
        <li>CI/CD?</li>
        <li>Motion design automation Remotion Nexrender</li>
      </ul>
    </>
  )
}
