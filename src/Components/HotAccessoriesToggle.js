import React, { useState, useEffect } from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"

const HotAccessoriesToggle = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {

    const [musicToggle, setMusicToggle] = useState(false);
    const [smartToggle, setSmartToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [lifeToggle, SetLifeToggle] = useState(false);
    const [mobileToggle, SetMobileToggle] = useState(false);


    useEffect(() => {
        if (window.location.pathname === "/music") {
            return setMusicToggle(true)
        }
        if (window.location.pathname === "/smartDevice") {
            return setSmartToggle(true)
        }
        if (window.location.pathname === "/home") {
            return setHomeToggle(true)
        }
        if (window.location.pathname === "/lifestyle") {
            return SetLifeToggle(true)
        }
        if (window.location.pathname === "/mobileAccessories") {
            return SetMobileToggle(true)
        }
    }, [])


    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
            </div>
            <div>
                {musicToggle ? music && music.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                )) : null}

                {smartToggle ? smartDevice && smartDevice.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                )) : null}

                {homeToggle ? home && home.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                )) : null}

                {lifeToggle ? lifeStyle && lifeStyle.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                )) : null}

                {mobileToggle ? mobileAccessories && mobileAccessories.map((item, index) => (
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                )) : null}


                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            </div>

        </div>
    )

};

export default HotAccessoriesToggle