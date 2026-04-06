import { useState } from 'react'

const checklist = [
  'Briefly describe your idea or feature request',
  'Share your timeline and delivery expectations',
  'Mention your preferred tech stack or constraints',
  'Include budget range for better planning',
]

const email = 'sai.krishna.devmail@gmail.com'

function Connect() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="home-container card-surface">
      <h2>Have a project in mind? Let&apos;s build it together.</h2>
      <p>
        Fastest response channel: WhatsApp. Send a concise brief and I&apos;ll respond with scope,
        timeline, and next steps.
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
        <a href={`mailto:${email}`} className="connect">
          Send Email
        </a>
        <button type="button" className="connect" onClick={handleCopy}>
          {copied ? 'Email Copied ✅' : 'Copy Email Address'}
        </button>
      </div>
    </section>
  )
}

export default Connect
