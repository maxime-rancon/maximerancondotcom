export default function Bio() {
  function currentAge(): number {
    const birthDate = new Date(1990, 0, 29)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div>
      <section style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="text-center">
          <h1>About me</h1>
        </div>

        <p className="mb-0">
          Hi! I am Maxime Rançon, a {currentAge()}-year-old video and automation engineer living in
          the Paris region of France.
        </p>
        <br />
        <p className="mb-0">
          I started my career working as an institutional video maker, taking care of all the video
          production steps from shooting, editing, audio mixing, color grading, motion design and
          publishing of content such as educational videos or marketing.
        </p>
        <br />
        <p className="mb-0">
          I always had a passion for technology, and while working in video production in an edtech
          company, I had the opportunity to learn programming. This led me to a new path in my
          career: automation and software development.
        </p>
        <br />
      </section>
    </div>
  )
}
