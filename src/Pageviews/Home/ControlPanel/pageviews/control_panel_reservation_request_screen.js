import { AddCircleOutline, Close } from "@mui/icons-material";
import { Container, FormControl, Grid, IconButton, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
    holder: {
        padding: theme.spacing(2),
    },
    title: {
        color: "black", 
        fontWeight: "700",
        fontSize: 24
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 14
    },
    spacerSmall: {
        width: "10px",
        height: "10px",
    },
    topHolder: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tableHolder: {
        width: "90%",
        backgroundColor: "white",
        padding: theme.spacing(2),
    },

    optionTitle: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#5A6872",
    },
    optionSubtitle: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#69677C",
    },

    input: {
        width: "100%",
        backgroundColor: "white",
    },

    addContainer: {
        padding: theme.spacing(2),
        backgroundColor: "white",
        width: "400px",
        height: "200px",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
        overflowY: "scroll",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vw",
        }
    },
    saveButton: {
        backgroundColor: "#24459c",
        padding: "10px 35px",
        color: "white",
        cursor: "pointer",
        borderRadius: "25px",
        fontSize: "14px"
    },
    cancelButton: {
        backgroundColor: "#F6F6F6",
        padding: "10px 35px",
        color: "#959596",
        cursor: "pointer",
        borderRadius: "25px",
        fontSize: "14px"
    },


}));


const ControlPanelReservationRequestScreen = () => {

    const classes = useStyle();

    const [statusOpen, setStatusOpen] = useState(false);
    const [radiusOpen, setRadiusOpen] = useState(false);
    const [areaOpen, setAreaOpen] = useState(false);

    const [newStatus, setNewStatus] = useState("");
    const [newRadius, setNewRadius] = useState("");
    const [newArea, setNewArea] = useState("");

    const [statusType, setStatusType] = useState([]);
    const [radius, setRadius] = useState([]);
    const [areaType, setAreaType] = useState([]);

    const addNewStatus = () => {

        if(newStatus===""){
            alert("Please provide the new status to continue");
            return;
        }

        fetch('https://api.showaapp.com/admin/control-panel/add-new-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newStatus
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setStatusOpen(false);
                setNewStatus("");
                alert(data["message"]);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    const addNewRadius = () => {

        if(newRadius===""){
            alert("Please provide the new radius to continue");
            return;
        }

        fetch('https://api.showaapp.com/admin/control-panel/add-new-radius', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newRadius
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setRadiusOpen(false);
                setNewRadius("");
                alert(data["message"]);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    const addNewArea = () => {

        if(newArea===""){
            alert("Please provide the new area to continue");
            return;
        }

        fetch('https://api.showaapp.com/admin/control-panel/add-new-area', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newArea
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setAreaOpen(false);
                setNewArea("");
                alert(data["message"]);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    function getReservationRequest() {
        var url = "https://api.showaapp.com/admin/control-panel/get-reservation-request";

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setStatusType(data["controlPanelReservationRequest"].statusType);
                    setRadius(data["controlPanelReservationRequest"].radius);
                    setAreaType(data["controlPanelReservationRequest"].areaType);
                });
    }

    useEffect(() => {
        getReservationRequest();
    })


    return (
        <>

            <Modal open={statusOpen}>

            <div className={classes.addContainer}>

                <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                    <Typography>Add Status</Typography>
                    <div onClick={()=> {setStatusOpen(false);}}><Close /></div>
                </div>

                <div className={classes.spacerSmall} />

                <TextField
                    className={classes.input}
                    size="small" 
                    placeholder="Status Type"
                    label="Status Type"
                    value={newStatus}
                    onChange={(e)=>{setNewStatus(e.target.value);}}
                />

                <div className={classes.spacerSmall} />

                <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                    <div 
                        className={classes.cancelButton}
                        onClick={(e)=>{
                            setStatusOpen(false);
                            setNewStatus("");
                        }}
                    >Cancel</div>
                    <div className={classes.spacerSmall} />
                    <div 
                        className={classes.saveButton}
                        onClick={(e)=>{
                            addNewStatus();
                            setNewStatus("");
                        }}
                    >Add</div>
                </div>

            </div>

            </Modal>

            <Modal open={radiusOpen}>

                <div className={classes.addContainer}>

                    <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                        <Typography>Add Radius</Typography>
                        <div onClick={()=> {setRadiusOpen(false);}}><Close /></div>
                    </div>

                    <div className={classes.spacerSmall} />

                    <TextField
                        className={classes.input}
                        size="small" 
                        placeholder="Radius"
                        label="Radius"
                        value={newRadius}
                        onChange={(e)=>{setNewRadius(e.target.value);}}
                    />

                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setRadiusOpen(false);
                                setNewRadius("");
                            }}
                        >Cancel</div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                addNewRadius();
                                setNewRadius("");
                            }}
                        >Add</div>
                    </div>

                </div>

            </Modal>

            <Modal open={areaOpen}>

                <div className={classes.addContainer}>

                    <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                        <Typography>Add Area Type</Typography>
                        <div onClick={()=> {setAreaOpen(false);}}><Close /></div>
                    </div>

                    <div className={classes.spacerSmall} />

                    <TextField
                        className={classes.input}
                        size="small" 
                        placeholder="Area Type"
                        label="Area Type"
                        value={newArea}
                        onChange={(e)=>{setNewArea(e.target.value);}}
                    />

                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setAreaOpen(false);
                                setNewArea("");
                            }}
                        >Cancel</div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                addNewArea();
                                setNewArea("");
                            }}
                        >Add</div>
                    </div>

                </div>

            </Modal>

            <div className={classes.holder}>
                
                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Control Panel</div>
                        <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Control Panel / </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>Reservation Request</div>
                        </div>
                    </div>
                </div>
    
                <div className={classes.spacerSmall} />
                <div className={classes.spacerSmall} />
    
                <div className={classes.tableHolder}>
    
                    <Grid container spacing={2}>
    
                            <Grid item xs={3} sm={3} md={3} lg={3}>
            
                                <div className={classes.optionTitle}>Status</div>
                                <div className={classes.optionSubtitle}>Vendor status on request</div>
            
                            </Grid>
            
                            <Grid item xs={8} sm={8} md={8} lg={8}>
            
                                <FormControl fullWidth>
                                    <TextField
                                        select
                                        id="demo-simple-select"
                                        label="Status Type"
                                        size="small"
                                    >
                                        {
                                            statusType.length != 0 ? statusType.map((status) =>
                                                <MenuItem value={status}>{status}</MenuItem>
                                            ) : <MenuItem value="no status">Status Type</MenuItem>
                                        }
                                        
                                    </TextField>
                                </FormControl>
                                
                            </Grid>
        
                        <Grid item xs={1} sm={1} md={1} lg={1}>
        
                            <IconButton onClick={()=>{setStatusOpen(true);}}>
                                <AddCircleOutline />
                            </IconButton>
                            
                        </Grid>
    
                        
    
                    </Grid>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <Grid container spacing={2}>
    
                        <Grid item xs={3} sm={3} md={3} lg={3}>

                            <div className={classes.optionTitle}>Nearest Location</div>
                            <div className={classes.optionSubtitle}>Nearest location of vendor on request</div>

                        </Grid>

                        <Grid item xs={8} sm={8} md={8} lg={8}>

                            <FormControl fullWidth>
                                <TextField
                                    select
                                    id="demo-simple-select"
                                    label="Select Radius"
                                    size="small"
                                >
                                    {
                                        radius.length != 0 ? radius.map((radi) =>
                                            <MenuItem value={radi}>{radi}</MenuItem>
                                        ) : <MenuItem value="no radius">Select Radius</MenuItem>
                                    }
                                    
                                </TextField>
                            </FormControl>
                            
                        </Grid>

                        <Grid item xs={1} sm={1} md={1} lg={1}>

                            <IconButton onClick={()=>{setRadiusOpen(true);}}>
                                <AddCircleOutline />
                            </IconButton>
                            
                        </Grid>


                    </Grid>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <Grid container spacing={2}>
    
                        <Grid item xs={3} sm={3} md={3} lg={3}>

                            <div className={classes.optionTitle}>Area</div>
                            <div className={classes.optionSubtitle}>Area of vendor on request</div>

                        </Grid>

                        <Grid item xs={8} sm={8} md={8} lg={8}>

                            <FormControl fullWidth>
                                <TextField
                                    select
                                    id="demo-simple-select"
                                    label="Area Type"
                                    size="small"
                                >
                                    {
                                        areaType.length != 0 ? areaType.map((area) =>
                                            <MenuItem value={area}>{area}</MenuItem>
                                        ) : <MenuItem value="no area">Area Type</MenuItem>
                                    }
                                    
                                </TextField>
                            </FormControl>
                            
                        </Grid>

                        <Grid item xs={1} sm={1} md={1} lg={1}>

                            <IconButton onClick={()=>{setAreaOpen(true);}}>
                                <AddCircleOutline />
                            </IconButton>
                            
                        </Grid>


                    </Grid>


                </div>  
    
            </div>
    
        </>
    );
}

export default ControlPanelReservationRequestScreen;