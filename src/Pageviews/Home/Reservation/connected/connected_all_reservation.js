
import { Close, Group, MoreVert, Person } from "@mui/icons-material";
import { Container, IconButton, Menu, MenuItem, Modal, Snackbar, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Component, Fragment, useEffect } from "react";
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
    },
    buttonHolder: {
        display: "flex",
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

    pendingContainer: {
        border: "1px solid #FFA503",
        borderRadius: "25px",
        backgroundColor: "white",
        padding: "8px 16px",
        color: "#FFA503",
        fontSize: "10px",
        fontWeight: "bolder"
    },

    ongoingContainer: {
        border: "1px solid #71C9FF",
        borderRadius: "25px",
        backgroundColor: "white",
        padding: "8px 16px",
        color: "#26C1C9",
        fontSize: "10px",
        fontWeight: "bolder"
    },

    acceptedContainer: {
        border: "1px solid #2FD573",
        borderRadius: "25px",
        backgroundColor: "white",
        padding: "8px 16px",
        color: "#2FD573",
        fontSize: "10px",
        fontWeight: "bolder"
    },

    cenceledContainer: {
        border: "1px solid #FF4858", 
        borderRadius: "25px",
        backgroundColor: "white",
        padding: "8px 16px",
        color: "#FF4858",
        fontSize: "10px",
        fontWeight: "bolder"
    },

    completedContainer: {
        border: "1px solid #2FD573", 
        borderRadius: "25px",
        backgroundColor: "#2FD573",
        padding: "8px 16px",
        color: "white",
        fontSize: "10px",
        fontWeight: "bolder"
    },
    
    addUserContainer: {
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
        borderRadius: "15px",
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
    }


}));


const ConnectedAllReservation = () => {

    const classes = useStyle();


    return (
        <div className={classes.holder}>

                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Reservation</div>
                        <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Reservation/ Sensor Connected/ </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>All Reservation Request</div>
                        </div>
                    </div>

                </div>

                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>

                <div className={classes.tableHolder}>
                    <AllReservationTable />
                </div>

        </div>
    );
}

export default ConnectedAllReservation;


const columns = [
    {
        field: 'customer_name',
        headerName: 'CUSTOMER NAME',
        renderCell: (props) => CustomerNamePhoneComponent(props),
        flex: 1,
    },
    {
        field: 'reservation_id',
        headerName: 'REQUEST ID',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'STATUS',
        renderCell: (props) => StatusComponent(props),
        flex: 1,
    },
    {
        field: 'schedule',
        headerName: 'SCHEDULE',
        flex: 1,
    },
    {
        field: 'service_type',
        headerName: "SERVICE TYPE",
        renderCell: (props) => ServiceTypeComponent(props),
        flex: 1,
    },
    {
        field: 'location',
        headerName: "LOCATION",
        renderCell: (props) => LocationComponent(props),
        flex: 1,
    },
    {
        field: 'issues',
        headerName: "ISSUES",
        renderCell: (props) => IssuesComponent(props),
        flex: 1,
    },
    {
        field: 'assign',
        headerName: "ASSIGN",
        renderCell: (props) => AssignVendorComponent(props),
        flex: 1,
    },
    {
        field: 'action',
        headerName: "ACTION",
        renderCell: (props) => ActionComponent(props),
    }
];


class AllReservationTable extends Component {
    state = {
        allReservationRows : [],
    };

    componentDidMount = () => {
        this.getAllConnectedResrvtaion();
    }
    
    getAllConnectedResrvtaion() {
        fetch('https://api.showaapp.com/admin/reservation/get-all-reservation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.map((reservation, index) => (
                    this.addNewItem(reservation, index)
                ));
            });
    }

    addNewItem = (reservation, index) => {
        let { allReservationRows } = this.state;
        allReservationRows.push({ id: index, customer_name: reservation.uid, reservation_id: reservation._id, status: reservation.status, schedule: reservation.reservationSchedule, service_type: reservation.washingMachineId, location: reservation.washingMachineId, invoice: reservation, issues: reservation, assign: reservation, action: reservation});
        this.setState({allReservationRows: allReservationRows});
    };


    displayReservations() {

        if (this.state.allReservationRows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No reservations in the server</h3>
            </div>;
        
        return (
            <DataGrid
                rows={this.state.allReservationRows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                autoHeight
                checkboxSelection
            />
        );

    };


    render () {
        return <div style={{ overflow: "auto" }}>
            {this.displayReservations()}
        </div>;
    };


}


const CustomerNamePhoneComponent = (props) => {

    const [customer, setCustomer] = useState(null);
    
    const classes = useStyle();

    useEffect(() => {
        getCustomer(props.value);
    },[])


    function getCustomer (uid) {
        if(uid!="") {
            let url = "https://api.showaapp.com/admin/wallet/find-user-with-id/" + uid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setCustomer(data);
            });
        }
    }

    function displayCustomer () {
        if (customer == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div className={classes.customerInfoHolder}>
            <div className={classes.customerName}>{customer.firstNameAlphabet + " " + customer.lastNameAlphabet}</div>
            <div className={classes.customerEmail}>{customer.phone}</div>
        </div>;
    };


    return <div>
        {displayCustomer()}
    </div>


}

