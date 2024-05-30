//popular
import one from "../images/card-1.jpg";
import two from "../images/card-2.jpg";
import three from "../images/card-3.jpg";
import four from "../images/card-4.jpg";



function Popular() {
    return (
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Click the best one</p>
            <div className="popular-container">
                <div className="course-card">
                    <img src={one} alt="imgs"></img>
                        <h3>2023 Python Data Visualazation className</h3>
                        <p>Col Steev</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={two} alt="imgs"></img>
                        <h3>2023 Web Development Html, Css, JS</h3>
                        <p>Col Steev</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={three} alt="imgs"></img>
                        <h3>2023 Master UI/UX using figma a</h3>
                        <p>Col Steev</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={four} alt="imgs"></img>
                        <h3>2023 Java Spring Boot basic level to master</h3>
                        <p>Col Steev</p>
                        <p>3.2 ⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={two} alt="imgs"></img>
                        <h3>2023 Python Data Visualazation className</h3>
                        <p>Col Steev</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={three} alt="imgs"></img>
                        <h3>2023 Web Development Html, Css, JS</h3>
                        <p>Col Steev</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={one} alt="imgs"></img>
                        <h3>2023 Master UI/UX using figma a</h3>
                        <p>Col Steev</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>

                <div className="course-card">
                    <img src={four} alt="imgs"></img>
                        <h3>2023 Java Spring Boot basic level to master</h3>
                        <p>Col Steev</p>
                        <p>3.2 ⭐⭐⭐</p>
                        <p>449 <del>999</del></p>
                </div>


            </div>
        </div>
    )
}

export default Popular;