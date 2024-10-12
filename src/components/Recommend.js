// recommend component
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
function Recommend()
{
    return(
        <div class="recommended"> 
        <h1 class="recommended__title"> Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container"> 

            <div class="course-card">
                <img src={img1} alt="img1"></img>
                <h3>2024 Python Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐️⭐️⭐️⭐️</p>
                <p>499 <del>1999</del> </p>
            </div>
            <div class="course-card">
                <img src={img2} alt="img2"></img>
                <h3>2024 Full Stack Development</h3>
                <p>EMC</p>
                <p>4.9 ⭐️⭐️⭐️⭐️</p>
                <p>699 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img3} alt="img3"></img>
                <h3> 2024 UI/UX </h3>
                <p> Udemy</p>
                <p>3.6 ⭐️⭐️⭐️</p>
                <p>999 <del>3999</del> </p>
            </div>
            <div class="course-card">
                <img src={img4} alt="img4"></img>
                <h3>2024 Java</h3>
                <p>Figma</p>
                <p>4 ⭐️⭐️⭐️⭐️</p>
                <p>1499 <del>4999</del> </p>
            </div>
        </div>
    </div>
    )
}
export default Recommend