const StatusComponent = (props) => {
    
    const classes = useStyle();

    return <div className={props.value == "Pending" ? classes.pendingContainer : props.value == "Ongoing" ? classes.ongoingContainer : props.value == "Accepted" ? classes.acceptedContainer : props.value == "Canceled" ? classes.cenceledContainer : props.value == "Completed" ? classes.completedContainer : classes.pendingContainer}>
        {props.value}
    </div>
}


const ServiceTypeComponent = (props) => {

    const [washingMachine, setWashingMachine] = useState(null);

    useEffect(()=>{
        getWashingMachine(props.value);
    }, [])

    function getWashingMachine (wid) {
        if(wid!="") {
            let url = "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setWashingMachine(data);
            });
        }
    }

    function displayWashingMachine () {
        if (washingMachine == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div style={{color: "#24459C", fontSize: "10px"}}>
            {washingMachine.typeOfWashingMachine}
        </div>;
    };


    return <div>
        {displayWashingMachine()}
    </div>


}

const LocationComponent = (props) => {

    const [washingMachine, setWashingMachine] = useState(null);
    const [showLocationModal, setShowLocationModal] = useState(false);

    const classes = useStyle();
    
    useEffect(() => {
        getWashingMachine(props.value);
    }, [])


    function getWashingMachine (wid) {
        if(wid!="") {
            let url = "https://api.showaapp.com/admin/reservation/get-washing-machine/" + wid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setWashingMachine(data);
            });
        }
    }

    function displayLocation () {
        if (washingMachine == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div 
            style={{color: "#24459C", backgroundColor: "#DEE5F7", cursor: "pointer", padding: "8px 16px", borderRadius: "25px", fontSize: "10px"}} 
            onClick={(e)=>{
                setShowLocationModal(true);
            }}
        >
            View Location
        </div>;
    };



    return <div>
        <Modal open={showLocationModal}>
            <Container className={classes.addUserContainer}>



            </Container>
        </Modal>
        {displayLocation()}
    </div>

}

const issueColumns = [
    {
        field: 'id',
        headerName: 'Ser',
    },{
        field: 'issue',
        headerName: 'Issue',
        flex: 1,
    },
];


const IssuesComponent = (props) => {

    const classes = useStyle();

    const [issueModal, setIssueModal] = useState(false);

    const [issueRows, setIssueRows] = useState([]);
    
    useEffect(() => {
        var tempRows = new Array();
        props.value.problems.map((issue, index) => (
            tempRows.push({ id: index + 1, issue: issue})
        ));
        setIssueRows(tempRows);
    }, [])

    function displayPhotos () {

        if (props.value.imageAddresses.length === 0) {
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No issues listed in the server</h3>
            </div>;
        } else {
            return <div style={{backgroundColor: "#F6F6F6", borderRadius: "10px", padding: "16px"}}>
                <div style={{color: "#C7CCD8", fontSize: "12px"}}>Attachments</div>
                <div className={classes.spacerSmall} />
                <div className={classes.spacerSmall} />
                
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridRowGap: "10px", gridColumnGap: "10px"}}>

                    {
                        props.value.imageAddresses.map((imageAddress, index)=>{
                            return <div style={{width: "200px", height: "200px"}}>
                                <img style={{width: "100%", height: "100%", objectFit: "contain"}} src={imageAddress} />
                            </div>
                        })
                    }

                </div>

            </div>;
        }
        
    };

    function displayIssues () {

        if (issueRows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No issues listed in the server</h3>
            </div>;
        
        return (
            <>
                <DataGrid
                    rows={issueRows}
                    columns={issueColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    autoHeight
                />
            </>
        );

    };


    return <div>

        <Modal open={issueModal}>
            <Container className={classes.addUserContainer}>
    
                <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ color: "white" }} ><Close /></div>
                    <Typography style={{ fontSize: "24px", fontWeight: "700", color: "#24459c" }}>Issue List</Typography>
                    <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setIssueModal(false); }}><Close /></div>
                </div>

                <div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                </div>

                <div style={{ overflow: "auto" }}>
                    {displayIssues()}
                </div>

                <div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />
                </div>

                <div style={{ overflow: "auto" }}>
                    {displayPhotos()}
                </div>

                <div className={classes.spacerSmall} />
                <div className={classes.spacerSmall} />

            </Container>
        </Modal>

        <div style={{backgroundColor: "#F3FAE7", color: "#7FC008", fontSize: "10px", fontWeight: "bolder", padding: "8px 16px", borderRadius: "25px", cursor: "pointer"}} onClick={()=>{setIssueModal(true);}}>
            View Issue List
        </div>
    </div>

}


