import Nav from "./components/Navbar";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Nav></Nav>
            <Category></Category>
            <Banner></Banner>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </>
    )
}

export default App