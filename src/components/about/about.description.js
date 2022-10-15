import React from "react";

import myImage from "../../img/EdehEmma.png";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                <p className="mytext pt-3">
                    I am a tech savvy and am passionate about using exploiting Javascript and other technology <br/>
                     to create awesome user experiences.I have 5+ experience as CMS developer and 3+ years as a Javascript framework web developer.
                    
                </p>
            </div>

            <SkillBars />

        </div>
    );
}