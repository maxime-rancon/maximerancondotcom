import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'

type VimeoPlayerProps = {
  videoId: number
  autoplay?: boolean
  className?: string
  title: string
}

export default function VimeoPlayer({
  videoId,
  autoplay = false,
  className,
  title,
}: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const player = new Player(containerRef.current, {
      id: videoId,
      responsive: true,
      autoplay,
    })

    playerRef.current = player

    const onPlay = () => {
      //console.log('Played the video')
    }

    player.on('play', onPlay)

    return () => {
      player.off('play', onPlay)
      player.destroy().catch(() => {
        // ignore destroy errors during unmount/rerender
      })
      playerRef.current = null
    }
  }, [videoId, autoplay])

  return (
    <>
      <div>
        <div ref={containerRef} className={className} />
        <p className="fw-bold text-center">
          {/*<a href={`https://vimeo.com/${videoId}`} target="_blank" rel="noopener noreferrer">*/}
          {title}
          {/*</a>*/}
        </p>
      </div>
    </>
  )
}
