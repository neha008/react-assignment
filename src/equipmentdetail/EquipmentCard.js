import React from 'react'
import './EquipmentCard.css'

const EquipmentCard = ({selectEquipment , detail }) =>{
    return (
      <div className="EquipmentCard" onClick={()=>selectEquipment()}>
       <p className="text-center Equipment_data">Equipment {detail.Equipment}</p>
      </div>
    )
}


export default EquipmentCard