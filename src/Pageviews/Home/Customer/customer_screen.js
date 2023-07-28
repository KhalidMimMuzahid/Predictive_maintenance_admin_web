import { Add, Download, MoreVert, Upload } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect } from "react";
import { Component } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCustomerId } from "../../../Redux/actions";
import { DataGrid } from "@mui/x-data-grid";

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
    customerName: {
        color: "#25213B", 
        fontSize: "14",
    },
    customerEmail: {
        color: "#6E6893", 
        fontSize: "14",
    },
    yenText: {
        color: "#6E6893", 
        fontSize: "12",
    },
    balance: {
        color: "#25213B", 
        fontSize: "14",
    }
}));


const CustomerScreen = () => {

    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.holder}>
                

                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Customer</div>
                        {/* <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>IOT</div>
                        </div> */}
                    </div>

                    <div className={classes.buttonHolder}>
                        <Button style={{backgroundColor: "white", color: "black"}} startIcon={<Upload />}>Import</Button>
                        <div className={classes.spacerSmall} />
                        <Button style={{backgroundColor: "white", color: "black"}} startIcon={<Download />}>Export</Button>
                        <div className={classes.spacerSmall} />
                        <Button style={{backgroundColor: "#24459c", color: "white"}}>Add Customer</Button>
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
                                    handleClose();
                                }}
                            >
                                <Upload style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Import
                            </MenuItem>


                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                <Download style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Export
                            </MenuItem>


                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                <Add style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Add Customer
                            </MenuItem>
                            
                        </StyledMenu>


                    </div>

                </div>
                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>
                
                <div className={classes.tableHolder}>
            
                    <CustomerTable />

                </div>

            </div>

    );
}

export default CustomerScreen;



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


const columns = [
    {
        field: 'name',
        headerName: 'CUSTOMER NAME',
        flex: 1,
        renderCell: (props) => CustomerNameEmailComponent(props),
    },
    {
        field: 'email',
        headerName: 'EMAIL',
        flex: 1,
    },
    {
        field: 'location',
        headerName: 'LOCATION',
        flex: 1,
        renderCell: (props) => LocationComponent(props),
    },
    {
        field: 'balance',
        headerName: 'BALANCE',
        headerAlign: "center",
        renderCell: (props) => BalanceComponent(props),
    },
    {
        field: 'details',
        headerName: "DETAILS",
        flex: 1,
        renderCell: (props) => DetailsComponent(props),
    }
];




class CustomerTable extends Component {

    state = {
        rows : [],
    };

    componentDidMount = () => {
        this.getCustomer();
    }
    
    getCustomer() {
        fetch('https://api.showaapp.com/admin/customer/get-all-customer', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.map((customer, index) => (
                    this.addNewItem(customer, index)
                ));
            });
    }

    addNewItem = (customer, index) => {
        let { rows } = this.state;
        rows.push({ id: index, name: customer, email: customer.email, location: customer, balance: customer.uid, details: customer});
        this.setState({rows: rows});
    };

    displayCustomers = () => {

        if (this.state.rows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No customer in the server</h3>
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
        return <div style={{ overflow: "auto" }}>
            {this.displayCustomers()}
        </div>;
    };

}


const BalanceComponent = (props) => {

    const [uid, setUid] = useState("");
    const [customerWalletInfo, setCustomerWalletInfo] = useState(null);

    const classes = useStyle();

    useEffect(() => {
        setUid(props.value);
        getCustomerWalletInfo();
    })


    function getCustomerWalletInfo () {
        if(uid!="") {
            let url = "https://api.showaapp.com/admin/wallet/get-customer-wallet-info/" + uid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setCustomerWalletInfo(data);
            });
        }
    }

    function displayBalance () {
        if (customerWalletInfo == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;
        return <div>
            <div className={classes.balance}>{"\xA5 " + customerWalletInfo.showa_cash}</div>
            <div className={classes.yenText}>Yen</div>
        </div>;
    };
    

    return (
        <div style={{display: "flex"}}>
            {displayBalance()}
        </div>
    );

}




const CustomerNameEmailComponent = (props) => {

    const classes = useStyle();

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            
            <div className={classes.CustomerName}>{props.value.lastNameAlphabet + ', ' + props.value.firstNameAlphabet}</div>
            <div className={classes.CustomerEmail}>{props.value.email}</div>

        </div>
    );
}




const LocationComponent = (props) => {

    const classes = useStyle();

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            
            <div className={classes.CustomerName}>{props.value.buildingNameRoomNumber + ', ' + props.value.streetAddress}</div>
            <div className={classes.CustomerEmail}>{props.value.cityAddress + ', ' + props.value.prefecture + '-' + props.value.postalCode}</div>

        </div>
    );
}


const DetailsComponent = (props) => {

    const dispatch = useDispatch();
 
    return (
        <div 
            style={{display: "flex", flexDirection: "column", cursor: "pointer"}}
            onClick={()=>{
                dispatch(changeCustomerId(props.value.uid));
            }}
        >
            <Typography>View Details</Typography>
        </div>
    );
}