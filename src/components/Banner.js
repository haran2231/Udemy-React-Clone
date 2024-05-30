//banner
import ban from "../images/banner.jpg";
function Banner() {
    return (
        <div className="banner">
            <img src={ban} alt="sales" />
            <div className="banner__box">
                <h2>Udemy Flash Sale! 24 Hours to save.</h2>
                <p>Get top courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}

export default Banner;