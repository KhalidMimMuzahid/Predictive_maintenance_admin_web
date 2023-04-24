import { Add, Category, Close, Dehaze, Delete, Download, Edit, MoreVert, Person } from "@mui/icons-material";
import { Button, Container, Divider, FormControl, IconButton, Menu, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Component, useEffect, useState } from "react";

const useStyle = makeStyles ((theme)=> ({
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
    addUserContainer: {
        padding: theme.spacing(2),
        backgroundColor: "white",
        width: "400px",
        height: "400px",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
        overflowY: "scroll",
        [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vw",
        }
    },
    input: {
        width: "100%",
        backgroundColor: "white",
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
    },
    tabTitle: {
        color: "#111827",
        fontSize: "22",
        fontWeight: "500",
    },
    tabSubtitle: {
        color: "#6B7280",
        fontSize: "16",
        fontWeight: "400",
    },
}));

const IotScreen = () => {

    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [open, setOpen] = useState(false);
    const [newIot, setNewIot] = useState(
        {
            iotProductId: '',
            iotProductType: '',
            macId: '',
            price: '',
        }
    );

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }


    const handleSubmit = () => {

        if(newIot.iotProductType===""){
            alert("Please select a IoT product type to continue");
            return;
        }
        if(newIot.macId===""){
            alert("Please provide the sensor MAC ID to continue");
            return;
        }
        if(newIot.price===""){
            alert("Please provide price of the sensor to continue");
            return;
        }

        setNewIot({ ...newIot, iotProductId: makeid(36) });
        
        let iotProductId = newIot.iotProductId;
        let iotProductType = newIot.iotProductType;
        let macId = newIot.macId;
        let price = newIot.price;

        fetch('http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/iot/add-sensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                iotProductId, iotProductType, macId, price
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOpen(false);
                alert("Successfully added new IoT Sensor");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });

    }


    return (

        <>
            <Modal open={open}>

                <Container className={classes.addUserContainer}>

                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Add New IoT</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setOpen(false); }}><Close /></div>
                    </div>

                    <div>
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                        <div className={classes.spacerSmall} />
                    </div>

                    <div>

                        <FormControl fullWidth>
                            <TextField
                                select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={newIot.iotProductType}
                                label="IoT Product Type"
                                size="small"
                                onChange={(e)=>{setNewIot({ ...newIot, iotProductType: e.target.value })}}
                            >
                                <MenuItem value="Temperature Sensor">Temperature Sensor</MenuItem>
                                <MenuItem value="Vibration Sensor">Vibration Sensor</MenuItem>
                            </TextField>
                        </FormControl>
                        <div className={classes.spacerSmall} />

                        <FormControl fullWidth>
                            <TextField
                                className={classes.input}
                                size="small" 
                                placeholder="MAC ID"
                                label="MAC ID"
                                onChange={(e)=>{setNewIot({ ...newIot, macId: e.target.value })}}
                            />
                        </FormControl>
                        <div className={classes.spacerSmall} />

                        <FormControl fullWidth>
                            <TextField
                                className={classes.input}
                                size="small" 
                                label="Price (Yen)"
                                placeholder="Price (Yen)"
                                onChange={(e)=>{setNewIot({ ...newIot, price: e.target.value })}}
                            />
                        </FormControl>
                        <div className={classes.spacerSmall} />

                    </div>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setOpen(false);
                            }}
                        >
                            Cancel
                        </div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                handleSubmit();
                            }}
                        >
                            Save
                        </div>
                    </div>

                </Container>

            </Modal>


            <div className={classes.holder}>
                        

                <div className={classes.topHolder}>
                    <div>
                        <div className={classes.title}>IoT</div>
                        <div className={classes.spacerSmall}></div>
                        <div style={{display: "flex"}}> 
                            <div style={{color: "black"}} className={classes.subtitle}>Dashboard / </div>
                            <div style={{color: "#24459c"}} className={classes.subtitle}>IOT</div>
                        </div>
                    </div>

                    <div className={classes.buttonHolder}>
                        <Button style={{backgroundColor: "white", color: "black"}}>Import</Button>
                        <div className={classes.spacerSmall} />
                        <Button style={{backgroundColor: "white", color: "black"}}>Category</Button>
                        <div className={classes.spacerSmall} />
                        <Button style={{backgroundColor: "#24459c", color: "white"}} onClick={()=>{setOpen(true);}}>Add Product</Button>
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
                                handleClose();
                            }}>
                                <Download style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Import
                            </MenuItem>

                            <MenuItem
                                onClick={() => {
                                    handleClose();
                            }}>
                                <Category style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Category
                            </MenuItem>

                            <MenuItem
                                onClick={() => {
                                    setOpen(true);
                                    handleClose();
                                }}
                            >
                                <Add style={{ color: "#313E6A" }} />
                                <div className={classes.spacerSmall} />
                                Add Product
                            </MenuItem>

                        </StyledMenu>

                    </div>

                </div>
                
                <div className={classes.spacerSmall}></div>
                <div className={classes.spacerSmall}></div>
                        
                <div className={classes.tableHolder}>
                    <IotTable />
                </div>

            </div>

        </>
        
    );
}

