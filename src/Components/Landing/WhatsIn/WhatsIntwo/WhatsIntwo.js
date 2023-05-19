import "../WhatsIntwo/WhatsIntwo.css"


const WhatsIntwo = (props) => {

    return (
        <div className="WhatsInCards">
            <div className="WhatsInCards2">
                <div className="image2">
            <img src={props.image}  className="whats-img" /> 
                </div>
                <div className="WhatsTexts">
                    <div className="whatsTexts2">
                    <p className="textOne">{props.textOne}</p>
                   <hr className="hr" />
                    </div>
            <p className="textTwo">{props.textTwo}</p>
                    
                </div>
            </div>
           
        </div>
    )

}


export default WhatsIntwo