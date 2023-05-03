import { ArrowDownward, ArrowDropDown, ArrowUpward, Edit, MoreVert } from "@mui/icons-material";
import { Button, Container, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Component, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomerDetails from "./pageviews/customer_details";
import CustomerMachineStatus from "./pageviews/customer_machine_status";
import CustomerInvoice from "./pageviews/customer_invoice";
import CustomerRequest from "./pageviews/customer_request";
import UserDemoIcon from "../../../Assets/Home/customer/user_demo_icon.png";
import WashingMachineCountIcon from "../../../Assets/Home/customer/washing_machine_count_icon.svg";

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
        borderRadius: "5px",
    },
    buttonHolder: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    menuHolder: {
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
    customerInfoHolder: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#24459c",
        padding: theme.spacing(1),
        borderRadius: "5px",
    },
    customerName: {
        color: "white", 
        fontSize: "18",
        fontWeight: "600",
        textOverflow: "ellipsis",
    },
    customerEmail: {
        color: "white", 
        fontSize: "16",
        fontWeight: "400",
        textOverflow: "ellipsis",
    },
    yenText: {
        color: "#6E6893", 
        fontSize: "12",
    },
    balance: {
        color: "#25213B", 
        fontSize: "14",
    },
    customerWalletInfoHolder: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F4F5FB",
        padding: theme.spacing(1),
        borderRadius: "5px",
    },
    recentActivityText: {
        color: "#5A6872", 
        fontSize: "12", 
        fontWeight: "600",
        paddingLeft: "10px",
    },
    activeMenuTab: {
        backgroundColor: "#EEEFF4",
        borderRadius: "7px",
        color: "#5A5C73",
        fontSize: "18",
        fontWeight: "600",
        padding: "10px 15px",
        cursor: "pointer",
    },
    inactiveMenuTab: {
        backgroundColor: "white",
        borderRadius: "7px",
        color: "#5A5C73",
        fontSize: "18",
        fontWeight: "600",
        padding: "10px 15px",
        cursor: "pointer",
    },
    transactionHolder: {
        backgroundColor: "#F4F5FB", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginBottom: "10px", 
        padding: "10px 8px", 
        borderRadius: "5px",
    },
    customerDetailsHolder : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden"
    },
    userImageHolder: {
        width: "75px",
        height: "75px",
        overflow: "hidden",
        borderRadius: "50%",
    },
    userImage: {
        width: "100%",
    },
    countHolder: {
        border: "2px solid #F2F2F2", 
        borderRadius: "7px", 
        display: "flex", 
        alignItems: "center",
        padding: "10px 10px",
    }
}));


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


const CustomerDetailsScreen = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [details, setDetails] = useState(true);
    const [machineStatus, setMachineStatus] = useState(false);
    const [invoice, setInvoice] = useState(false);
    const [request, setRequest] = useState(false);

    const classes = useStyle();

    const currentUid = useSelector((state) => state.changeCustomerId);


    return (
        <div className={classes.holder}>
            
            <div className={classes.topHolder}>
                <div>
                    <div className={classes.title}>Customer</div>
                    <div className={classes.spacerSmall}></div>
                    <div style={{display: "flex"}}> 
                        <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Customer /</div>
                        <div style={{color: "#24459c"}} className={classes.subtitle}>Customer Details</div>
                    </div>
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
                                    setDetails(true);
                                    setMachineStatus(false);
                                    setInvoice(false);
                                    setRequest(false);
                                    handleClose();
                                }}
                            >
                                <div className={details ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Details</div>
                            </MenuItem>


                            <MenuItem
                                onClick={() => {
                                    setDetails(false);
                                    setMachineStatus(true);
                                    setInvoice(false);
                                    setRequest(false);
                                    handleClose();
                                }}
                            >
                                <div className={machineStatus ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Machine Status</div>
                            </MenuItem>


                            <MenuItem
                                onClick={() => {
                                    setDetails(false);
                                    setMachineStatus(false);
                                    setInvoice(true);
                                    setRequest(false);
                                    handleClose();
                                }}
                            >
                                <div className={invoice ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Invoice</div>
                            </MenuItem>
                            


                            <MenuItem
                                onClick={() => {
                                    setDetails(false);
                                    setMachineStatus(false);
                                    setInvoice(false);
                                    setRequest(true);
                                    handleClose();
                                }}
                            >
                                <div className={request ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Request</div>
                            </MenuItem>


                        </StyledMenu>


                </div>


            </div>

            <div className={classes.spacerSmall}></div>
            <div className={classes.spacerSmall}></div>


            <Grid container spacing={2}>

                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Container className={classes.tableHolder}>
                        <CustomerBasicInfo 
                            uid={currentUid}
                        />
                    </Container>
                </Grid>
    
                <Grid item xs={12} sm={8} md={9} lg={9}>
                    <Container className={classes.tableHolder}>
                        
                        <div className={classes.menuHolder}>

                            <div 
                                className={details ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setDetails(true);
                                    setMachineStatus(false);
                                    setInvoice(false);
                                    setRequest(false);
                                }}
                            >
                                Details
                            </div>

                            <div 
                                className={machineStatus ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setDetails(false);
                                    setMachineStatus(true);
                                    setInvoice(false);
                                    setRequest(false);
                                }}
                            >
                                Machine Status
                            </div>

                            <div 
                                className={invoice ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setDetails(false);
                                    setMachineStatus(false);
                                    setInvoice(true);
                                    setRequest(false);
                                }}
                            >
                                Invoice
                            </div>

                            <div 
                                className={request ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setDetails(false);
                                    setMachineStatus(false);
                                    setInvoice(false);
                                    setRequest(true);
                                }}
                            >
                                Request
                            </div>

                        </div>

                        
                        {
                            details && <CustomerDetails uid = {currentUid}/>
                        }
                        {
                            machineStatus && <CustomerMachineStatus />
                        }
                        {
                            invoice && <CustomerInvoice />
                        }
                        {
                            request && <CustomerRequest />
                        }
                    </Container>
                </Grid>

            </Grid>


        </div>
    );
}

