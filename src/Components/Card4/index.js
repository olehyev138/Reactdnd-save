import React from "react";
import david from "../../assets/David_Kenny.PNG";

function Card4({ classes }) {
  return (
    <div className="card">
      <div className="card__section">
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img alt="image of sponsor" style={{maxWidth: "100px", maxHeight:"90px", borderRadius: "80px", cursor: "pointer"}} src={david} />
              <p style={{fontStyle: "italic"}}>David Kenny<br />
                Chief Executive Officer, 
                Chief Diversity Officer
              </p>
              <p style={{fontStyle: "italic", paddingTop: "10px", paddingLeft: "10px"}}>At Nielsen Global Media, we think broadly about how to create more inclusion and diversity at our firm across all regions and markets. We’re committed to continue learning and creating opportunitie...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (Card4);
