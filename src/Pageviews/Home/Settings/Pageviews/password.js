import { FormControl, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyle = makeStyles((theme)=> ({
    titleText: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#5A6872",
    },
    subtitleText: {
        fontSize: "16px",
        fontWeight: "500",
        color: "#69677C",
    },
    spacerSmall: {
        width: "10px",
        height: "10px",
    },
    buttonHolder: {
        width: "100%", 
        display: "flex", 
        justifyContent: "end"
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

const Password = () => {
    
    const classes = useStyle();
    
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <div className={classes.titleText}>Update Password</div>
                    <div className={classes.spacerSmall} />
                    <div className={classes.subtitleText}>User password can be update anytime user wants to.</div>
                </Grid>

                <Grid item xs={8} sm={8} md={8} lg={8}>
                    <FormControl fullWidth>
                        <TextField 
                            size="small"
                            label="Current Password"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e)=>setCurrentPassword(e.target.value)}
                        />
                    </FormControl>
                    <div className={classes.spacerSmall} />
                    <FormControl fullWidth>
                        <TextField 
                            size="small"
                            label="New Password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e)=>setNewPassword(e.target.value)}
                        />
                    </FormControl>
                    <div className={classes.spacerSmall} />
                    <FormControl fullWidth>
                        <TextField 
                            size="small"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    </FormControl>
                </Grid>

            </Grid>

            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            
            <div className={classes.buttonHolder}>
                <div 
                    className={classes.cancelButton}
                    onClick={()=>{
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmPassword("");
                    }}
                >
                    Cancel
                </div>

                <div className={classes.spacerSmall} />

                <div className={classes.saveButton}>
                    Save
                </div>
            </div>

        </div>
    );
}

export default Password;