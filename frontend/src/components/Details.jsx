import React from "react";
import "../styles/Details.css"

function Details({details, onDelete}) {


    return (
        <div className="details-container">
            <p className="fullame">{details.fullname}</p>
            <p className="client_skills">{details.skills}</p>
            <p className="client_qualifications">{details.qualifications}</p>
            <p className="client_preferences">{details.prefrences}</p>
            <button className="delete-button" onClick={() => onDelete(details.id)}>
                Delete
            </button>
        </div>
    );
};
export default Details