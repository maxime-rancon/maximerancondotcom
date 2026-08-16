import SkillCard from '~/components/home/skill_card'

export default function Skills() {
  return (
    <>
      <div className="text-center">
        <h1 className="fw-bold">
          <span style={{ color: '#80CB9A' }}>What I can do</span>
        </h1>
        <p>My main skills along with samples of my work</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <SkillCard
              title="Video Production"
              description="I can produce videos or other multimedia products, from shooting to publishing."
              icon="🎥"
              link="/video"
              style="info"
            />
          </div>
          <div className="col-sm-6">
            <SkillCard
              title="Programming"
              description="I can devellop software and web applications."
              icon="🪛"
              link="/dev"
              style="warning"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <SkillCard
              title="Automation"
              description="I can automate tasks and workflows using various tools and scripts."
              icon="🚄"
              link="/automation"
              style="success"
            />
          </div>
          <div className="col-sm-6">
            <SkillCard
              title="AI"
              description="I can use AI to automate tasks and create multimedia content."
              icon="🤖"
              link="/ai"
              style="danger"
            />
          </div>
        </div>
      </div>
    </>
  )
}
