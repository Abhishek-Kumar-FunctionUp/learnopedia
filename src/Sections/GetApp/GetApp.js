import React from "react"
import Style from "./GetApp.module.css"

export default function GetApp(){

    return (
        <>
            <div className={Style.box}>
                <div className={Style.mainBox}>
                    <img className={Style.img} src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&fm=webp&w=640" alt="app"/>
                    <div className={Style.content}>
                        <p className={Style.heading} >Get the app</p>
                        <p className={Style.heading2}>Download lessons and learn anytime, anywhere with the Learn-O-Pedia app</p>

                            <div className={Style.downloadIcons}>
                                <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer">    <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="PlayStore"/></a>
                                <a href="https://itunes.apple.com/app/zomato-food-restaurants/id434613896?mt=8" target="_blank" rel="noopener noreferrer">   <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="AppleStore"/></a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}