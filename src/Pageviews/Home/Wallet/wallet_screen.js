import { Add, Download, MoreVert, Upload } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Component, useEffect } from "react";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { rowSelectionStateInitializer } from "@mui/x-data-grid/internals";
import { useDispatch } from "react-redux";
import { changeAppTab, changeCustomerId } from "../../../Redux/actions";

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


const WalletScreen = () => {

    const classes = useStyle();

    return (
        <div className={classes.holder}>
                

        <div className={classes.topHolder}>
            <div>
                <div className={classes.title}>Wallet</div>
                <div className={classes.spacerSmall}></div>
                <div style={{display: "flex"}}> 
                    <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                    <div style={{color: "#24459c"}} className={classes.subtitle}>Wallet</div>
                </div>
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

export default WalletScreen;

const columns = [
    {
        field: 'name',
        headerName: 'NAME',
        flex: 1,
        renderCell: (props) => CustomerNameEmailComponent(props),
    },
    {
        field: 'user_id',
        headerName: 'USER ID',
        flex: 1,
    },
    {
        field: 'phone',
        headerName: 'PHONE',
        flex: 1,
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
        rows.push({ id: index, name: customer, user_id: customer.uid, phone: customer.phone, balance: customer.uid, details: customer});
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


const DetailsComponent = (props) => {

    const dispatch = useDispatch();

    return (
        <div 
            style={{display: "flex", flexDirection: "column", cursor: "pointer"}}
            onClick={()=>{
                dispatch(changeAppTab("wallet_customer_details"));
                dispatch(changeCustomerId(props.value.uid));
            }}
        >
            <Typography>View Details</Typography>
        </div>
    );
}