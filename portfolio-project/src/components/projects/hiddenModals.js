import React, {useState} from "react";

//import images
import orphanage from "../../img/orphanage.png";
import Haulage from "../../img/haulage.png";
import todo from "../../img/todolist.png";



import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
        {
            name: "Orphanage Website",
            image: orphanage,
            status: "View Live Demo",
            ref:"./",
            description: [
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress.",
               
            ]
        },
        {
            name: "Haulage",
            image: Haulage,
            status: "View Live Demo",
            ref: "./",
            description: [
                "Turkhaulage is a logistics webapp for Dropshipping Company.",
                "Designed with HTML5, CSS3, Bootstrap, Wordpress."
            ]
        },
        {
            name: "todolist",
            image: todo,
            status: "View Live Demo",
            ref: "./todoList/index.html",
            description: [
                "YEAHHHH lication to provide information about progress of services and prices.",
                "Designed with HTML5, CSS3, Bootstrap, Webpack, Wordpress, and ReactJS."
            ]
        }
    ]);


    function hiddeModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }


    return(
		<div id="gallery-card">
        {
            projects.map((project, index) => {
            return (
                <div id={project.name} className="modal-card" key={index}>
                    <div className="visual">
                        <img src={project.image} alt=""/>
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>

                        <HiddenModalDescription description={project.description} />

                        <div className="modal-bottom">
                            <a href={project.ref} target="_blank">
                                <h3>{project.status}</h3>
                            </a>
                            <p className="close-icon" style={style} onClick={() => hiddeModal(project.name)}>&#10005;</p>
                        </div>

                    </div>
                </div>
            );})
        }
        </div>
    );
}