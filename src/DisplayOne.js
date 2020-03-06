import React from "react";

function DisplayOne(props) {
  return (
     <div class="contentsize">
        <div className="size">
            <p className= "number1">S</p>
            <p className= "number2">En stock !</p>
            <p className= "number3">29,99€</p>
        </div>
        <div className="size">
            <p className= "number1">M</p>
            <p className= "number2">Vite plus que 4 en stock</p>
            <p className= "number3">29,99€</p>
        </div>
    
        <div className="size">
            <p className= "number1">L</p>
            <p className= "number2">C'est le dernier dépêchez vous !</p>
            <p className= "number3">29,99€</p>
        </div>
    
        <div className="size">
            <p className= "number1">XL</p>
            <p className= "number2">C'est le dernier dépêchez vous !</p>
            <p className= "number3">29,99€</p>
        </div>
      </div>
  )
}


export default DisplayOne;