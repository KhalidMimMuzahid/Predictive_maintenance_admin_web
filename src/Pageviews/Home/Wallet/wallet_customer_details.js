import { ArrowDownward, ArrowUpward, MoreVert } from "@mui/icons-material";
import { Container, Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import WalletDetailsUser from "./pageviews/details";
import WalletTransactionsUser from "./pageviews/transactions";
import UserDemoIcon from "../../../Assets/Home/customer/user_demo_icon.png";


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
    userImageHolder: {
        width: "75px",
        height: "75px",
        overflow: "hidden",
        borderRadius: "50%",
    },
    userImage: {
        width: "100%",
    },

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


const WalletCustomerDetails = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [details, setDetails] = useState(true);
    const [transactions, setTransactions] = useState(false);

    const classes = useStyle();

    const currentUid = useSelector((state) => state.changeCustomerId);
    
    return (
        <div className={classes.holder}>
                

            <div className={classes.topHolder}>
                <div>
                    <div className={classes.title}>Wallet</div>
                    <div className={classes.spacerSmall}></div>
                    <div style={{display: "flex"}}> 
                        <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Wallet /</div>
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
                                    setTransactions(false);
                                    handleClose();
                                }}
                            >
                                <div className={details ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Details</div>
                            </MenuItem>


                            <MenuItem
                                onClick={() => {
                                    setDetails(false);
                                    setTransactions(true);
                                    handleClose();
                                }}
                            >
                                <div className={transactions ? classes.activeMenuTab : classes.inactiveMenuTab} style={{width: "100%"}}>Transactions</div>
                            </MenuItem>
                            
                        </StyledMenu>


                </div>


            </div>
            <div className={classes.spacerSmall}></div>
            <div className={classes.spacerSmall}></div>


            <Grid container spacing={2}>

                <Grid item xs={12} sm={4} md={3} lg={3}>
                    <Container className={classes.tableHolder}>
                        <UserInformation
                            uid = {currentUid} 
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
                                    setTransactions(false);
                                }}
                            >
                                Details
                            </div>

                            <div 
                                className={transactions ? classes.activeMenuTab : classes.inactiveMenuTab}
                                onClick={(e)=> {
                                    setDetails(false);
                                    setTransactions(true);
                                }}
                            >
                                Transactions
                            </div>

                        </div>

                        
                        {
                            details && <WalletDetailsUser uid={currentUid}/>
                        }
                        {
                            transactions && <WalletTransactionsUser />
                        }
                    </Container>
                </Grid>

            </Grid>

        </div>

    );
}

export default WalletCustomerDetails;


const UserInformation = (props) => {
    
    const [uid, setUid] = useState("");
    const [customer, setCustomer] = useState(null);
    const [customerWalletInfo, setCustomerWalletInfo] = useState(null);
    const [recentTransactions, setRecentTransactions] = useState([]);

    const classes = useStyle();

    useEffect(() => {
        setUid(props.uid);
        getCustomer();
        getCustomerWalletInfo();
        getRecentTransactions();
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

    function getCustomerWalletInfo () {
        if(uid!="") {
            let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/wallet/get-customer-wallet-info/" + uid;
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

    function getRecentTransactions () {
        if(uid!="") {
            let url = "http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/wallet/get-recent-transaction-by-uid/" + uid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setRecentTransactions(data);
            });
        }
    }


    function displayCustomer () {
        if (customer == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div className={classes.customerInfoHolder}>

            {
                customer.photoAddress == "" 
                    ? <div className={classes.userImageHolder}> <img src={UserDemoIcon} className={classes.userImage} /> </div>
                    : <div className={classes.userImageHolder}> <img src={customer.photoAddress} className={classes.userImage}  /> </div>
            }
            <div className={classes.spacerSmall} />

            <div className={classes.customerName}>{customer.firstNameAlphabet + " " + customer.lastNameAlphabet}</div>
            <div className={classes.customerEmail}>{customer.email}</div>
        </div>;
    };

    function displayCustomerWalletInfo () {
        if (customerWalletInfo == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div className={classes.customerWalletInfoHolder}>
            <div style={{color: "#24459c", fontSize: "16", fontWeight: "400"}}>Total Balance</div>
            <div className={classes.spacerSmall} />
            <div style={{color: "#24459c", fontSize: "30", fontWeight: "700"}}>{"\xA5 " + customerWalletInfo.showa_cash}</div>
        </div>;
    };

    function displayRecentTransactions () {
        if (recentTransactions.length == 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return recentTransactions.map((transaction, index) => (
            <RecentTransaction
                key={index}
                transaction = {transaction}
            />
        ));

    };

    
    return (
        <div>
            <div>{displayCustomer()}</div>
            <div className={classes.spacerSmall}></div>
            <div>{displayCustomerWalletInfo()}</div>
            <div className={classes.spacerSmall}></div>
            <div className={classes.recentActivityText}>
                Recent Activities
            </div>
            <div className={classes.spacerSmall}></div>
            <div>{displayRecentTransactions()}</div>
        </div>
    );
}


const RecentTransaction = (props) => {

    const currentUid = useSelector((state) => state.changeCustomerId);

    const classes = useStyle();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className={classes.transactionHolder}>

            <div style={{display: "flex", alignItems: "center"}}>

                {
                    props.transaction.transaction_type == "bonus"
                        ? <ArrowUpward style={{color: "green"}}/>
                        : props.transaction.transaction_type == "transfer"
                            ? props.transaction.toTransferUid == currentUid
                                ? <ArrowUpward  style={{color: "green"}}/> 
                                : <ArrowDownward  style={{color: "red"}}/>
                            : <ArrowDownward  style={{color: "red"}}/>
                }

                <div className={classes.spacerSmall}/>

                <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <div style={{fontSize: "14", color: "#5A6872", fontWeight: "600"}}>{capitalizeFirstLetter(props.transaction.transaction_type)}</div>
                    <div className={classes.spacerSmall} />
                    <div style={{fontSize: "10", color: "#D1D5DB", fontWeight: "500"}}>{props.transaction.dateTime}</div>
                </div>

            </div>

            <div>
                
                {
                    props.transaction.transaction_type == "bonus"
                        ? <div style={{color: "green", fontSize: "14"}}>{'+\xA5' + props.transaction.amount}</div>
                        : props.transaction.transaction_type == "transfer"
                            ? props.transaction.toTransferUid == currentUid
                                ? <div style={{color: "green", fontSize: "14"}}>{'+\xA5' + props.transaction.amount}</div> 
                                : <div style={{color: "red", fontSize: "14"}}>{'-\xA5' + props.transaction.amount}</div>
                            : <div style={{color: "red", fontSize: "14"}}>{'-\xA5' + props.transaction.amount}</div>
                }
            </div>

        </div>
    );
}