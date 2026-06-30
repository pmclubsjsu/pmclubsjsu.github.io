import './Pillars.css'

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Success',
    description: 'Achieve your career goals with our comprehensive resources and support.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Learn',
    description: 'Master industry techniques, methodologies, and cutting-edge tech.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Experience',
    description: 'Gain hands-on, resume-worthy project experience to stand out.',
  },
]

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="pillars__inner">
        {pillars.map((p) => (
          <div className="pillar-card" key={p.title}>
            <div className="pillar-card__icon">{p.icon}</div>
            <h3 className="pillar-card__title">{p.title}</h3>
            <p className="pillar-card__desc">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
