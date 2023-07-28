import { Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChatUser, setChatUserType } from "../../../../Redux/actions";

const Searched =(props) => {

    const [users, setUsers] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        getUsersByPhone();
    })

    
    function getUsersByPhone() {

        var url = "https://api.showaapp.com/admin/chat/get-searched-user/" + props.text;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data["users"]);
                setVendors(data["vendors"]);
                setAdmins(data["admins"]);
            });
    }
    
    function displayUsers () {

        if (users.length === 0)
            return <div>
                <div style={{padding: "10px 10px"}}>
                    <Typography style={{fontWeight: "700"}}>Users</Typography>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>No users found</h3>
                </div>
            </div>;

        return <div>
            <div style={{padding: "10px 10px"}}>
                <Typography style={{fontWeight: "700"}}>Users</Typography>
            </div>
            {
                users.map((user, index) => (
                    <UsersTab
                        user={user}
                        name = {user.lastNameAlphabet + ", " + user.firstNameAlphabet}
                        imgAdds = {user.photoAddress}
                        key = {index}
                        userType = "Customer"
                    />
                ))
            }
        </div>;

    };

    function displayVendors () {

        if (vendors.length === 0)
            return <div>
                <div style={{padding: "10px 10px"}}>
                    <Typography style={{fontWeight: "700"}}>Service Provider</Typography>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>No service provider found</h3>
                </div>
            </div>;

        return <div>
            <div style={{padding: "10px 10px"}}>
                <Typography style={{fontWeight: "700"}}>Service Provider</Typography>
            </div>
            {
                vendors.map((vendor, index) => (
                    <UsersTab
                        user={vendor}
                        name = {vendor.lastNameAlphabet + ", " + vendor.firstNameAlphabet}
                        imgAdds = {vendor.photoAddress}
                        key = {index}
                        userType = "Vendor"
                    />
                ))
            }
        </div>;

    };

    function displayAdmins () {

        if (admins.length === 0)
            return <div>
                <div style={{padding: "10px 10px"}}>
                    <Typography style={{fontWeight: "700"}}>Admins</Typography>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>No admins found</h3>
                </div>
            </div>;

        return <div>
            <div style={{padding: "10px 10px"}}>
                <Typography style={{fontWeight: "700"}}>Admins</Typography>
            </div>
            {
                admins.map((admin, index) => (
                    <UsersTab
                        user={admin}
                        name = {admin.name}
                        imgAdds = {admin.adminImageAddress}
                        key = {index}
                        userType = "Admin"
                    />
                ))
            }
        </div>;

    };


    return (
        <div style={{overflow: "auto"}}>
            {displayUsers()}
            {displayVendors()}
            {displayAdmins()}
        </div>
    );
}
export default Searched;


const useStyle = makeStyles ((theme) => ({
    imgContainer: {
        width: "60px",
        height: "60px",
        borderRadius: "50%"
    },
    img: {
        height: "100%",
        width: "100%"
    },
    spacerSmall: {
        width: "10px",
        height: "10px",
    }
}))

const UsersTab = (props) => {

    const classes = useStyle();

    const dispatch = useDispatch();

    return (
        <div 
            style={{display: "flex", alignItems: "center", margin: "10px", cursor: "pointer"}}
            onClick={()=>{
                dispatch(setChatUser(props.user));
                dispatch(setChatUserType(props.userType));
            }}
        >

            <Avatar src={props.imgAdds} />
            
            <div className={classes.spacerSmall} />

            <div>
                {props.name}
            </div>
        </div>
    );
}