const checklist = [
  'Briefly describe your idea or feature request',
  'Share your timeline and delivery expectations',
  'Mention your preferred tech stack or constraints',
  'Include budget range for better planning',
]

function Connect() {
  return (
    <div className="home-container card-surface">
      <h2>Have a project in mind? Let&apos;s build it together.</h2>
      <p>
        Fastest response channel: WhatsApp. Drop a concise brief and I will get back with next
        steps, scope estimate, and timeline.
      </p>

      <ul className="checklist">
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="connect-flex">
        <a href="https://wa.me/+919502936337" target="_blank" rel="noreferrer" className="connect cta">
          Start WhatsApp Chat
        </a>
      </div>
    </div>
  )
}

export default Connect
