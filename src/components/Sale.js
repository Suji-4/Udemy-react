//sale component
import sale from "../assets/images/sale image.jpg"
function Sale(){
    return(
        <div class="sale-image">
        <img src={sale} alt="sale image"></img>
        <div class="pot">
        <div class="box"></div>
        <div class="sale-image__offer">
            <h1>Learning adds up</h1>
            <h2> Udemy flash sale! 24 hours to save</h2>
            <p>And so do savings. Get courses from ₹549 through Sept 4 </p>
            <p> plus save an extra 15% with promo code 15BONUS24.</p>
</div>  
</div>
    </div>
    )
}
export default Sale