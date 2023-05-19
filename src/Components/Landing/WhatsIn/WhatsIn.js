import "../WhatsIn/WhatsIn.css"


const WhatsIn = (props) => {

    return (
        <div className="WhatsInCards">
            <div className="WhatsInCards2">
                <div className="image">
            <img src={props.image}  className="whats-img" /> 
                </div>
                <div className="WhatsTexts">
                    <div className="whatsTexts1">
                    <p className="textOne">{props.textOne}</p>
                   <hr />
                    </div>
            <p className="textTwo">{props.textTwo}</p>
                    
                </div>
            </div>
           
        </div>
    )

}


export default WhatsIn