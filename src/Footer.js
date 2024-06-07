function Footer() {
    return (
        <footer>
            <img src="footer-logo.png" alt="Little Lemon Restaurant" height="200px" />
            <article>
                <div className="title">Doormat Navigation</div>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li><a href="reservations.html">Reservations</a></li>
                        <li><a href="order.html">Order Online</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </nav>
            </article>
            <article>
                <div className="title">Contact</div>
                <div className="detail"><span className="detail-title">Address: </span>1725 W Harrison St Suite 1118,
                    Chicago,<br />
                    IL 60612,
                    United States
                </div>
                <div className="detail"><span className="detail-title">Contact No: </span>01234567890</div>
                <div className="detail"><span className="detail-title">Email: </span>littlelemon@gmail.com</div>
            </article>
            <article>
                <div className="title">Social Media Links</div>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank"><img src="facebook.webp" width="35px" height="35px" /></a></li>
                        <li><a href="https://www.twitter.com" target="_blank"><img src="twitter.jpg" width="35px" height="35px" /></a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><img src="instagram.jpg" width="35px" height="35px" style={{ borderRadius: '50%' }} /></a></li>
                    </ul>
                </nav>
            </article>
        </footer>
    )
}

export default Footer