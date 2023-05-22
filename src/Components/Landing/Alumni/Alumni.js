import "../Alumni/Alumni.css"


const Alumni = (props) => {

    return (
        <div className="AlumniIntro">
            <div className="AlumniIntro2">
                <div className="AlumniImg">
                    <img src={props.alumniimg} alt="Alumni Images" className="img" />
                </div>
            <div className="AlumniNames">
                <div className="AlumniNamesTwo">
                  <p>{props.alumniname}</p>
                <hr className="Line" />   
                </div>              
            </div>
            <div className="AlumniMessage">
                <p className="msgs">{props.alumnimessage}</p>
            </div> 
            </div>
           
        </div>
    )

}


export default Alumni