export default CustomerDetailsScreen;


const CustomerBasicInfo = (props) => {

    const classes = useStyle();

    const [uid, setUid] = useState("");
    const [customer, setCustomer] = useState(null);


    useEffect(() => {
        setUid(props.uid);
        getCustomer();
    })


    function getCustomer () {
        if(uid!="") {
            let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/wallet/find-user-with-id/" + uid;
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

        return <div className={classes.customerDetailsHolder}>
            {
                customer.photoAddress == "" 
                    ? <div className={classes.userImageHolder}> <img src={UserDemoIcon} className={classes.userImage} /> </div>
                    : <div className={classes.userImageHolder}> <img src={customer.photoAddress} className={classes.userImage}  /> </div>
            }
            <div className={classes.spacerSmall} />

            <div style={{color: "#838383", fontSize: "18px", fontWeight: "600", display: "flex", overflow: "hidden"}}>
                {customer.lastNameAlphabet + ", " + customer.firstNameAlphabet}
            </div>
            <div  style={{color: "#838383", fontSize: "16px", fontWeight: "400", display: "flex", overflow: "hidden"}}>{customer.email}</div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />

            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%"}}>
                
                <Button 
                    style={{backgroundColor: "white", color: "#24459c", border: "1px solid #24459c", padding: "4px 10px"}} endIcon={<Edit style={{color: "#24459c"}}/>}
                >Edit</Button>

                <Button 
                    style={{backgroundColor: "#24459c", color: "white", border: "1px solid #24459c", padding: "4px 10px"}} endIcon={<ArrowDropDown style={{color: "white"}}/>}
                >Actions</Button>
            </div>
        </div>;
    };



    return (
        <div>
            {displayCustomer()}
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <WashingMachineCountTab 
                currentUid={uid}
            />
        </div>
    );
}


const WashingMachineCountTab = (props) => {

    const [count, setCount] = useState(0);
    const [uid, setUid] = useState("");

    const classes = useStyle();

    useEffect(() => {
        setUid(props.currentUid);
        getWashingMachineWithUid();
    })

    function getWashingMachineWithUid () {
        if(uid!="") {
            let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/customer/get-washing-machine-with-uid/" + uid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setCount(data.length);
                });    
        }
    }


    function displayWashingMachine () {        
        return (
            <div className={classes.countHolder}>
                <div style={{backgroundColor: "#43C6AC", borderRadius: "7px", padding: "8px"}}>
                    <img src={WashingMachineCountIcon} />
                </div>
                <div className={classes.spacerSmall} />
                <div className={classes.spacerSmall} />
                <div>
                    <div style={{color: "#C5C5C5", fontWeight: "400", fontSize: "16"}}>
                        Washing Machine
                    </div>
                    <div style={{color: "#243972", fontWeight: "700", fontSize: "28"}}>
                        {count}
                    </div>
                </div>
            </div>
        );

    };

    return (
        <div style={{ overflow: "auto" }}>
            {displayWashingMachine()}
        </div>
    );


}