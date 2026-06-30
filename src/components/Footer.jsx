import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__top">
          <img src="/images/logo.png" alt="PM Club SJSU" className="footer__logo" />
          <a href="mailto:outreach@pmclubsjsu.com" className="footer__email">
            outreach@pmclubsjsu.com
          </a>
        </div>
        <div className="footer__divider" />
        <p className="footer__copy">© 2026 PM Club SJSU. All rights reserved.</p>
      </div>
    </footer>
  )
}
