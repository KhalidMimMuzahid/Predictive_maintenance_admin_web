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
        let macId = "23:45:67:89:01:34";
        let vibration1 = 2134;
        let vibration2 = 4523;
        let vibration3 = 3445;
        let vibration4 = 2346;
        let vibration5 = 6785;
        let vibration6 = 4567;
        let temperature1 = 27;
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