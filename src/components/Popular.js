// popular components
import img5 from "../assets/images/c1.jpg"
import img6 from "../assets/images/c2.jpg"
import img7 from "../assets/images/c3.jpg"
import img8 from "../assets/images/c4.jpg"
import img9 from "../assets/images/c5.jpg"
import img10 from "../assets/images/c6.jpg"
import img11 from "../assets/images/c7.jpg"
import img12 from "../assets/images/c8.jpg"
function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title"> Most Popular</h1>
        <p class="popular__subtitle"> Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={img5} alt="img5"></img>
                <h3>2024 Python Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐️⭐️⭐️⭐️</p>
                <p>499 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={img6} alt="img6"></img>
                <h3>2024 Full Stack Development</h3>
                <p>EMC</p>
                <p>4.9 ⭐️⭐️⭐️⭐️</p>
                <p>699 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img7} alt="img7"></img>
                <h3> 2024 UI/UX </h3>
                <p> Udemy</p>
                <p>3.6 ⭐️⭐️⭐️</p>
                <p>999 <del>3999</del> </p>
            </div>
            <div class="course-card">
                <img src={img8} alt="img8"></img>
                <h3>2024 Java</h3>
                <p>Figma</p>
                <p>4 ⭐️⭐️⭐️⭐️</p>
                <p>1499 <del>4999</del> </p>
            </div>
            <div class="course-card">
                <img src={img9} alt="img9"></img>
                <h3>2024 Full Stack Development</h3>
                <p>EMC</p>
                <p>4.9 ⭐️⭐️⭐️⭐️</p>
                <p>699 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img10} alt="img10"></img>
                <h3>2024 Java</h3>
                <p>Figma</p>
                <p>4 ⭐️⭐️⭐️⭐️</p>
                <p>1499 <del>4999</del> </p>
            </div>
            <div class="course-card">
                <img src={img11} alt="img11"></img>
                <h3>2024 Python Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐️⭐️⭐️⭐️</p>
                <p>499 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={img12} alt="img12"></img>
                <h3>2024 Java</h3>
                <p>Figma</p>
                <p>4 ⭐️⭐️⭐️⭐️</p>
                <p>1499 <del>4999</del> </p>
            </div>
        </div>
    </div>
    )
}
export default Popular