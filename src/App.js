// app 
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale"
import Recommend from "./components/Recommend"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"
function App()
{
    return(
        <>
        <Navbar></Navbar>
  <Categories></Categories>
  <Sale></Sale>
  <Recommend></Recommend>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
  </>
    )
}
export default App