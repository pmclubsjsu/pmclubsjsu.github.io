import './AboutUs.css'

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const officers = [
  {
    name: 'Aneesh Matcha',
    title: 'President',
    image: '/images/aneesh.jpg',
    linkedin: 'https://www.linkedin.com/in/aneesh-matcha/',
  },
  {
    name: 'Jensen Jacob',
    title: 'Vice President',
    image: '/images/jensen.jpg',
    linkedin: 'https://www.linkedin.com/in/jensen-jacob/',
  },
  {
    name: 'Faqeha Zahir',
    title: 'Vice President of Finance',
    image: '/images/faqeha.png',
    linkedin: 'https://www.linkedin.com/in/faqeha-zahir/',
  },
  {
    name: 'Eman Naseerkhan',
    title: 'Vice President of Marketing',
    image: '/images/eman.png',
    linkedin: 'https://www.linkedin.com/in/eman-naseerkhan/',
  },
  {
    name: 'Charan Bhuma',
    title: 'Vice President of Memberships',
    image: '/images/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/eman-naseerkhan/',
  },
  {
    name: 'Shushruth Nandamuri',
    title: 'Vice President of Operations',
    image: '/images/shushruth.png',
    linkedin: 'https://www.linkedin.com/in/shushruth-nandamuri/',
  },
]

export default function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__header">
          <h2 className="about__title">Meet the Team</h2>
          <p className="about__subtitle">
            Led by passionate SJSU students dedicated to building the next
            generation of product managers.
          </p>
        </div>
        <div className="about__cards">
          {officers.map((officer) => (
            <div className="officer-card" key={officer.name}>
              <div className="officer-card__photo-wrap">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="officer-card__photo"
                />
              </div>
              <div className="officer-card__info">
                <h3 className="officer-card__name">{officer.name}</h3>
                <p className="officer-card__title">{officer.title}</p>
                <a
                  href={officer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="officer-card__linkedin"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
