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
        <p className="mb-0">In a nutshell, my skills are:</p>
        <br />
        <strong>🎥 Video production :</strong>
        <p className="mb-0">
          I studied video production at ESRA in Paris, with a focus on post-production, then started
          working in the field as an institutional video maker.
        </p>
        <p className="mb-0">
          During my career, I have worked on various projects, including educational videos,
          marketing videos, and corporate videos. I have experience in all aspects of video
          production:
        </p>
        <ul>
          <li>Shooting on the field or with studio equipment</li>
          <li>Post-production (Editing, Color Grading, Motion Design, Sound Mixing)</li>
          <li>Live streaming</li>
          <li>Podcasts</li>
        </ul>
        <strong>🪛 Programming :</strong>
        <p className="mb-0">
          Since my childhood, I have been fascinated by computers and technology.
        </p>
        <p className="mb-0">
          While I started my carrer in video creation, I then had the opportunity to learn
          programming, it first led to creation of small scripts to automate some basic tasks, then
          to the development of full-blown web applications and automations.
        </p>
        <br />
        <strong>🚄 Automation :</strong>
        <p className="mb-0">TEXT</p>
      </section>
    </div>
  )
}
