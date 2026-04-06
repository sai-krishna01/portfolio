const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/sai-krishna01?tab=repositories',
    label: 'Open source projects and experiments',
    impact: 'Code snapshots and dev logs',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com',
    label: 'Professional updates and collaborations',
    impact: 'Career highlights and case studies',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sai.krishna.dev/?igsh=MW5waXZxc3V5bHloZQ%3D%3D',
    label: 'Behind-the-scenes and creator journey',
    impact: 'Quick tips and visual dev content',
  },
]

function Social() {
  return (
    <section className="home-container card-surface">
      <h2>Let&apos;s connect on social media</h2>
      <p>
        Follow my work, coding updates, and learning content. I regularly publish mini case
        studies, UI breakdowns, and practical engineering tips.
      </p>
      <div className="social-grid">
        {socials.map((social) => (
          <a href={social.link} target="_blank" rel="noreferrer" className="connect" key={social.name}>
            <strong>{social.name}</strong>
            <span>{social.label}</span>
            <small>{social.impact}</small>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Social
