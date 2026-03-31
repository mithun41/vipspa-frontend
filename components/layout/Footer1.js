import Link from "next/link"

export default function Footer1() {
    return (
        <>
        <footer className="main-footer">
			<div className="widgets-section">
			<div className="footer1-1 bounce-x"></div>
			<div className="auto-container">
				<div className="row">

				<div className="footer-column col-lg-4 col-md-6 order-1">
					<div className="footer-widget timetable-widget">
					<h3 className="widget-title">Open Hours</h3>
					<ul className="timetable">
						<li>Monday to Friday : <span>09:00-20:00</span></li>
						<li>Saturday: <span>09:00-18:00</span></li>
						<li>Sunday: <span>09:00-18:00</span></li>
					</ul>
					</div>
				</div>

				<div className="footer-column col-lg-4 col-md-6 order-0 order-lg-1">
					<div className="footer-widget about-widget text-center">
					<div className="logo"><Link href="index"><img src="images/logo-2.png" alt=""/></Link></div>
					<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore</div>
					<ul className="social-icon">
						<li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
						<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
						<li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
						<li><Link href="#"><i className="icon fab fa-vimeo-v"></i></Link></li>
					</ul>
					</div>
				</div>

				<div className="footer-column col-lg-4 col-md-6 order-2">
					<div className="footer-widget contacts-widget">
					<h3 className="widget-title">Contact</h3>
					<div className="text">2972 Westheimer Rd. Santa Ana, <br/> Illinois 85486</div>
					<ul className="contact-info">
						<li><Link href="tel:012-3456-789">012-3456-789</Link></li>
						<li><Link href="mailto:yourmail@company.com">yourmail@company.com</Link></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>

			<div className="footer-bottom">
			<div className="auto-container">
				<div className="inner-container">
				<figure className="image"><img src="images/icons/footer-bottom-img-1.png" alt="Image"/></figure>
				<div className="copyright-text">&copy; Purerelax, <Link href="index">Reserved By Kodesolution</Link></div>
				<Link className="link" href="/">Terms & Conditions</Link>
				</div>
			</div>
			</div>
        </footer>

        </>
    )
}
