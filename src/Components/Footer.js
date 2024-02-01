import "./FooterStyle.css"
function Footer(){
    return(
        <div>
            <div className='footer-div'>
                <div className="head">
                    <div className="left">
                        <h3>Wanderer</h3>
                        <p>choose your favourite destination</p>
                    </div>
                    <div className="right">
                        <a href="/"><i class="fa-brands fa-square-facebook"></i></a>
                        <a href="/"><i class="fa-brands fa-square-whatsapp"></i></a>
                        <a href="/"><i class="fa-brands fa-square-twitter"></i></a>
                        <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="first">
                        <h3>Project</h3>
                        <a href="/" >Changelog</a>
                        <a href="/" >Status</a>
                        <a href="/" >License</a>
                        <a href="/" >All Versions</a>
                    </div>
                    <div className="second">
                    <h3>community</h3>
                        <a href="/" >Github</a>
                        <a href="/" >issues</a>
                        <a href="/" >Project</a>
                        <a href="/" >Twitter</a>
                    </div>
                    <div className="third">
                    <h3>Help</h3>
                        <a href="/" >Support</a>
                        <a href="/" >Troubleshooting</a>
                        <a href="/" >Contact US</a>
                    </div>
                    <div className="fourth"><h3>Others</h3>
                        <a href="/" >Terms of Service</a>
                        <a href="/" >Privacy Policy</a>
                        <a href="/" >License</a></div>
                </div>
            </div>
        </div>
    )
}
export default Footer