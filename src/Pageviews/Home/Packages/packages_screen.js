import { Add, ArrowDropDown, Close, Delete, FiberManualRecord, MoreVert } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Grid, IconButton, Menu, MenuItem, Modal, TextField, Typography } from "@mui/material";
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
    buttonHolder: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    buttonHolder: {
        display: "flex",
        justifyContent: "end",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    smallMenuHolder: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    tableHolder: {
        width: "100%",
    },
    addPackageContainer: {
        padding: theme.spacing(2),
        backgroundColor: "white",
        width: "400px",
        height: "450px",
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
            overflowY: "scroll",
        }
    },
    input: {
        width: "100%",
        backgroundColor: "white",
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
    counterContainer: {
        padding: "0px",
    },
    counter: {
        padding: "10px 8px",
        width: "100%",
        border: "1px solid #787878",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    activeCounterIcon: {
        backgroundColor: "#24459c",
        width: "16px",
        height: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "50%",
        cursor: "pointer",
    },
    inactiveCounterIcon: {
        backgroundColor: "#F3F3F3",
        width: "16px",
        height: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#605D5D",
        borderRadius: "50%",
    },
    packageContainer: {
        width: "100%",
        padding: "16px",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    editButton: {
        width: "100%", 
        display: "flex", 
        padding: "10px", 
        borderRadius: "25px", 
        backgroundColor: "#24459c", 
        color: "white", 
        fontSize: "14px", 
        fontWeight: "500",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    selectedPackage: {
        border: "1px solid #24459c",
        backgroundColor: "#24459c", 
        color: "white",
        padding: "10px 16px", 
        borderRadius: "25px", 
        marginRight: "16px"
    },
    unselectedPackage: {
        border: "1px solid #24459c",
        padding: "10px 16px", 
        borderRadius: "25px", 
        marginRight: "16px",
        cursor: "pointer",
    },
}))

const PackagesScreen = () => {


    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [monthlyPackageSelected, setMonthlyPackageSelected] = useState(true);
    const [yearlyPackageSelected, setYearlyPackageSelected] = useState(false);
    const [payAsUsagePackageSelected, setPayAsUsagePackageSelected] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [newPackage, setNewPackage] = useState(
        {
            planType: '',
            headerTitle: '',
            packageTitle: '',
            price: '',
            numOfSensor: 1,
            moduleApplicable: '',
            additionalFeatures: []
        }
    );
    const [tempAddlFeature, setTempAddlFeature] = useState("");

    const classes = useStyle();

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const createPackage = () => {
        if(newPackage.planType===""){
            alert("Please select the type of plan to continue");
            return;
        }
        if(newPackage.headerTitle===""){
            alert("Please provide title of the header to continue");
            return;
        }
        if(newPackage.packageTitle===""){
            alert("Please provide title of the package to continue");
            return;
        }
        if(newPackage.price===""){
            alert("Please provide price of the package to continue");
            return;
        }
        if(newPackage.module===""){
            alert("Please select the module acclicable for this package to continue");
            return;
        }

        let packageId = makeid(16);
        let planType= newPackage.planType;
        let headerTitle= newPackage.headerTitle;
        let packageTitle= newPackage.packageTitle;
        let price= newPackage.price;
        let numOfSensor= newPackage.numOfSensor;
        let moduleApplicable= newPackage.moduleApplicable;
        let additionalFeatures= newPackage.additionalFeatures;

        fetch('https://api.showaapp.com/admin/packages/add-package', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                packageId, planType, headerTitle, packageTitle, price, numOfSensor, moduleApplicable, additionalFeatures
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setModalOpen(false);
                alert("Successfully added new Package");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }


    const [monthlyPackages, setMonthlyPackages] = useState([]);
    const [yearlyPackages, setYearlyPackages] = useState([]);
    const [payAsUsagePackages, setPayAsUsagePackages] = useState([]);

    useEffect(() => {
        getMonthlyPackages();
        getYearlyPackages();
        getPayAsUsagePackages();
    })

    
    function getMonthlyPackages() {

        var planType = "Monthly Plan";
        var url = "https://api.showaapp.com/admin/packages/get-packages/" + planType;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setMonthlyPackages(data);
            });
    }
    
    function getYearlyPackages() {

        var planType = "Yearly Plan";
        var url = "https://api.showaapp.com/admin/packages/get-packages/" + planType;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setYearlyPackages(data);
            });
    }
    
    function getPayAsUsagePackages() {

        var planType = "Pay as you go";
        var url = "https://api.showaapp.com/admin/packages/get-packages/" + planType;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPayAsUsagePackages(data);
            });
    }

    function displayMonthlyPackages () {

        if (monthlyPackages.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>No monthly package in the server</h3>
            </div>;

        return <Grid container spacing={2}>
            {
                monthlyPackages.map((monthlyPackage, index) => (
                    <PackageTab
                        package = {monthlyPackage}
                        key = {index} 
                    />
                ))
            }
        </Grid>;

    };

    function displayYearlyPackages () {

        if (yearlyPackages.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>No yearly package in the server</h3>
            </div>;

        return <Grid container spacing={2}>
            {
                yearlyPackages.map((yearlyPackage, index) => (
                    <PackageTab
                        package = {yearlyPackage}
                        key = {index} 
                    />
                ))
            }
        </Grid>;

    };

    function displayPayAsUsagePackages () {

        if (payAsUsagePackages.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>No pay as usage package in the server</h3>
            </div>;

        return <Grid container spacing={2}>
            {
                payAsUsagePackages.map((payAsUsagePackage, index) => (
                    <PackageTab
                        package = {payAsUsagePackage}
                        key = {index} 
                    />
                ))
            }
        </Grid>;

    };

    return (

        <>

            <Modal open={modalOpen}>

                <Container className={classes.addPackageContainer}>

                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Create New Package</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setModalOpen(false); }}><Close /></div>
                    </div>

                    <div>
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                    </div>

                    <div style={{color: "#65748B", fontSize: "16px", fontWeight: "400", paddingLeft: "16px"}}>Package Details</div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    id="demo-simple-select"
                                    value={newPackage.planType}
                                    label="Type of Plan"
                                    size="small"
                                    onChange={(e)=>{setNewPackage({ ...newPackage, planType: e.target.value })}}
                                >
                                    <MenuItem value="Monthly Plan">Monthly Plan</MenuItem>
                                    <MenuItem value="Yearly Plan">Yearly Plan</MenuItem>
                                    <MenuItem value="Pay as you go">Pay as you go</MenuItem>
                                </TextField>
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <TextField
                                    className={classes.input}
                                    size="small" 
                                    placeholder="Header Title"
                                    label="Header Title"
                                    onChange={(e)=>{setNewPackage({ ...newPackage, headerTitle: e.target.value })}}
                                />
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <TextField
                                    className={classes.input}
                                    size="small" 
                                    placeholder="Title of the Package"
                                    label="Title of the Package"
                                    onChange={(e)=>{setNewPackage({ ...newPackage, packageTitle: e.target.value })}}
                                />
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <TextField
                                    className={classes.input}
                                    size="small" 
                                    placeholder="Price (Yen)"
                                    label="Price"
                                    onChange={(e)=>{setNewPackage({ ...newPackage, price: e.target.value })}}
                                />
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                    <Container className={classes.counter}>
                                        <div style={{color: "#C7CCD8"}}>Number of sensor module</div>
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <div 
                                                onClick={(e)=>{
                                                    if(newPackage.numOfSensor != 1) {
                                                        let count = newPackage.numOfSensor;
                                                        count--;
                                                        setNewPackage({ ...newPackage, numOfSensor: count })
                                                    }
                                                }}
                                                className={newPackage.numOfSensor === 1 ? classes.inactiveCounterIcon : classes.activeCounterIcon}
                                            >-</div>

                                            <div className={classes.spacerSmall} />
                                            <Typography>{newPackage.numOfSensor}</Typography>
                                            <div className={classes.spacerSmall} />
                                            
                                            <div 
                                                onClick={(e)=>{
                                                    if(newPackage.numOfSensor != 5) {
                                                        let count = newPackage.numOfSensor;
                                                        count++;
                                                        setNewPackage({ ...newPackage, numOfSensor: count })
                                                    }
                                                }}
                                                className={newPackage.numOfSensor === 5 ? classes.inactiveCounterIcon : classes.activeCounterIcon}
                                            >+</div>
                                        </div>
                                    </Container>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    id="demo-simple-select"
                                    value={newPackage.moduleApplicable}
                                    label="Applicable Sensor Module"
                                    size="small"
                                    onChange={(e)=>{setNewPackage({ ...newPackage, moduleApplicable: e.target.value })}}
                                >
                                    <MenuItem value="Module 1">Module 1</MenuItem>
                                    <MenuItem value="Module 2">Module 2</MenuItem>
                                    <MenuItem value="Module 3">Module 3</MenuItem>
                                    <MenuItem value="Module 4">Module 4</MenuItem>
                                </TextField>
                            </FormControl>
                        </Grid>


                    </Grid>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                    <div style={{color: "#65748B", fontSize: "16px", fontWeight: "400", paddingLeft: "16px"}}>Package Comes with</div>
                    <div className={classes.spacerSmall} />

                    {
                        newPackage.additionalFeatures.map((e, i)=>{
                            return (
                                <div style={{display: "flex", marginBottom: "5px"}} key={i}>
                                    <TextField
                                        className={classes.input}
                                        size="small" 
                                        value={e}
                                        disabled
                                    />
                                    <IconButton
                                        onClick={()=>{
                                            let tempAddlFeatureList = new Array();
                                            tempAddlFeatureList = newPackage.additionalFeatures;
                                            tempAddlFeatureList.splice(i, 1);
                                            setNewPackage({ ...newPackage, additionalFeatures: tempAddlFeatureList });
                                    }}>
                                        <Delete style={{backgroundColor: "#F6F6F6", borderRadius: "50%", color: "red"}}/>
                                    </IconButton>
                                </div>
                            )
                        })
                    }

                    <div className={classes.spacerSmall} />

                    <div style={{display: "flex"}}>
                        <FormControl fullWidth>
                            <TextField
                                className={classes.input}
                                size="small" 
                                placeholder="Package Inventory list"
                                value={tempAddlFeature}
                                label="Package inventory list"
                                onChange={(e)=>{
                                    setTempAddlFeature(e.target.value);
                                }}
                           />
                        </FormControl>
                        
                        <IconButton
                            onClick={()=>{
                                if(tempAddlFeature!= "") {                                    
                                    let tempAddlFeatureList = new Array();
                                    tempAddlFeatureList = newPackage.additionalFeatures;
                                    tempAddlFeatureList.push(tempAddlFeature);
                                    setNewPackage({ ...newPackage, additionalFeatures: tempAddlFeatureList });
                                    setTempAddlFeature("");
                                }
                        }}>
                            <Add style={{backgroundColor: "#24459c", borderRadius: "50%", color: "white"}}/>
                        </IconButton>

                    </div>


                    <div className={classes.spacerSmall} />    
                    <div className={classes.spacerSmall} />
                    <div className={classes.buttonHolder}>
                        <div className={classes.cancelButton} onClick={()=>{setModalOpen(false);}}>Cancel</div>
                        <div className={classes.spacerSmall} />
                        <div className={classes.saveButton}  onClick={()=>{createPackage();}} >Save</div>
                    </div>

                </Container>

            </Modal>

            <div className={classes.holder}>
            
                <div className={classes.topHolder}>
                        <div>
                            <div className={classes.title}>Packages</div>
                        </div>

                        <div className={classes.buttonHolder}>
                            <Button style={{backgroundColor: "#24459c", color: "white"}} onClick={()=>{setModalOpen(true);}}>Create New Package</Button>
                        </div>

                        <div className={classes.smallMenuHolder}>
                            <IconButton onClick={handleClick}><MoreVert /></IconButton>

                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={openEl}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    onClick={() => {
                                        setModalOpen(true);
                                        handleClose();
                                    }}
                                >
                                    <Add style={{ color: "#313E6A" }} />
                                    <div className={classes.spacerSmall} />
                                    Create New Package
                                </MenuItem>
                                
                            </StyledMenu>


                        </div>

                </div>
                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>

        
                <div className={classes.tableHolder}>

                    <div style={{display: "flex"}}>
                        <div className={monthlyPackageSelected ? classes.selectedPackage : classes.unselectedPackage}
                            onClick={()=>{
                                setMonthlyPackageSelected(true);
                                setYearlyPackageSelected(false);
                                setPayAsUsagePackageSelected(false);
                            }}>Monthly Packages</div>
                        
                        <div className={yearlyPackageSelected ? classes.selectedPackage : classes.unselectedPackage}
                            onClick={()=>{
                                setMonthlyPackageSelected(false);
                                setYearlyPackageSelected(true);
                                setPayAsUsagePackageSelected(false);
                            }}>Yearly Packages</div>

                        <div className={payAsUsagePackageSelected ? classes.selectedPackage : classes.unselectedPackage}
                            onClick={()=>{
                                setMonthlyPackageSelected(false);
                                setYearlyPackageSelected(false);
                                setPayAsUsagePackageSelected(true);
                            }}>Pay as you go</div>
                    </div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                    
                    {
                        monthlyPackageSelected ? displayMonthlyPackages()
                            : yearlyPackageSelected ? displayYearlyPackages ()
                            : payAsUsagePackageSelected ? displayPayAsUsagePackages()
                            : monthlyPackageSelected()
                    }
                </div>

            </div>

        </>

    );
}

