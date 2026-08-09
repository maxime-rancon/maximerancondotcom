type SkillCardProps = {
  title: string
  description: string
  icon: string
  link: string
  border?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

export default function SkillCard({ title, description, icon, link, border }: SkillCardProps) {
  const borderClass = border ? `border-${border}` : 'border-primary'
  return (
    <div className={`card m-1 ${borderClass}`} style={{ minHeight: '168px' }}>
      <div className="card-body">
        <h5 className="card-title">
          {icon}
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary" style={{ position: 'absolute', bottom: '10px' }}>
          Learn more
        </a>
      </div>
    </div>
  )
}
