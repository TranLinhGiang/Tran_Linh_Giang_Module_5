import React from "react";
import "./PictureBody.css"
import img_1 from "../../img/img_1.jpg"

function PictureBody() {
    return (
        <>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <img className="pictureBody" src={img_1}/>
        </div>
        </>
    )
}

export default PictureBody;