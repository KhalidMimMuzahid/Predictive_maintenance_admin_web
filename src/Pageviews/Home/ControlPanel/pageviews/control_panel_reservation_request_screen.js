import { AddCircleOutline } from "@mui/icons-material";
import { FormControl, Grid, IconButton, MenuItem, TextField } from "@mui/material";
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

    optionTitle: {
        fontSize: "18px",
        fontWeight: "500",
        color: "#5A6872",
    },
    optionSubtitle: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#69677C",
    }

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

            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />

            <div className={classes.tableHolder}>

                <Grid container spacing={2}>

                <Grid item xs={3} sm={3} md={3} lg={3}>

                    <div className={classes.optionTitle}>Status</div>
                    <div className={classes.optionSubtitle}>Vendor status on request</div>

                </Grid>

                <Grid item xs={8} sm={8} md={8} lg={8}>

                    <FormControl fullWidth>
                        <TextField
                            select
                            id="demo-simple-select"
                            label="Module"
                            size="small"
                        >
                            <MenuItem value="Module 1">Module 1</MenuItem>
                            <MenuItem value="Module 2">Module 2</MenuItem>
                            <MenuItem value="Module 3">Module 3</MenuItem>
                            <MenuItem value="Module 4">Module 4</MenuItem>
                        </TextField>
                    </FormControl>
                    
                </Grid>

                <Grid item xs={1} sm={1} md={1} lg={1}>

                    <IconButton>
                        <AddCircleOutline />
                    </IconButton>
                    
                </Grid>

                    

                </Grid>

            </div>  

        </div>

    );
}

export default ControlPanelReservationRequestScreen;