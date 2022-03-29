import "./style/nav.scss"
import { useEffect, useState } from 'react'

export default function Nav(props) {

    const [activeItem, setActiveitem] = useState(false)
    console.log(activeItem)

    function ActiveItem() {
        console.log("aa")
        setActiveitem(!activeItem)
    }

    return(
        <nav>
            <div className="icarly-logo">
                <img src="./img/icarly-logo.png" width="auto" height="auto" />
            </div>
            <div className="picture-container">
                <img src="./img/characters-logo.png" alt="missing" width="auto" height="auto"/>
                <div className="picture-container__background-box">
                    <div className="picture-container__background-box__inner-background-box"></div>
                </div>
            </div>
            <div className="menu">
                <div className="menu__lower-container">
                    <div className="menu__lower-container__menu-items">
                        {/* <div onClick={ActiveItem} className={"menu__lower-container__menu-items__menu-item" + activeItem ? "" : " --menu-item-active"}></div> */}
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                        <div className="menu__lower-container__menu-items__menu-item"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}