import React from "react";

export const Contact = ({fName, email, phone, address}) => {

    return (

<div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw0F7N0PZEVkO-pgM4E4b6ud&ust=1719658036802000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLifu8yP_oYDFQAAAAAdAAAAABAE" className="img-fluid rounded-start" alt="...">
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


    )
};