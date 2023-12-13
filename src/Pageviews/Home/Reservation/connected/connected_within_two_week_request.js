import { makeStyles, styled } from "@mui/styles";


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


const ConnectedWithinTwoWeekRequest = () => {
    const classes = useStyle();

    return (
        <div className={classes.holder}>

                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>Reservation</div>
                        <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Reservation/ Sensor Connected/ </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>Accepted Request</div>
                        </div>
                    </div>

                </div>

                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>


        </div>
    );

}

export default ConnectedWithinTwoWeekRequest;