export default PackagesScreen;



const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette,
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
        },
    },
}));


const PackageTab = (props) => {

    const classes = useStyle();

    const [featureList, setFeatureList] = useState([]);

    const [editPackage, setEditPackage] = useState(
        {
            planType: '',
            headerTitle: '',
            packageTitle: '',
            price: '',
            numOfSensor: 1,
            moduleApplicable: '',
            additionalFeatures: []
        }
    );

    useEffect(() => {
        createFeatureList();
    }, [])

    function createFeatureList () {

        var features = new Array();

        var numOfMachineText = "The number of machine: 01";
        features.push(numOfMachineText);

        var numOfSensor = "The number of sensor modules: " + props.package.numOfSensor;
        features.push(numOfSensor);

        var applicableForModule = "Only applicable for Sensor " + props.package.moduleApplicable;
        features.push(applicableForModule);
    
        props.package.additionalFeatures.map((e) => {
            features.push(e)
        });

        setFeatureList(features);
    }

    return <Grid item xs={6} sm={4} md={3} lg={3}>
        <div className={classes.packageContainer}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                <IconButton>
                    <Delete style={{color: "transparent"}}/>
                </IconButton>
                <div style={{color: "#090A0A", fontSize: "12px", fontWeight: "400"}}>{props.package.headerTitle}</div>
                <IconButton>
                    <Delete style={{color: "red"}}/>
                </IconButton>
            </div>
            <div className={classes.spacerSmall} />
            <div style={{color: "#090A0A", fontSize: "18px", fontWeight: "700"}}>{props.package.packageTitle}</div>
            <div className={classes.spacerSmall} />
            <div style={{color: "#090A0A", fontSize: "40px", fontWeight: "700"}}>{ "\xA5 " + props.package.price}</div>
            <div className={classes.spacerSmall} />

            <li>
                {
                    featureList.map((e) => {
                        return <ul style={{display: "list-item"}}>{e}</ul>;
                    })
                }
            </li>
            <div className={classes.spacerSmall} />

            <div className={classes.editButton}>
                Edit
            </div>
        </div>
    </Grid>;
}