const vendorColumns = [
    {
        field: 'id',
        headerName: 'Ser',
    },
    {
        field: 'vendor_name',
        headerName: 'VENDOR NAME',
        flex: 1,
        renderCell: (props) => VendorNameComponent(props),
    },
    {
        field: 'location',
        headerName: 'LOCATION',
        flex: 1,
        renderCell: (props) => VendorLocationComponent(props),
    },
    {
        field: 'action',
        headerName: '',
        renderCell: (props) => VendorActionComponent(props),
    },
];
const VendorNameComponent = (props) => {
    return <div>
        {props.value.companyBasicInfo.companyName}
    </div>
}
const VendorLocationComponent = (props) => {

    function displayLocation () {
        return <div 
            style={{color: "#24459C", backgroundColor: "#DEE5F7", cursor: "pointer", padding: "8px 16px", fontSize: "10px", borderRadius: "25px"}} 
            onClick={(e)=>{                    
                
            }}
        >
            View Location
        </div>;
    };

    return <div>
        {displayLocation()}
    </div>

}
const VendorActionComponent = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyle();

    function assignVendor () {
        fetch('https://api.showaapp.com/admin/reservation/assign-vendor/' + props.value.reservation._id + "/" + props.value.vendor.uid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Successfully assigned vendor to this reservation");
            });
    }

    return <div>
        <IconButton onClick={handleClick}>
            <MoreVert />
        </IconButton>

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
                assignVendor();
                handleClose();
            }}>
                <Group style={{ color: "#313E6A" }} />
                <div className={classes.spacerSmall} />
                Assign Vendor
            </MenuItem>

        </StyledMenu>


    </div>;

}
const AssignVendorComponent = (props) => {

    const classes = useStyle();

    const [openVendorModal, setOpenVendorModal] = useState(false);
    const [openVendorListModal, setOpenVendorListModal] = useState(false);

    const [vendorRows, setVendorRows] = useState([]);
    const [selectedVendorRows, setSelectedVendorRows] = useState([]);

    const [vendor, setVendor] = useState(null);

    useEffect(() => {
        if(props.value.assignedVendorId == "") {
            getAllServiceProviders();
        } else {
            getServiceProviderWithId();
        }
    }, [])

    function getAllServiceProviders() {
        fetch('https://api.showaapp.com/admin/service-provider/get-all-service-provider', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {

                var tempRows = new Array();
                data.map((vendor, index) => (
                    // addNewItem(request, index)
                    tempRows.push({ id: index + 1, vendor_name: vendor, location: vendor, action: {vendor : vendor, reservation: props.value}})
                ));
                setVendorRows(tempRows);
            });
    }

    function getServiceProviderWithId() {
        fetch('https://api.showaapp.com/admin/service-provider/get-service-provider-with-id/' + props.value.assignedVendorId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setVendor(data);
                console.log(vendor);
            });
    }


    if(props.value.assignedVendorId == "") {

        function displayVendors () {

            if (vendorRows.length === 0)
                return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                    <h3>No Service Provider in the server</h3>
                </div>;
            
            return (
                <>
                    <DataGrid
                        rows={vendorRows}
                        columns={vendorColumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 5 } },
                        }}
                        pageSizeOptions={[5, 10, 25]}
                        autoHeight
                    />
                </>
            );

        };


        return <>

            <Modal open={openVendorListModal}>
    
                <Container className={classes.addUserContainer}>

                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ color: "white" }} ><Close /></div>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", color: "#24459c" }}>Assign a Vendor</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setOpenVendorListModal(false); }}><Close /></div>
                    </div>

                    <div>
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                    </div>

                    <div style={{ overflow: "auto" }}>
                        {displayVendors()}
                    </div>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    {/* <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setOpenVendorListModal(false);
                            }}
                        >
                            Cancel
                        </div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                assignVendor();
                            }}
                        >
                            Assign Vendor
                        </div>
                    </div> */}

                </Container>

            </Modal>
            <div style={{cursor: "pointer", backgroundColor: "#D9E3FF", color: "#24459c", fontSize: "10px", padding: "8px 16px", borderRadius: "25px"}} onClick={()=> {setOpenVendorListModal(true);}}>
                Assign Vendor
            </div>

        </>;

    } else {

        function displayVendor () {
            if (vendor == null)
                return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>Please Wait</h3>
                </div>;

            return <div style={{backgroundColor: "#EFF9F8", color: "#14B8A6", fontSize: "10px", padding: "8px 16px", borderRadius: "25px"}}>
                {vendor.companyBasicInfo.companyName}
            </div>;
        };
    
    
        return <div>
            {displayVendor()}
        </div>

    }

}

const ActionComponent = (props) => {
    return <div>
        <IconButton>
            <MoreVert />
        </IconButton>
    </div>;
}



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

