import VimeoPlayer from '~/components/vimeo_player'
import HomeLink from '~/components/home_link'

export default function Video() {
  return (
    <>
      <HomeLink />
      <div>
        <h1 className="fw-bold text-center">
          🎥<span> </span>
          <span
            style={{
              fontSize: '60px',
              background: '-webkit-linear-gradient(0deg, #39A7FA, #CD4AFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Video Production
          </span>
          <span> </span>🎬
        </h1>
      </div>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <VimeoPlayer videoId={1219311907} autoplay={false} title="Interview sample" />
          </div>
          <div className="col">
            <VimeoPlayer videoId={1219316045} autoplay={false} title="Course Introduction Sample" />
          </div>
          <div className="col">
            <VimeoPlayer videoId={1218116427} autoplay={false} title="Video Production Sample" />
          </div>
        </div>
      </div>
      <br />
      <div>
        <h1 className="fw-bold text-center" style={{ color: '#3da4fa' }}>
          Studio Experience
        </h1>
      </div>
      <br />

      <div className="row align-items-center g-4">
        <div className="col-md">
          <p>I have many years of experience working in a studio !</p>
          <ul>
            <li>
              <strong>Shooting</strong>
              <p>
                In the field, or in the studio, using DSLRs or standard cameras in a single or
                multiple camera setup
              </p>
            </li>
            <li>
              <strong>Lighting</strong>
              <p>Set up and manage studio lights, including using DMX consoles</p>
            </li>
            <li>
              <strong>Sound</strong>
              <p>Use audio mixing consoles and microphones, along with effects processors</p>
            </li>
            <li>
              <strong>Live</strong>
              <p>Conduct livestreaming sessions with OBS or vMix using multi-camera setups</p>
            </li>
            <li>
              <strong>Content</strong>
              <p>
                Record a wide variety of content such as interviews, promotional videos, courses and
                podcasts
              </p>
            </li>
          </ul>
        </div>

        <div className="col-md-auto">
          <img
            src="/studio.jpg"
            alt="Studio Experience"
            className="img-fluid img-thumbnail"
            style={{ maxWidth: '400px', width: '100%' }}
          />
        </div>
      </div>

      <br />
      <div>
        <h1 className="fw-bold text-center" style={{ color: '#7d7cfc' }}>
          Post-Production
        </h1>
      </div>
      <div className="row align-items-center g-4">
        <div className="col-md">
          <br />
          <p>In addition to video production, I also have experience in post-production:</p>
          <ul>
            <li>
              <strong>Editing</strong>
              <p>
                Working mainly with Adobe Premiere, I also used Avid in the past, and know the
                basics of DaVinci Resolve
              </p>
            </li>
            <li>
              <strong>Color correction</strong>
              <p>Using Premiere or Davinci Resolve to make videos that look sharp</p>
            </li>
            <li>
              <strong>Audio mixing</strong>
              <p>
                About 80% of your message is conveyed through sound, so proper audio mixing is
                crucial, I know how to EQ, compress, and master audio to make it sound clear and
                professional
              </p>
            </li>
            <li>
              <strong>Motion graphics</strong>
              <p>
                I can use After Effects and Blender to create motion graphics, lower thirds,
                keywords, and other visual elements to enhance videos
              </p>
            </li>
          </ul>
        </div>

        <div className="col-md-auto">
          <img
            src="/studio.jpg"
            alt="Studio Experience"
            className="img-fluid img-thumbnail"
            style={{ maxWidth: '400px', width: '100%' }}
          />
        </div>
      </div>
      <br />
    </>
  )
}
