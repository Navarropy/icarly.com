import "./style/nav.scss"

export default function Nav(props) {
    return(
        <nav>
            <div className="picture-container">
                <img src="./img/characters-logo.png" alt="missing" width="auto" height="auto"/>
                <div className="picture-container__background-box">
                    <div className="picture-container__background-box__inner-background-box"></div>
                </div>
            </div>
            <div className="menu">
                <div className="menu__lower-container">
                    <div className="menu__lower-container__menu-items">
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