import { makeStyles, styled } from "@mui/styles";
import ShowaWashingMachineIcon from "../../../../../src/Assets/Home/customer/showa_washing_machine_icon.svg";
import { Close, Edit, MoreVert, ViewAgenda } from "@mui/icons-material";
import { Container, FormControl, Grid, IconButton, Menu, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { Component, useState } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

const useStyle = makeStyles((theme)=>({
    machineHolder: {
        display: "flex",
        alignItems: "center",
    },
    machineImageHolder: {
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        padding: "8px",
        boxShadow: "1px 1px 1px 1px #9E9E9E",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    statusHolder: {
        backgroundColor: "#D5EED0",
        color: "#48BD68",
        fontSize: "12px",
        fontWeight: "500",
        borderRadius: "25px",
        padding: "4px 15px"
    },
    normalIssueHolderHolder: {
        backgroundColor: "white",
        color: "#C4C4C4",
        fontSize: "12px",
        fontWeight: "400",
        borderRadius: "25px",
        padding: "4px 15px",
        border: "1px solid #14B8A6"
    },
    abnormalIssueHolderHolder: {
        backgroundColor: "white",
        color: "#F15F5F",
        fontSize: "12px",
        fontWeight: "400",
        borderRadius: "25px",
        padding: "4px 15px",
        border: "1px solid #FFB8B8"
    },
    spacer: {
        width: "10px",
        height: "10px",
    },
    modalContainer: {
        padding: theme.spacing(2),
        backgroundColor: "white",
        width: "400px",
        height: "400px",
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
    }
}));


const CustomerMachineStatus = () => {

    let uid = "";
    uid = useSelector((state) => state.changeCustomerId);

    if(uid == "" ) {
        return <div>Please wait</div>
    }

    return (
        <div style={{padding: "10px 0px"}}>
            <CustomerMachineStatusTable 
                currentUid = {uid}
            />
        </div>
    );
}

class CustomerMachineStatusTable extends Component {
    
    state = {
        rows : [],
    };
    
    constructor(props) {
        super(props);
        this.getWashingMachineWithUid(props.currentUid);
    }

    getWashingMachineWithUid = (uid) => {

        let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/customer/get-washing-machine-with-uid/" + uid;
    

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.map((washineMachine, index) => (
                    this.addNewItem(washineMachine, index)
                ));
            });
    }

    addNewItem = (washineMachine, index) => {
        let { rows } = this.state;
        rows.push({ id: index, machine: washineMachine, machineId: washineMachine._id, status: "Approved", issues: "Normal", action: washineMachine});
        this.setState({rows: rows});
    };

    displayWashingMachine = () => {

        if (this.state.rows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>This customer has not purchased any washing machine</h3>
            </div>;
        
        return (
            <DataGrid
                rows={this.state.rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight
                checkboxSelection
            />
        );

    };


    render () {
        return (
            <div style={{ overflow: "auto" }}>
                {this.displayWashingMachine()}
            </div>
        )
    };
}


const columns = [
    {
        field: 'machine',
        headerName: 'Machine',
        flex: 1,
        renderCell: (props) => MachineComponent(props),
    },
    {
        field: 'machineId',
        headerName: 'Machine ID',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        renderCell: (props) => StatusComponent(props),
    },
    {
        field: 'issues',
        headerName: 'Issues',
        flex: 1,
        renderCell: (props) => IssuesComponent(props),
    },
    {
        field: 'action',
        headerName: "Action",
        flex: 1,
        renderCell: (props) => ActionsComponent(props),
    }
];


const MachineComponent = (props) => {

    const classes = useStyle();

    return (
        <div className={classes.machineHolder}>
            <div className={classes.machineImageHolder}>
                <img src={ShowaWashingMachineIcon} />
            </div>
            <div className={classes.spacer} />
            <div>
                <div style={{color: "#3A3A3A", fontWeight: "600", fontSize: "16px"}}>
                    {props.value.brand}
                </div>
                <div style={{color: "#272833", fontWeight: "400", fontSize: "14px"}}>
                    {props.value.model}
                </div>
            </div>
        </div>
    );

}


const StatusComponent = (props) => {

    const classes = useStyle();

    return (
        <div className={classes.statusHolder}>
            {props.value}
        </div>
    );

}

const IssuesComponent = (props) => {

    const classes = useStyle();

    return (
        <div className={props.value==="Normal" ? classes.normalIssueHolderHolder : classes.abnormalIssueHolder}>
            {props.value}
        </div>
    );

}

const ActionsComponent = (props) => {

    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [editOpen, setEditOpen] = useState(false);
    const [editWashingMachine, setEditWashingMachine] = useState(
        {
            shopCompanyName: '',
            address: '',
            typeOfShop: '',
            typeOfWashingMachine: '',
            brand: '',
            model: '',
            washingMachineId: ''
        }
    );

    const handleEditSubmit = () => {
        if(editWashingMachine.address===""){
            alert("Please provide address of shop to continue");
            return;
        }
        if(editWashingMachine.shopCompanyName===""){
            alert("Please provide the name of shop to continue");
            return;
        }
        if(editWashingMachine.model===""){
            alert("Please provide the model of the washing machine to continue");
            return;
        }
        
        let shopCompanyName = editWashingMachine.shopCompanyName;
        let address = editWashingMachine.address;
        let typeOfShop = editWashingMachine.typeOfShop;
        let typeOfWashingMachine = editWashingMachine.typeOfWashingMachine;
        let brand = editWashingMachine.brand;
        let model = editWashingMachine.model;
        let washingMachineId = editWashingMachine.washingMachineId;

        fetch('http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/customer/edit-washing-machine-with-id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shopCompanyName, address, typeOfShop, typeOfWashingMachine, brand, model, washingMachineId
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setEditOpen(false);
                alert("Successfully edited the washing machine data");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }


    return (
        <>

            <Modal open={editOpen}>
                <Container className={classes.modalContainer}>

                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Update Washing Machine</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setEditOpen(false); }}><Close /></div>
                    </div>

                    <div>
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                    </div>

                    <div>

                        <FormControl fullWidth>
                            <TextField
                                className={classes.input}
                                size="small" 
                                placeholder="Shop Name"
                                label="Shop Name"
                                value={editWashingMachine.shopCompanyName}
                                onChange={(e)=>{setEditWashingMachine({ ...editWashingMachine, shopCompanyName: e.target.value })}}
                            />
                        </FormControl>
                        <div className={classes.spacer} />

                        <FormControl fullWidth>
                            <TextField
                                className={classes.input}
                                size="small" 
                                label="Shop Address"
                                value={editWashingMachine.address}
                                placeholder="Shop Address"
                                onChange={(e)=>{setEditWashingMachine({ ...editWashingMachine, address: e.target.value })}}
                            />
                        </FormControl>
                        <div className={classes.spacer} />

                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        select
                                        id="demo-simple-select"
                                        value={editWashingMachine.typeOfShop}
                                        label="Type of shop"
                                        size="small"
                                        onChange={(e)=>{setEditWashingMachine({ ...editWashingMachine, typeOfShop: e.target.value })}}
                                    >
                                        <MenuItem value="Department Stores">Department Stores</MenuItem>
                                        <MenuItem value="Laundry Shop">Laundry Shop</MenuItem>
                                        <MenuItem value="Electronics Stores">Electronics Stores</MenuItem>
                                        <MenuItem value="Shopping Malls">Shopping Malls</MenuItem>
                                        <MenuItem value="Outlet Shopping">Outlet Shopping</MenuItem>
                                        <MenuItem value="Shopping Arcades">Shopping Arcades</MenuItem>
                                        <MenuItem value="Markets">Markets</MenuItem>
                                        <MenuItem value="Convenience Stores">Convenience Stores</MenuItem>
                                        <MenuItem value="100 Yen Shops">100 Yen Shops</MenuItem>
                                        <MenuItem value="Airport Shopping">Airport Shopping</MenuItem>
                                    </TextField>
                                </FormControl>

                            </Grid>

                            
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        select
                                        id="demo-simple-select"
                                        value={editWashingMachine.typeOfWashingMachine}
                                        label="Select type of washing machine"
                                        size="small"
                                        onChange={(e)=>{setEditWashingMachine({ ...editWashingMachine, typeOfWashingMachine: e.target.value })}}
                                    >
                                        <MenuItem value="Dish Washing Machine">Dish Washing Machine</MenuItem>
                                        <MenuItem value="Pallet Washing Machine">Pallet Washing Machine</MenuItem>
                                        <MenuItem value="Container Washing Machine">Container Washing Machine</MenuItem>
                                    </TextField>
                                </FormControl>

                            </Grid>

                        </Grid>
                        <div className={classes.spacer} />

                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        select
                                        id="demo-simple-select"
                                        value={editWashingMachine.brand}
                                        label="Select Brand"
                                        size="small"
                                        onChange={(e)=>{setEditWashingMachine({ ...editWashingMachine, brand: e.target.value })}}
                                    >
                                        <MenuItem value="Showa">Showa</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </TextField>
                                </FormControl>

                            </Grid>

                            
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <FormControl fullWidth>
                                    <TextField
                                        className={classes.input}
                                        size="small" 
                                        label="Model"
                                        value={editWashingMachine.model}
                                        placeholder="Model"
                                        onChange={(e)=>{setEditWashingMachine({ ...editWashingMachine, model: e.target.value })}}
                                    />
                                </FormControl>

                            </Grid>

                        </Grid>
                        <div className={classes.spacer} />

                    </div>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setEditOpen(false);
                            }}
                        >
                            Cancel
                        </div>
                        <div className={classes.spacer} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                console.log(editWashingMachine);
                                handleEditSubmit();
                            }}
                        >
                            Save
                        </div>
                    </div>


                </Container>
            </Modal>
            
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
                            setEditWashingMachine({
                                shopCompanyName: props.value.shopCompanyName,
                                address: props.value.address,
                                typeOfShop: props.value.typeOfShop,
                                typeOfWashingMachine: props.value.typeOfWashingMachine,
                                brand: props.value.brand,
                                model: props.value.model,
                                washingMachineId: props.value._id,
                            });
                            setEditOpen(true);
                    }}>
                        <Edit style={{ color: "#313E6A" }} />
                        <div className={classes.spacerSmall} />
                        Edit
                    </MenuItem>

                    <MenuItem
                        onClick={() => {
                            handleClose();
                    }}>
                        <ViewAgenda style={{ color: "#313E6A" }} />
                        <div className={classes.spacerSmall} />
                        View Sensors
                    </MenuItem>
                </StyledMenu>

            </div>

        </>
    );

}


export default CustomerMachineStatus;

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
