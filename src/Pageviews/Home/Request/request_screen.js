import { Button } from "@mui/material";
import { Component } from "react";

const RequestScreen = () => {
    return (
        <IotDemoDataAdd />
        // <h3>Request</h3>
    );
}

export default RequestScreen;


class IotDemoDataAdd extends Component {

    addSensorData() {
        let macId = "23:34:45:56:67:78";
        let vibration1 = 150;
        let vibration2 = 67;
        let vibration3 = 87;
        let vibration4 = 23;
        let vibration5 = 45;
        let vibration6 = 67;
        let temperature1 = 25;
        let temperature2 = 41;
        let temperature3 = 43;
        let temperature4 = 43;
        let temperature5 = 72;
        let temperature6 = 20;

        fetch('https://api.showaapp.com/admin/iot/update-sensor-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                macId,
                temperature1,
                temperature2,
                temperature3,
                temperature4,
                temperature5,
                temperature6,
                vibration1,
                vibration2,
                vibration3,
                vibration4,
                vibration5,
                vibration6,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    render () {
        return <Button onClick={()=>{
            this.addSensorData();
        }}
        >Add Sensor Data</Button>
    };

}