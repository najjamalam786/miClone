
import './App.css';
import PreNavbar from "./components/PreNavbar.js";
import Navbar from "./components/Navbar.js"
// import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Slider from "./components/Slider"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import Productreviews from "./components/Productreviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOption from "./components/NavOption.js"

function App() {
  return (
    <Router>
        <PreNavbar/>
        <Navbar/>
        <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />

        <Slider picLinks={data.banner.start}/>
        <Offers offer={data.offer} />   
        <Heading text="START PRODUCTS"/>
        <StarProduct product={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu/>
        <Routes>
          <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
            
          </Route>

          <Route exact path='/smartDevices' element={<HotAccessories smartDevices={data.hotAccessories.smartDevices} smartDevicesCover={data.hotAccessoriesCover.smartDevices}/>}> 
          </Route>

          <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}> 
          </Route>
          
          <Route exact path='/lifeStyle' element={<HotAccessories Lifestyle={data.hotAccessories.lifestyle} LifestyleCover={data.hotAccessoriesCover.lifestyle}/>}> 
          </Route>

          <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}> 
          </Route>

        </Routes>

        <Heading text="PRODUCT REVIEWS"/>
        <Productreviews productReviews={data.productReviews}/>

        <Heading text="VIDEOS"/>
        <Videos video={data.videos}/>

        <Heading text="IN THE PRESS"/>
        <Banner picBanner={data.banner}/>
        <Footer footer={data.footer}/>
        
        
    </Router>
  );
}

export default App;
