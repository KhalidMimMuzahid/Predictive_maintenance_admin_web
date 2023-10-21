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


const ControlPanelMachine = () => {

    const classes = useStyle();
    const [brandOpen, setBrandOpen] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const [issueOpen, setIssueOpen] = useState(false);

    const [newBrand, setNewBrand] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newIssue, setNewIssue] = useState("");

    const [currentBrand, setCurrentBrand] = useState("");
    const [currentModel, setCurrentModel] = useState("");
    const [currentIssue, setCurrentIssue] = useState("");

    const [brand, setBrand] = useState([]);
    const [model, setModel] = useState([]);
    const [issue, setIssue] = useState([]);
    

    const addNewBrand = () => {

        if(newBrand===""){
            alert("Please provide the new brand name to continue");
            return;
        }

        fetch('https://api.showaapp.com/admin/control-panel/add-brand', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newBrand
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setBrandOpen(false);
                setNewBrand("");
                alert(data["message"]);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    const addNewModel = () => {

        if(currentBrand === "") {
            alert("Please select a brand to continue");
        } else if(newModel===""){
            alert("Please provide the new model to continue");
            return;
        }

        fetch('https://api.showaapp.com/admin/control-panel/add-model/' + currentBrand, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newModel
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setModelOpen(false);
                setNewModel("");
                alert(data["message"]);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    const addNewIssue = () => {

        if(currentBrand === "") {
            alert("Please select a brand to continue");
        } else if(currentModel === "") {
            alert("Please select a model to continue");
        } else if(newModel===""){
            alert("Please provide the new issue to continue");
            return;
        }

        fetch('https://api.showaapp.com/admin/control-panel/add-issue/' + currentBrand + "/" + currentModel, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newIssue
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setNewIssue("");
                alert(data["message"]);
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }


    function getMachine() {
        var url = "https://api.showaapp.com/admin/control-panel/get-machine";

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setBrand(data["brand"]);
                });
    }

    useEffect(() => {
        getMachine();
    })


    useEffect(()=> {
        console.log(currentBrand);
        brand.map((branditem)=> {
            if(branditem.name == currentBrand) {
                setModel(branditem.models);
            }
        })
        setCurrentModel("");
        setIssue([]);
    }, [currentBrand])


    useEffect(()=> {
        console.log(currentModel);
        model.map((modelitem)=> {
            if(modelitem.name == currentModel) {
                setIssue(modelitem.issues);
            }
        })
    }, [currentModel])


    return (
        <>

            <Modal open={brandOpen}>

                <div className={classes.addContainer}>

                    <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                        <Typography>Add brand</Typography>
                        <div onClick={()=> {setBrandOpen(false);}}><Close /></div>
                    </div>

                    <div className={classes.spacerSmall} />

                    <TextField
                        className={classes.input}
                        size="small" 
                        placeholder="Brand"
                        label="Brand"
                        value={newBrand}
                        onChange={(e)=>{setNewBrand(e.target.value);}}
                    />

                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setBrandOpen(false);
                                setNewBrand("");
                            }}
                        >Cancel</div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                addNewBrand();
                                setNewBrand("");
                            }}
                        >Add</div>
                    </div>

                </div>

            </Modal>

            <Modal open={modelOpen}>

                <div className={classes.addContainer}>

                    <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                        <Typography>Add model</Typography>
                        <div onClick={()=> {setModelOpen(false);}}><Close /></div>
                    </div>

                    <div className={classes.spacerSmall} />

                    <TextField
                        className={classes.input}
                        size="small" 
                        placeholder="Model"
                        label="Model"
                        value={newModel}
                        onChange={(e)=>{setNewModel(e.target.value);}}
                    />

                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setModelOpen(false);
                                setNewModel("");
                            }}
                        >Cancel</div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                addNewModel();
                                setNewModel("");
                            }}
                        >Add</div>
                    </div>

                </div>

            </Modal>

            <Modal open={issueOpen}>

                <div className={classes.addContainer}>

                    <div style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                        <Typography>Add issue</Typography>
                        <div onClick={()=> {setIssueOpen(false);}}><Close /></div>
                    </div>

                    <div className={classes.spacerSmall} />

                    <TextField
                        className={classes.input}
                        size="small" 
                        placeholder="Issue"
                        label="Issue"
                        value={newIssue}
                        onChange={(e)=>{setNewIssue(e.target.value);}}
                    />

                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setIssueOpen(false);
                                setNewIssue("");
                            }}
                        >Cancel</div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                addNewIssue();
                                setNewIssue("");
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
                            <div style={{color: "#24459c"}} className={classes.subtitle}>Machine</div>
                        </div>
                    </div>
                </div>


                <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
    
                    <div className={classes.tableHolder}>
        
                        <Grid container spacing={2}>
        
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                
                                    <div className={classes.optionTitle}>Brand</div>
                                    <div className={classes.optionSubtitle}>User Inputs Washing Machine Brand</div>
                
                                </Grid>
                
                                <Grid item xs={8} sm={8} md={8} lg={8}>
                
                                    <FormControl fullWidth>
                                        <TextField
                                            select
                                            id="demo-simple-select"
                                            label="Select Brand"
                                            size="small"
                                            value={currentBrand}
                                            onChange={(e)=>{
                                                setCurrentBrand(e.target.value); 
                                        }}>
                                            {
                                                brand.length != 0 ? brand.map((branditem) =>
                                                    <MenuItem value={branditem.name}>{branditem.name}</MenuItem>
                                                ) : <MenuItem value="no brand">Select Brand</MenuItem>
                                            }
                                            
                                        </TextField>
                                    </FormControl>
                                    
                                </Grid>
            
                            <Grid item xs={1} sm={1} md={1} lg={1}>
            
                                <IconButton onClick={()=>{setBrandOpen(true);}}>
                                    <AddCircleOutline />
                                </IconButton>
                                
                            </Grid>
        
                            
        
                        </Grid>

                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />

                        {
                            currentBrand !== "" ? <Grid container spacing={2}>
            
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                    
                                    <div className={classes.optionTitle}>Model Number</div>
                                    <div className={classes.optionSubtitle}>User Inputs Washing Machine Model Number</div>
                    
                                </Grid>
                    
                                <Grid item xs={8} sm={8} md={8} lg={8}>
                
                                    <FormControl fullWidth>
                                        <TextField
                                            select
                                            id="demo-simple-select"
                                            label="Select Model"
                                            size="small"
                                            value={currentModel}
                                            onChange={(e)=>{
                                                setCurrentModel(e.target.value); 
                                        }}>
                                            {
                                                model.length != 0 ? model.map((modelitem) =>
                                                    <MenuItem value={modelitem.name}>{modelitem.name}</MenuItem>
                                                ) : <MenuItem value="no model">Select Model</MenuItem>
                                            }
                                            
                                        </TextField>
                                    </FormControl>
                                    
                                </Grid>
            
                            <Grid item xs={1} sm={1} md={1} lg={1}>
            
                                <IconButton onClick={()=>{setModelOpen(true);}}>
                                    <AddCircleOutline />
                                </IconButton>
                                
                            </Grid>

                        </Grid> : <div className={classes.spacerSmall} />
                        }


                        {
                            currentModel !== "" ? <Grid container spacing={2}>
            
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                    
                                    <div className={classes.optionTitle}>Issue</div>
                                    <div className={classes.optionSubtitle}>User Inputs Issue</div>
                    
                                </Grid>
                    
                                <Grid item xs={8} sm={8} md={8} lg={8}>
                
                                    <FormControl fullWidth>
                                        <TextField
                                            select
                                            id="demo-simple-select"
                                            label="Select Issue"
                                            size="small"
                                            value={currentIssue}
                                            onChange={(e)=>{
                                                setCurrentIssue(e.target.value); 
                                        }}>
                                            {
                                                issue.length != 0 ? issue.map((issueitem) =>
                                                    <MenuItem value={issueitem}>{issueitem}</MenuItem>
                                                ) : <MenuItem value="no issue">Select Issue</MenuItem>
                                            }
                                            
                                        </TextField>
                                    </FormControl>
                                    
                                </Grid>
            
                            <Grid item xs={1} sm={1} md={1} lg={1}>
            
                                <IconButton onClick={()=>{setModelOpen(true);}}>
                                    <AddCircleOutline />
                                </IconButton>
                                
                            </Grid>

                        </Grid> : <div className={classes.spacerSmall} />
                        }



                    </div>  


            </div>

        </>
    );
}

export default ControlPanelMachine;