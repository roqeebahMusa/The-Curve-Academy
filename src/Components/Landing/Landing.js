import "./Landing.css"
import theCurvePose from "../../assets/theCurvePose.png"
import curveStar from "../../assets/star.png"
import WhatsIn from "./WhatsIn/WhatsIn"
import Book from "../Landing/book.png"
import brain from "../Landing/brain.png"
import work from "../Landing/work.png"
import mentor from "../Landing/mentor.png"
import WhatsIntwo from "./WhatsIn/WhatsIntwo/WhatsIntwo"
import Alumni from "./Alumni/Alumni"
import fave from "../../assets/Favour.png"
import Nkume from "../../assets/Nkume.png"
import eventOne from "../../assets/event1.png"
import eventTwo from "../../assets/event2.png"
import eventThree from "../../assets/event3.png"
import Korapay from "../../assets/KorapayLogo.png"
import Footer from "../Footer/Footer"


const Landing = () => {

    return (
        <div className="Landing">
            <div className="LandingPage">
                <div className="theCurveTexts">
                    <div className="texts2">
                          <h2>Become an Expert in <br /> Software Engineering for <span>FREE</span></h2>

                <p className="join">Join Kora Academy today to learn and acquire hands <br /> on experience, build amazing portfolio and with <br /> guaranteed internship on completion, all for free!</p>

                   <div className="apply">
                   <button>Apply Now!</button>
                   </div>

                    </div>
                  
                </div>
                <div className="theCurvePose">
                    <img src={theCurvePose} alt="FemalePose" />
                </div>
            </div>

        <div className="whatsIn">
            <div className="star">
                <img src={curveStar} alt="Star" />
            </div>
            <div className="whatsInTexts">
                <div className="lineText">
                     <p>What's in it for you?</p>
                <img src={curveStar} alt="line" /> 
                </div>

               
            </div>

        <div className="whatsInLists">
        <WhatsIn
             img={Book}
             textOne= "Learn from our Experts"
             textTwo="We ensure to provide you with the best instructor to make your learning fun and impactful, we have hand selected out instructors that will deliver the best learning experience."/>

<WhatsIntwo
             img={brain}
             textOne= "Hands on Experience"
             textTwo="We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready!"/>

<WhatsIn
             img={work}
             textOne= "Internship on Completion"
             textTwo="A paid internship placement awaits you on your successful completion of the intensive five months training."/>

<WhatsIntwo
             img={mentor}
             textOne= "Mentorship"
             textTwo="You will be assigned to a mentor that will guide you through your journey."/>



        </div>

        <div className="apply2">
        <img src={curveStar} alt="line" /> 
        <div className="apply3">
        <button>Apply Now!</button>
        </div>
            </div>              
        </div>

        <div className="Alumnis">
            <div className="MeetThem">
               <div className="MeetThem2">
               <h4>Meet our Alumni</h4>
                <p>We ensure to provide you with the best instructor to make your learning fun and impactful, <br /> we have hand selected out instructors that will deliver the best learning experience. </p>
               </div>
            </div>

            <div className="Alumnis-Two">
              <Alumni
              alumniimg={fave}
              alumniname="Favour Igbani"
              alumnimessage="We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready! We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready!" />

             <Alumni 
              alumniimg={Nkume}
              alumniname="Oparah Nkume"
              alumnimessage="We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready! We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready!" />

            <Alumni 
            alumniimg={fave}
            alumniname="Roqeebah Musa"
            alumnimessage="We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready! We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready!" />

            <Alumni
            alumniimg={fave}
            alumniname="Unjuwa Lucia"
            alumnimessage="We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready! We believe in practical, and that is why we invest on it, you would learn by doing it yourself, get ready!"  />
            </div>
        </div>

        <div className="EventsPhotos">
            <div className="eventphotoOne">
                <div className="event">
                    <h4>Event Photos</h4>  
                </div>
            
            </div>
            <div className="eventphotoTwo">
                <img src={eventOne} alt="" />
                <img src={eventTwo} alt="" />
                <img src={eventThree} alt="" />
                <img src={eventThree} alt="" />
            </div>
        </div>

        <div className="sponsors">

        <div className="sponsor1">
                
            
            </div>
            <div className="sponsors2">
                <div className="sponsors1a">
                    <h4>Our Sponsors</h4>  
                <img src={Korapay} alt="Korapay" />

                </div>
            </div>
        </div>

        <Footer />

        </div>
    )
}



export default Landing