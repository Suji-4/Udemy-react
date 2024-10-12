// navbar component
import one from "../assets/images/menu.png"
function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            🔍
            <input placeholder="search for anything here,Tech,Business,Art..."/>      
        </div>
        <div class="navbar__s3">
        <p>Courses</p>
        <div class="mylearning">
        <p>My learning</p>
        <div class="mylearning__popup">
        <p>You didn't purchase anything yet</p>
    </div>
    </div>
        🛒 🔔 👤

        </div>
        <div class="navbar__s4">
            <img src={one} alt="one"width="10px"></img>

        </div>
       </div>
    )
}
export default Navbar