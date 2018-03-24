import React from 'react';
import EquipmentCard from './EquipmentCard';
const Equipment = ({handleViewDevice, showDevices, selectEquipment , data}) => {
    return (
        <div className="d-flex flex-column">
            <button type="button" className="btn btn-primary btn-sm btn-block">
                System
            </button>
            <button
                onClick={() => handleViewDevice()}
                type="button"
                className="btn btn-secondary btn-lg btn-block">
                Device detail
            </button>
            {
                showDevices && 
                data.map((el, i) => {
                return (
                    <EquipmentCard
                    selectEquipment={() => selectEquipment(el)}
                    detail={el}
                    key={`${i.toString()}`}/>)
            })
                }

        </div>
    )
}

export default Equipment;