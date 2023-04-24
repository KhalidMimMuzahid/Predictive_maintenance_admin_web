import { Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";


const useStyle = makeStyles((theme) => ({
    holder: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    header: {
        color: "#111827",
        fontWeight: "600",
        fontSize: "18",
    },
    divider: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    title: {
        fontSize: "14",
        fontWeight: "500",
        color: "#111827",
    },
    info: {
        fontSize: "14",
        fontWeight: "600",
        color: "#6B7280",
    }
}));



const WalletDetailsUser = (props) => {
    
    const [customer, setCustomer] = useState(null);
    const [customerWalletInfo, setCustomerWalletInfo] = useState(null);

    const [uid, setUid] = useState("");

    const classes = useStyle();

    useEffect(() => {
        setUid(props.uid);
        getCustomer();
        getCustomerWalletInfo();
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


    function displayCustomer () {
        if (customer == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div>
            <InfoTab title="Email" info={customer.email} />
            <InfoTab title="Phone" info={customer.phone} />
            <InfoTab title="Building Name/ Room Number" info={customer.buildingNameRoomNumber} />
            <InfoTab title="Street Address" info={customer.streetAddress} />
            <InfoTab title="City Address" info={customer.cityAddress} />
            <InfoTab title="Prefecture" info={customer.prefecture} />
            <InfoTab title="Occupation" info={customer.occupation} />
        </div>;
    };


    function displayCustomerWalletInfo () {
        if (customerWalletInfo == null)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h3>Please Wait</h3>
            </div>;

        return <div>
            <InfoTab title="Cash" info={customerWalletInfo.showa_cash} />
            <InfoTab title="Point" info={customerWalletInfo.showa_point} />
            <InfoTab title="MB" info={customerWalletInfo.showa_mb} />
        </div>;
    };

    
    return (
        <div className={classes.holder}>
            <div className={classes.header}>Basic Details</div>
            <div className={classes.divider}>
                <Divider />
            </div>
            <div>{displayCustomer()}</div>

            <div style={{height: "50px"}}></div>

            <div className={classes.header}>Wallet</div>
            <div className={classes.divider}>
                <Divider />
            </div>
            <div>{displayCustomerWalletInfo()}</div>
        </div>
    );
}

export default WalletDetailsUser;


const InfoTab = (props) => {

    const classes = useStyle();
    
    return <div>
        <Grid container spacing={2}>

            <Grid item xs={4} sm={4} md={4} lg={4}>
                <div className={classes.title}>{props.title}</div>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8}>
                <div className={classes.info}>{props.info}</div>
            </Grid>

        </Grid>
        <div className={classes.divider}>
            <Divider />
        </div>
    </div>
}