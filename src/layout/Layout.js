import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar/Navbar';
import Sidenav from '../sidenav/Sidenav';
import BreadCrumb from '../breadcrumb/Breadcrumb';
import './Layout.css';
import EquipmentDetail from '../equipmentdetail/EquipmentDetail';
import data from "../data/data";
class TitleComponent extends Component {

    state = {
        showDevices: false ,
        equipment:data[0]
    }

    handleViewDevice = () => {
        console.log('inisinde the function');
        this.setState(p => {
            return {
                showDevices: !p.showDevices,
                equipment:data[0]
                
            }
        })
    }
    handleSelectEquipment = (equipment) => {
        this.setState({
            equipment:equipment
        })
    }
    render() {
        const {showDevices , equipment} = this.state;
        return (

            <div>
                <Navbar />
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-lg-1 Sidenav">
                            <Sidenav />
                        </div>
                        <div className="col-lg-11">
                            <div className="row">
                                <BreadCrumb name= { showDevices ?   equipment.Equipment: ''} />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <EquipmentDetail
                                    equipment={showDevices? equipment: ''}
                                    data =  {data}
                                        handleViewDevice={this.handleViewDevice}
                                        showDevices={showDevices}
                                        selectEquipment={(equipment) => this.handleSelectEquipment(equipment)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleComponent;