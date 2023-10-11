import { AddCircleOutline, Close } from "@mui/icons-material";
import { Container, FormControl, Grid, IconButton, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useState } from "react";

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
        width: "100%",
        backgroundColor: "white",
        padding: theme.spacing(2),
    },

    optionTitle: {
        fontSize: "18px",
        fontWeight: "500",
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
                alert("Successfully added new Status");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }


    return (
        <>

            <Modal open={statusOpen}>

                <div className={classes.addContainer}>

                    <div style={{width: "100%", justifyContent: "space-between"}}>
                        <Typography>Add Status</Typography>
                        <div onClick={()=> {setStatusOpen(false);}}><Close /></div>
                    </div>

                    <div className={classes.spacerSmall} />

                    <TextField
                        className={classes.input}
                        size="small" 
                        placeholder="Status Type"
                        label="Status Type"
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
                        >
                            Cancel
                        </div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                addNewStatus();
                                setNewStatus("");
                            }}
                        >
                            Save
                        </div>
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
                                label="Module"
                                size="small"
                            >
                                <MenuItem value="Module 1">Module 1</MenuItem>
                                <MenuItem value="Module 2">Module 2</MenuItem>
                                <MenuItem value="Module 3">Module 3</MenuItem>
                                <MenuItem value="Module 4">Module 4</MenuItem>
                            </TextField>
                        </FormControl>
                        
                    </Grid>
    
                    <Grid item xs={1} sm={1} md={1} lg={1}>
    
                        <IconButton onClick={()=>{setStatusOpen(true);}}>
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