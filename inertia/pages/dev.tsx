import HomeLink from '~/components/home_link'

export default function Dev() {
  return (
    <>
      <HomeLink />
      <div>
        <h1 className="fw-bold text-center">
          🤖<span> </span>
          <span
            style={{
              fontSize: '60px',
              background: '-webkit-linear-gradient(0deg, #F5C222, #ED563E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Programming
          </span>
          <span> </span>⚙️
        </h1>
      </div>
      <p>Things to include:</p>
      <ul>
        <li>JS/TS</li>
        <li>This website</li>
        <li>Frameworks (AdonisJS, React)</li>
      </ul>
    </>
  )
}
