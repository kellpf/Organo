import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="http://facebook.com" target="blank">
                            <img src="/images/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com" target="blank">
                            <img src="/images/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="http://instagram.com" target="blank">
                            <img src="/images/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt='logo'></img>
            </section>

            <section className='text'>
                <p>
                    Desenvolvido por Kelly
                </p>
            </section>
        </footer>
    )
}