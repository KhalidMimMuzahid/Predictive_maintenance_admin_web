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

}));


const ControlPanelReservationRequestScreen = () => {

    const classes = useStyle();

    return (
        <div className={classes.holder}>
                
            <div className={classes.topHolder}>
                <div>
                    <div className={classes.title}>Control Panel</div>
                    <div className={classes.spacerSmall}></div>
                    <div style={{display: "flex"}}> 
                        <div style={{color: "black"}} className={classes.subtitle}>Dashboard / Control Panel / </div>
                        <div style={{color: "#24459c"}} className={classes.subtitle}>Reservation Request</div>
                    </div>
                </div>


            </div>

        </div>

    );
}

t
export default ControlPanelReservationRequestScreen;