import { FormControl, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../../../firebase";

const useStyle = makeStyles((theme)=>({
    title: {
        color: "#5A6872",
        fontSize: "18px",
        fontWeight: "600",
    },
    subtitle: {
        color: "#69677C",
        fontSize: "16px",
        fontWeight: "500",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
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
        borderRadius: "25px",
        fontSize: "14px"
    },
    spacer: {
        width: "15px",
        height: "15px"
    }

}));

const PersonalInfo = () => {

    const classes = useStyle();

    const [admin, setAdmin] = useState(null);
    const [uid, setUid] = useState("");

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        setUid(auth.currentUser.uid);
        getAdmin();
    })

    function getAdmin () {
        if(uid!="") {
            let url = "https://api.showaapp.com/admin/settings/find-admin-with-id/" + uid;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data);
                    setFullName(admin.name);
                    setPhone(admin.phone);
            });
        }
    }

    function updateNameEmail () {
        if(isChanged) {
            let url = "https://api.showaapp.com/admin/settings/update-name-phone/" + fullName + '/' + phone;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    alert("Successfully updated admin data");
                }
            ).catch((error)=>{
                alert("Error: " + error);
            });
        }
    }


    if (admin == null)
        return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
            <h3>Please Wait</h3>
        </div>;

    return (

        <>
            <Grid container spacing={2}>
                
                {/* name */}
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.title}>User Fullname</div>
                    <div className={classes.subtitle}>user can update their own name</div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <FormControl fullWidth>
                        <TextField
                            placeholder="Name"
                            value={fullName} 
                            size="small"
                            onChange={(e)=>{
                                setFullName(e.target.value);
                                setIsChanged(true);
                            }}
                        />
                    </FormControl>
                </Grid>
                
                {/* email */}
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.title}>Email</div>
                    <div className={classes.subtitle}>user can not update this email</div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <FormControl fullWidth>
                        <TextField
                            placeholder="Email"
                            value={admin.email} 
                            size="small"
                            disabled
                        />
                    </FormControl>
                </Grid>
                
                {/* phone */}
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <div className={classes.title}>Phone</div>
                    <div className={classes.subtitle}>user can update this phone number</div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <FormControl fullWidth>
                        <TextField
                            placeholder="Phone"
                            value={phone} 
                            size="small"
                            onChange={(e)=>{
                                setPhone(e.target.value);
                                setIsChanged(true);
                            }}
                        />
                    </FormControl>
                </Grid>
            </Grid>

            <div className={classes.spacer} />

            <div className={classes.buttonHolder}>
                <div 
                    className={isChanged ? classes.saveButton : classes.cancelButton}
                    onClick={updateNameEmail}
                >
                    Update
                </div>
            </div>

        </>
    );
}


export default PersonalInfo;
