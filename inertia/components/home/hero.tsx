export default function Hero() {
  return (
    <>
      <div className="text-center">
        <h5>Paris 🇫🇷 France</h5>
        <h1 className="fw-bold">
          <span>✨ </span>
          <span
            style={{
              fontSize: '60px',
              background: '-webkit-linear-gradient(0deg, #4BD0D9, #D9C231)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Video Engineering
          </span>
          <span> ✨</span>
        </h1>
        <br />
        <h5 style={{ lineHeight: '1.5' }}>
          Creating multimedia content, automating processes
          <br />
          and both combined!
        </h5>
        <br />
        <h4>
          <span className="badge text-bg-secondary text-bg-danger">Now</span> With 50% more AI !
        </h4>
      </div>
    </>
  )
}
