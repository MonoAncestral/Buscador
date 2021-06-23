import React, { CSSProperties } from "react";
import './styles.scss';

const ItemCard:React.FC=()=>{
  const [imageUrl, setImageUrl] = React.useState<string>("https://http2.mlstatic.com/D_664824-MLA44192451767_112020-O.jpg");
    return (
    <div>
      <div className="ItemCard">
        <div className="imgContent" style={{ backgroundImage: `url(${imageUrl})`}} >
        </div>
        <div className="infoContent">
          <p className="price">$ 1.980</p>
          <h2>Apple ipod Touch 5g 16gb Negro Igual A Nuevo</h2>
          <p>Completo Unico!</p>
          
        </div>
      </div>
      <hr />
    </div>
  )

}

export default ItemCard;