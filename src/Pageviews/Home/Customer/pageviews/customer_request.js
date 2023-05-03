import { Delete, Edit, MoreVert, Settings } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme)=>({
    holder: {
        padding: theme.spacing(2),
    },
    vendorImageHolder: {
        borderRadius: "50%",
        overflow: "hidden",
        width: "30px",
        height: "30px",
    },
    vendorImage: {
        width: "100%",
    },
    spacer: {
        height: "10px",
        width: "10px"
    },
    pendingStatusHolder: {
        padding: "4px 10px",
        borderRadius: "25px",
        color: "white",
        backgroundColor: "#2196F3",
        fontSize: "14px",
        fontWeight: "500",
    },
    completedStatusHolder: {
        padding: "4px 10px",
        borderRadius: "25px",
        color: "white",
        backgroundColor: "#14B8A6",
        fontSize: "14px",
        fontWeight: "500",
    },
    canceledStatusHolder: {
        padding: "4px 10px",
        borderRadius: "25px",
        color: "white",
        backgroundColor: "#FFB020",
        fontSize: "14px",
        fontWeight: "500",
    }
}))

const CustomerRequest = (props) => {

    const classes = useStyle();
    const currentUid = useSelector((state) => state.changeCustomerId);

    return (
        <div className={classes.holder}>
            {
                <RequestTable 
                    uid={currentUid}
                />
            }
        </div>
    );
}

export default CustomerRequest;


const columns = [
    {
        field: 'requestId',
        headerName: 'REQUEST ID',
        flex: 1,
    },
    {
        field: 'when',
        headerName: 'WHEN',
        flex: 1,
        renderCell: (props) => WhenComponent(props),
    },
    {
        field: 'machineModel',
        headerName: 'MACHINE MODEL',
        flex: 1,
        renderCell: (props) => MachineModelComponent(props),
    },
    {
        field: 'vendor',
        headerName: 'VENDOR',
        flex: 1,
        renderCell: (props) => VendorComponent(props),
    },
    {
        field: 'status',
        headerName: 'STATUS',
        flex: 1,
        renderCell: (props) => StatusComponent(props),
    },
    {
        field: 'action',
        headerName: "ACTION",
        renderCell: (props) => ActionsComponent(props),
    }
];


const RequestTable = (props) => {

    const [rows, setRows] = useState([]);
    const [customerId, setCustomerId] = useState("");

    useEffect(() => {
        setCustomerId(props.uid);
        getReservationRequest();
    })
    
    function getReservationRequest() {

        if(customerId != "") {
            fetch('http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/customer/get-reservation-request-with-uid/' + customerId, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    var tempRows = new Array();
                    data.map((request, index) => (
                        // addNewItem(request, index)
                        tempRows.push({ id: index, requestId: request._id, when: request, machineModel: request.washingMachineId, vendor: request.vendorId, status: request.status, action: request})
                    ));
                    setRows(tempRows);
                });
        }

    }

    // function addNewItem (request, index) {
    //     let { tempRows } = rows;
    //     setRows(tempRows);
    // };

    function displayReservationRequest () {

        if (rows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No request is created by this user</h3>
            </div>;
        
        return (
            <DataGrid
                rows={rows}
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

    return (
        <div style={{ overflow: "auto" }}>
            {displayReservationRequest()}
        </div>
    );
}


const WhenComponent = (props) => {
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "center"}}>
            <div style={{color: "#5A6872", fontSize: "14px", fontWeight: "600"}}>{props.value.date}</div>
            <div style={{color: "#5A6872", fontSize: "14px", fontWeight: "600"}}>{props.value.time}</div>
        </div>
    );
}


const MachineModelComponent = (props) => {
    
    const [washingMachineId, setWashingMachineId] = useState("");
    const [washingMachine, setWashingMachine] = useState(null);

    useEffect(() => {
        setWashingMachineId(props.value);
        getWashingMachine();
    })


    function getWashingMachine () {
        if(washingMachineId!=""){
            let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/customer/get-washing-machine-with-id/" + washingMachineId;
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

        if(washingMachineId == "") {
            return <div></div>;
        } else {

            if (washingMachine == null)
                return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>Please Wait</h3>
                </div>;

            return <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{color: "#5A6872", fontSize: "14", fontWeight: "600"}}> {washingMachine.model}</div>
                <div style={{color: "#5A6872", fontSize: "14", fontWeight: "600"}}> {washingMachine.brand}</div>
            </div>;
        }

    };
    

    return (
        <div style={{display: "flex"}}>
            {displayWashingMachine()}
        </div>
    );
}


const VendorComponent = (props) => {

    const [vendorId, setVendorId] = useState("");
    const [vendor, setVendor] = useState(null);

    const classes = useStyle();

    useEffect(() => {
        setVendorId(props.value);
        getVendor();
    })


    function getVendor () {
        if(vendorId!=""){
            let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/vendor/get-vendor-machine-with-id/" + vendorId;
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


    function displayVendor () {

        if(vendorId == "") {
            return <div style={{color: "#5A6872", fontSize: "14px", fontWeight: "600"}}>Not Yet</div>;
        } else {

            if (vendor == null)
                return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>Please Wait</h3>
                </div>;

            return <div style={{display: "flex", alignItems: "center"}}>
                <div className={classes.vendorImageHolder}>
                    <img src={vendor.photoAddress} className={classes.vendorImage} />
                </div>
                <div className={classes.spacer} />
                <div>
                    <div style={{color: "#5A6872", fontSize: "14px", fontWeight: "600"}}>
                        {vendor.lastNameAlphabet + ', ' + vendor.firstNameAlphabet}
                    </div>
                    <div style={{color: "#5A6872", fontSize: "12px", fontWeight: "400"}}>
                        {vendor.shopCompanyName}
                    </div>
                </div>
            </div>;
        }

    };
    

    return (
        <div style={{display: "flex"}}>
            {displayVendor()}
        </div>
    );
}


const StatusComponent = (props) => {

    const classes = useStyle();

    return (
        <div className={props.value === "Completed" ? classes.completedStatusHolder : props.value === "Canceled" ? classes.canceledStatusHolder : props.value === "Pending" ? classes.pendingStatusHolder : classes.pendingStatusHolder}>
            {props.value}
        </div>
    );
}


const ActionsComponent = (props) => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyle();
    
    return <>

        <div>

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
                        handleClose();
                }}>
                    <Edit style={{ color: "#313E6A" }} />
                    <div className={classes.spacer} />
                    Edit
                </MenuItem>

                {
                    props.value.vendorId == "" && <MenuItem
                        onClick={() => {
                            handleClose();
                    }}>
                        <Settings style={{ color: "#313E6A" }} />
                        <div className={classes.spacer} />
                        Assign Vendor
                    </MenuItem>
                }

                <MenuItem
                    onClick={() => {
                        handleClose();
                }}>
                    <Delete style={{ color: "red" }} />
                    <div className={classes.spacer} />
                    Delete
                </MenuItem>
            </StyledMenu>

        </div>
    </>;
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

