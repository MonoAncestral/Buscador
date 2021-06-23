import React from "react";
import './styles.scss';
import Card from '../../components/ItemCard'
import Detail from '../../components/Detail'

const Back:React.FC=()=>{
    return (
    <div className="back">
      <div className="Categories">
        <a href="">32GB</a>
      </div>
      <div className="Content">
        <Detail></Detail>
      </div>
    </div>
  )

}

export default Back;