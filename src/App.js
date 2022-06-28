import React from 'react'
import PreNavbar from './Components/PreNavbar'
import Navbar from './Components/Navbar'
import Slider from "./Components/Slider"
import Offers from "./Components/Offers"
import Heading from "./Components/Heading"
import StarProduct from "./Components/StarProduct"
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu"
import HotAccessories from "./Components/HotAccessories"
import ProductReviews from "./Components/ProductReviews"
import Video from "./Components/Video"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import NavOptions from "./Components/NavOptions"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import data from "./Data/data.json"

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path="/music"
          element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route exact path="/smartDevice"
          element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route exact path="/home"
          element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route exact path="/lifestyle"
          element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route exact path="/mobileAccessories"
          element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS" />
      <Video videos={data.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  )
}

export default App