export default IotScreen;


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


const columns = [
    {
        field: 'product',
        headerName: 'PRODUCT',
        flex: 1,
        renderCell: (props) => ProductComponent(props),
    },
    {
        field: 'customer',
        headerName: 'CUSTOMER',
        flex: 1,
        renderCell: (props) => CustomerComponent(props),
    },
    {
        field: 'status',
        headerName: 'STATUS',
        flex: 1,
        renderCell: (props) => StatusComponent(props),
    },
    {
        field: 'price',
        headerName: 'PRICE',
        flex: 1,
        renderCell: (props) => PriceComponent(props),
    },
    {
        field: 'options',
        headerName: "",
        renderCell: (props) => OptionsComponent(props),
    }
];



class IotTable extends Component {

    state = {
        rows : [],
    };

    componentDidMount = () => {
        this.getIot();
    }
    
    getIot() {
        fetch('http://www.showabackend-env-1.eba-kai5b5bn.ap-northeast-1.elasticbeanstalk.com/admin/iot/get-all-iot-sensor', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.map((iot, index) => (
                    this.addNewItem(iot, index)
                ));
            });
    }

    addNewItem = (iot, index) => {
        let { rows } = this.state;
        rows.push({ id: index, product: iot, customer: iot.uid, status: iot.status, price: iot.price, options: iot});
        this.setState({rows: rows});
    };

    displayIoT = () => {

        if (this.state.rows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No IoT sensor in the server</h3>
            </div>;
        
        return (
            <DataGrid
                rows={this.state.rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                  }}
                pageSizeOptions={[5, 10, 25]}
                autoHeight
                checkboxSelection
            />
        );

    };


    render () {
        return <div style={{ overflow: "auto" }}>
            {this.displayIoT()}
        </div>;
    };

}


const CustomerComponent = (props) => {

    const [uid, setUid] = useState("");
    const [customer, setCustomer] = useState(null);

    const classes = useStyle();

    useEffect(() => {
        setUid(props.value);
        getCustomer();
    })


    function getCustomer () {
        if(uid!=""){
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

        if(uid == "") {
            return <div></div>;
        } else {

            if (customer == null)
                return <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <h3>Please Wait</h3>
                </div>;

            return <div>
                <div className={classes.tabTitle}>{customer.firstNameAlphabet + " " + customer.lastNameAlphabet}</div>
                <div className={classes.tabSubtitle}>{customer.phone}</div>
            </div>;

        }

    };
    

    return (
        <div style={{display: "flex"}}>
            {displayCustomer()}
        </div>
    );

}




const ProductComponent = (props) => {

    const classes = useStyle();

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            
            <div className={classes.tabTitle}>{props.value.iotProductType}</div>
            <div className={classes.tabSubtitle}>{props.value.macId}</div>

        </div>
    );
}




const PriceComponent = (props) => {
    return (
        <div style={{color: "#111827", fontSize: "24", fontWeight: "500"}}>
            {"\xA5 " + props.value}
        </div>
    );
}


const StatusComponent = (props) => {

    let status = props.value;

    return (
        <div 
            style={{
                padding: "2px 16px",
                color: "white",
                borderRadius: "15px",
                fontSize: "16px",
                fontWeight: "400",
                backgroundColor: status == "Active" ? "#14B8A6" : status == "In Store" ? "#FFB020" : status == "In Active" ? "#F15F5F" : "#24459c",
            }}
        >
            {status}
        </div>
    );
}


const OptionsComponent = (props) => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const openEl = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyle();
    
    return <div>

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
                    handleClose();
            }}>
                <Edit style={{ color: "#313E6A" }} />
                <div className={classes.spacerSmall} />
                Edit
            </MenuItem>

            <MenuItem
                onClick={() => {
                    handleClose();
            }}>
                <Delete style={{ color: "red" }} />
                <div className={classes.spacerSmall} />
                Delete
            </MenuItem>
        </StyledMenu>
    
    </div>;
}