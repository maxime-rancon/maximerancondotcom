import VimeoPlayer from '~/components/vimeo_player'

export default function Video() {
  return (
    <>
      <div>
        <div>
          <h1 className="fw-bold text-center">Video Production</h1>
        </div>
        <br />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <VimeoPlayer videoId={1218116427} autoplay={false} title="Video Production Sample" />
            </div>
            <div className="col">
              <VimeoPlayer videoId={1218116427} autoplay={false} title="Video Production Sample" />
            </div>
            <div className="col">
              <VimeoPlayer videoId={1218116427} autoplay={false} title="Video Production Sample" />
            </div>
          </div>
        </div>
        <br />
        <p>I have many years of experience working in a studio, during this time I :</p>
        <ul>
          <li>Shoot on the field or in studio using DSLRs or standard cameras</li>
          <li>Set up and manage studio lights, including using DMX consoles</li>
          <li>Use audio mixing consoles</li>
          <li>Manage footage backups</li>
          <li>Conduct livestreaming sessions</li>
          <li>
            Record a wide variety of content such as interviews, promotional videos, courses and
            podcasts
          </li>
        </ul>
        <br />
        <p>In addition to video production, I also have experience in post-production:</p>
        <ul>
          <li>Editing</li>
          <li>Color correction</li>
          <li>Audio mixing</li>
          <li>Motion graphics</li>
        </ul>
      </div>
    </>
  )
}
