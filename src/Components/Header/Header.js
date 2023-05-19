import "./Header.css"
import theCurve from "../../assets/thecurve.png"


const Header = () => {
    return (
        <div className="Main-Header">
            <div className="Main-header1">
                <div className="header-logo">
                    <img src={theCurve} alt="Kora Academy"/>
                </div>
                <div className="header-navs">
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Contact</h4>
                    <h4>Gallery</h4>
                </div>
                <button className="register">
                    <h4>Register for Free!</h4>
                </button>
            </div>
            <div className="Main-header2">
                <h4>Registration for the Kora Academy cohort 1.0 is now open!</h4>
            </div>
        </div>
    )
}



export default Header