type SkillCardProps = {
  title: string
  description: string
  icon: string
  link: string
  style?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

export default function SkillCard({ title, description, icon, link, style }: SkillCardProps) {
  const cardBorderClass = style ? `border-${style}` : 'border-secondary'
  const btnBorderClass = style ? `btn-outline-${style}` : 'btn-outline-secondary'
  return (
    <div
      className={`skill-card card m-1 ${cardBorderClass}`}
      style={{ minHeight: '168px', borderWidth: '3px' }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {icon}
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <a
          href={link}
          className={`btn ${btnBorderClass}`}
          style={{ position: 'absolute', bottom: '10px' }}
        >
          <strong className="text-light">Learn more</strong>
        </a>
      </div>
    </div>
  )
}
