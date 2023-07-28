import { Close } from "@mui/icons-material";
import { Container, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";

const useStyle = makeStyles ((theme) => ({
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
    smallMenuHolder: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    tableHolder: {
        width: "100%",
        backgroundColor: "white"
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
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vw",
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

    pendingStatusContainer: {
        color: "#FFA503",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        border: "1px solid #FFA503",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    ongoingStatusContainer: {
        color: "#26C1C9",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        border: "1px solid #26C1C9",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    acceptedStatusContainer: {
        color: "#2FD573",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        border: "1px solid #2FD573",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    completedStatusContainer: {
        color: "white",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2FD573",
        border: "1px solid #2FD573",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    canceledStatusContainer: {
        color: "#ff5848",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        border: "1px solid #ff5848",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    activeIssueListContainer: {
        color: "#7FC008",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F3FAE7",
        borderRadius: "15px",
        padding: "4px 16px",
        cursor: "pointer"
    },
    inactiveIssueListContainer: {
        color: "#BFBFBF",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6E6E6",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    assignVendorContainer: {
        color: "#24459c",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9E3F1",
        borderRadius: "15px",
        padding: "4px 16px",
        cursor: "pointer"
    },
    vendorContainer: {
        color: "#14B8A6",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFF9F8",
        borderRadius: "15px",
        padding: "4px 16px"
    },
    canceledContainer: {
        color: "#BFBFBF",
        fontSize: "10px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6E6E6",
        borderRadius: "15px",
        padding: "4px 16px"
    },
}));


const AllReservation = () => {

    const classes = useStyle();

    return (
        <div className={classes.holder}>

            <div className={classes.topHolder}>
                <div>
                    <div className={classes.title}>Reservation</div>
                    <div className={classes.spacerSmall}></div>
                    <div style={{display: "flex"}}> 
                        <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Reservation / </div>
                        <div style={{color: "#24459c"}} className={classes.subtitle}>All Reservation</div>                            </div>
                    </div>
            </div>
            <div className={classes.spacerSmall}></div>
            <div className={classes.spacerSmall}></div>

            <div className={classes.tableHolder}>
                <ReservationTable />
            </div>

        </div>
    );
}

export default AllReservation;


class ReservationTable extends Component  {


    state ={
        rows: [],
    }

    componentDidMount() {
        this.getReservation();
    }

    
    getReservation() {
        fetch('https://api.showaapp.com/admin/reservation/get-all-reservation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {

                var tempRows = new Array();
                data.map((reservation, index) => (
                    // addNewItem(request, index)
                    tempRows.push({ id: index, name: reservation.uid, request_id: reservation._id, status: reservation.status, machine_status: 'machine status', schedule: reservation.reservationSchedule, svc_type: reservation.washingMachineId, location: reservation.washingMachineId, issues: reservation, assign: reservation})
                ));
                this.setState({rows: tempRows});

            });
    }


    displayReservation () {

        if (this.state.rows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No reservation in the server</h3>
            </div>;
        
        return (
            <DataGrid
                rows={this.state.rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                  }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                checkboxSelection
            />
        );

    };

    render () {
        return <div style={{ overflow: "auto" }}>
            {this.displayReservation()}
        </div>;
    };


}


const columns = [
    {
        field: 'name',
        headerName: 'CUSTOMER NAME',
        flex: 1,
        renderCell: (props) => CustomerComponent(props),
    },
    {
        field: 'request_id',
        headerName: 'REQUEST ID',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'STATUS',
        flex: 1,
        renderCell: (props) => StatusComponent(props),
    },
    {
        field: 'machine_status',
        headerName: 'MACHINE STATUS',
        flex: 1,
    },
    {
        field: 'schedule',
        headerName: 'SCHEDULE',
        flex: 1,
    },
    {
        field: 'svc_type',
        headerName: 'SERVICE TYPE',
        flex: 1,
        renderCell: (props) => ServiceTypeComponent(props),
    },
    {
        field: 'location',
        headerName: "LOCATION",
        flex: 1,
        renderCell: (props) => LocationComponent(props),
    },
    {
        field: 'issues',
        headerName: "Issues",
        flex: 1,
        renderCell: (props) => IssueListComponent(props),
    },
    {
        field: 'assign',
        headerName: "Assign",
        flex: 1,
        renderCell: (props) => AssignVendorComponent(props),
    }
];


const CustomerComponent = (props) => {

    const [uid, setUid] = useState("");
    const [customer, setCustomer] = useState(null);

    const classes = useStyle();

    useEffect(() => {
        setUid(props.value);
        getCustomerInfo();
    }, [])


    function getCustomerInfo () {
        let url = "https://api.showaapp.com/admin/wallet/find-user-with-id/" + props.value;
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

    function displayCustomer () {
        if (customer == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;
        return <div>
            <div style={{fontSize: "12px", fontWeight: "500", color: "#25213B"}}>{customer.lastNameAlphabet + ', ' + customer.firstNameAlphabet}</div>
            <div style={{fontSize: "12px", fontWeight: "400", color: "#6E6893"}}>{customer.phone}</div>
        </div>;
    };
    

    return (
        <div style={{display: "flex"}}>
            {displayCustomer()}
        </div>
    );

}

const StatusComponent = (props) => {

    const [status, setStatus] = useState("");

    useEffect(() => {
        setStatus(props.value);
    })

    const classes = useStyle();

    return (
        <div 
            className={status == "Pending" ? classes.pendingStatusContainer 
            : status == "Ongoing" ? classes.ongoingStatusContainer 
            : status == "Accepted" ? classes.acceptedStatusContainer 
            : status == "Completed" ? classes.completedStatusContainer 
            : status == "Canceled" ? classes.canceledStatusContainer 
            : classes.pendingStatusContainer}
        > {status} </div>
    );

}

const ServiceTypeComponent = (props) => {

    const [wid, setWid] = useState("");
    const [washingMachine, setWashingMachine] = useState(null);

    useEffect(() => {
        setWid(props.value);
        getWashingMachineInfo();
    }, [])


    function getWashingMachineInfo () {
        let url = "https://api.showaapp.com/admin/reservation/get-washing-machine/" + props.value;
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

    function displayWashingMachineType () {
        if (washingMachine == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;
        return <div style={{fontSize: "10px", fontWeight: "500", color: "#24459C"}}>
            {washingMachine.typeOfWashingMachine}
        </div>;
    };
    

    return (
        <div style={{display: "flex"}}>
            {displayWashingMachineType()}
        </div>
    );

}

const LocationComponent = (props) => {

    const [wid, setWid] =useState("");
    const [washingMachine, setWashingMachine] = useState(null);


    useEffect(() => {
        setWid(props.value);
        getWashingMachineInfo();
    }, [])


    function getWashingMachineInfo () {
        let url = "https://api.showaapp.com/admin/reservation/get-washing-machine/" + props.value;
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

    function displayWashingMachineAddress () {
        if (washingMachine == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;
        return <div style={{fontSize: "10px", fontWeight: "500", color: "#24459C"}}>
            {washingMachine.address}
        </div>;
    };
    

    return (
        <div style={{display: "flex"}}>
            {displayWashingMachineAddress()}
        </div>
    );

}

const issueColumns = [
    {
        field: 'issues',
        headerName: 'ISSUES',
        flex: 1,
    }
];

const IssueListComponent = (props) => {

    const [status, setStatus] = useState("");
    const [problemList, setProblemList] = useState([]);

    const [issueOpen, setIssueOpen] = useState(false);
    const [issueRow, setIssueRow] = useState([]);

    useEffect(() => {
        setStatus(props.value.status);
        setProblemList(props.value.problems);
        // if(reservation != null) {
        //     reservation.problems.map((e, index)=>{
        //         issueRow.push({ id: index, issues: e});
        //     })
        // }
        problemList.map((e, index)=> {
            addNewItem(index, e);
        })
    })


    function addNewItem (e, index) {
        const rows = issueRow;
        rows.push({ id: index, issues: e});
        setIssueRow(rows);
    };

    const classes = useStyle();

    const displayIssues = () => {

        if (issueRow.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No issue is listed in the server</h3>
            </div>;
        
        return (
            <DataGrid
                rows={issueRow}
                columns={issueColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight
            />
        );

    };
    

    return (
        <>
            <Modal open={issueOpen}>
                <Container className={classes.addUserContainer}>
                
                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ color: "white"}} ><Close /></div>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Issue List</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setIssueOpen(false); }}><Close /></div>
                    </div>

                    <div>
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                    </div>

                    {
                        displayIssues()
                    }

                </Container>
            </Modal>
            <div 
                onClick={()=>{
                    if(status == "Pending") {
                        setIssueOpen(true);
                    }
                }}
                className={status == "Pending" ? classes.activeIssueListContainer 
                : classes.inactiveIssueListContainer}
            > View Issue List </div>
        </>
    );

}

const AssignVendorComponent = (props) => {

    const [reservation, setReservation] = useState(null);
    const [vendor, setVendor] = useState(null);

    useEffect(() => {
        setReservation(props.value);
        getVendor();
    })

    function getVendor () {
        if(reservation!=null) {
            if(reservation.status == "Assigned" || reservation.status == "Completed" || reservation.status == "Ongoing") {
                let url = "https://api.showaapp.com/admin/vendor/get-vendor-machine-with-id/" + reservation.assignedVendorId;
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setVendor(data);
                });
            }
        }
    }


    // const addNewItem = (e, index) => {
    //     let { rows } = issueRow;
    //     rows.push({ id: index, issues: e});
    //     // setIssueRow(rows);
    // };

    const classes = useStyle();

    const displayVendorInfo = () => {

        if(reservation == null) {
            return <div>Please Wait</div>
        }

        return (
            <div className={ reservation.status == "Pending" ? classes.assignVendorContainer 
                : reservation.status == "Canceled" ? classes.canceledContainer 
                : classes.vendorContainer }
            >
                { reservation.status == "Pending" ? "Assign Vendor" 
                : reservation.status == "Canceled" ? "Assign Vendor" 
                : vendor==null ? "Please Wait" : vendor.shopCompanyName }
            </div>
        );

    };
    

    return (
        <>
            <div>{displayVendorInfo()}</div>
        </>
    );

}