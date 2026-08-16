import Bio from '~/components/home/bio'
import Hero from '~/components/home/hero'
import Skills from '~/components/home/skills'
import VideoNTech from '~/components/home/video_n_tech'
import Contact from '~/components/home/contact'
export default function Home() {
  return (
    <>
      <Hero />
      <br />
      <br />
      <VideoNTech />
      <br />
      <Skills />
      <br />
      <br />
      <Bio />
      <br />
      <Contact />
      <br />
    </>
  )
}
