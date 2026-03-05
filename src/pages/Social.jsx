const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/sai-krishna01?tab=repositories',
    label: 'Open source projects and experiments',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com',
    label: 'Professional updates and collaborations',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sai.krishna.dev/?igsh=MW5waXZxc3V5bHloZQ%3D%3D',
    label: 'Behind-the-scenes and creator journey',
  },
]

function Social() {
  return (
    <div className="home-container card-surface">
      <h2>Let&apos;s connect on social media</h2>
      <p>
        Follow my work, coding updates, and learning content. I usually share mini case studies,
        UI breakdowns, and practical dev tips.
      </p>
      <div className="social-grid">
        {socials.map((social) => (
          <a href={social.link} target="_blank" rel="noreferrer" className="connect" key={social.name}>
            <strong>{social.name}</strong>
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Social
