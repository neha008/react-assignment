import React from 'react';
import Device from './Device';
import './EquipmentDetail.css'

class EquipmentDetail extends React.Component {

    render() {
        const {showDevices , selectEquipment , handleViewDevice , data, equipment} = this.props
        const {Equipment,Vendor, Location,Model,Serial,Description}= equipment;
        return (
            <div className="d-flex">
                <div className="col-8 EquipmentDetailMainCard">
                    <div className="row alert alert-secondary">
                        Device Details
                        </div>
                    <div className="row">
                        <div className="col">
                            <h5>
                                Image
                            </h5>
                        </div>
                        <div className="col">
                            <form action="/action_page.php">
                                <div className="form-group">
                                    <span>
                                        Equipment Name
                                    </span>
                                    <input type="text" className="form-control" id="email" value={Equipment}/>
                                </div>
                                <div className="form-group">
                                    <span>
                                        Vendor
                                    </span>
                                    <input type="text" className="form-control" id="pwd" value={Vendor}/>
                                </div>
                                <div className="form-group">
                                    <span>
                                        Location
                                    </span>
                                    <input type="text" className="form-control" id="pwd" value={Location}/>
                                </div>
                                <div className="form-group">
                                    <span>
                                        Model
                                    </span>
                                    <input type="text" className="form-control" id="pwd" value={Model}/>
                                </div>
                                <div className="form-group">
                                    <span>
                                        Serial#
                                    </span>
                                    <input type="text" className="form-control" id="pwd" value={Serial}/>
                                </div>
                                <div className="form-group">
                                    <span>
                                        Description
                                    </span>
                                    <input type="text" className="form-control" id="pwd" value={Description}/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <Device
                    data = {data}
                        handleViewDevice={()=>handleViewDevice()}
                        showDevices={showDevices}
                        selectEquipment={(equipment) => selectEquipment(equipment)}/>
                </div>

            </div>

        )
    }
}

export default EquipmentDetail;