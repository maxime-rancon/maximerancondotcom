import HomeLink from '~/components/home_link'

export default function Ai() {
  return (
    <>
      <HomeLink />
      <div>
        <h1 className="fw-bold text-center">
          🤖<span> </span>
          <span
            style={{
              fontSize: '60px',
              background: '-webkit-linear-gradient(0deg, #84ED37, #FAA428)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Artificial Intelligence
          </span>
          <span> </span>⚙️
        </h1>
      </div>
    </>
  )
}
