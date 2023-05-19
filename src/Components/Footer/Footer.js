import "./Footer.css"
import Thecurve from "../../assets/thecurve.png"
import callA from "../../assets/calla.png"
import callB from "../../assets/callb.png"
import Mail from "../../assets/mail.png"
import face from "../../assets/facebk.png"
import tweet from "../../assets/tweet.png"
import link from "../../assets/link.png"
import insta from "../../assets/insta.png"


const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer2">
                <div className="Logo">
                    <img src={Thecurve} alt="The Curve" />
                </div>
                <div className="getInTouch">
                    <div className="getInTouch2">
                        <p className="get">Get in touch</p>
                        <div className="call1">
                            <img src={callA} alt="Phone" />
                            <p>+2348186793482</p>
                        </div>
                        <div className="call2">
                        <img src={callB} alt="Phone" />
                        <p>+2348137253138</p>
                        </div>
                        <div className="call3">
                        <img src={Mail} alt="Mail" />
                        <p>TheCurve@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="medias">
                <div className="medias2">
                        <p className="get">Social Media</p>
                        <div className="social-media">
                            <img src={face} alt="Facebook" />
                            <img src={tweet} alt="Twitter" />
                            <img src={link} alt="Linkedin" />
                            <img src={insta} alt="Instagram" />
                        </div>
                        <div className="at">
                            <p>@thecurveafrica</p>
                        </div>
                       
                    </div>
                </div>
                <div className="Apply">
                   <button>Apply Now!</button>
                </div>
            </div>
            <hr className="footerLine" />
            <div className="reserved">
                <div className="reserved2">
                <p>@2023 The Curve Africa by Kora | all right reserved</p>
                </div>
            </div>
        </div>
    )
}


export default Footer