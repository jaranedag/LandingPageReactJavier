import React from "react";

 const Card = (props)=>{
    return <div className="card" style={{"width": "18rem"}}>
    <img src={props.img} className="card-img-top" alt="..." height={"200"}/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">{props.descripcion}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Card;