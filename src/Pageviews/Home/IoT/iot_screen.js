import { Add, Category, Close, Dehaze, Delete, Download, Edit, MoreVert, Person } from "@mui/icons-material";
import { Button, Container, Divider, FormControl, IconButton, Menu, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Component, useEffect, useState } from "react";
import CsvUploaderLogo from "../../../Assets/Home/iot/csv_uploader_logo.svg";
import { useRef } from "react";
import axios from "axios";

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
        height: "450px",
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
    csvEmptyHolder: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "#F1FAFF",
        padding: "10px 16px",
        borderRadius: "7px",
        border: "1px dashed #009EF7",
        cursor: "pointer"
    },
    csvFileContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1FAFF",
        padding: "10px 16px",
        borderRadius: "7px",
        border: "1px dashed #009EF7"
    }
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
            macId: '',
            price: '',
            module: '',
        }
    );

    const [csvFile, setCsvFile] = useState(null);
    const inputRef = useRef();

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

    const uploadSingleIotData = () => {
        if(newIot.macId===""){
            alert("Please provide the sensor MAC ID to continue");
            return;
        }
        if(newIot.price===""){
            alert("Please provide price of the sensor to continue");
            return;
        }
        if(newIot.module===""){
            alert("Please select the module of the sensor to continue");
            return;
        }

        let iotProductId = makeid(36);
        let macId = newIot.macId.toLowerCase();
        let price = newIot.price;
        let module = newIot.module;

        fetch('https://api.showaapp.com/admin/iot/add-sensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                iotProductId, macId, price, module
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setOpen(false);
                alert("Successfully added new IoT Sensor");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    const uploadCsvFile = () => {
        const formData = new FormData();
        formData.append('IotCsvFile', csvFile);

        axios.post('https://api.showaapp.com/admin/iot/add-iot-from-csv', formData)
            .then(res => {
                console.log(res);
                setOpen(false);
                alert("IoT data uploaded successfully");
            })
            .catch(err => {
                console.log(err);
                alert("Error : " + err);
            });
    }

    const handleSubmit = () => {
        if(csvFile) {
            uploadCsvFile();
        } else {
            uploadSingleIotData();
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        setCsvFile(event.dataTransfer.files);
    }


    function displayCsvUploader () {

        if(csvFile) return (
            <div className={classes.csvFileContainer}>
                {Array.from(csvFile).map((file, index)=> <li key={index}>{file.name}</li>)}
            </div>
        );

        return (
            <div 
                className={classes.csvEmptyHolder}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={()=>inputRef.current.click()}
            >
                <img src={CsvUploaderLogo} />
                <div className={classes.spacerSmall} />
                <div>
                    <input 
                        type="file" 
                        accept=".csv"
                        onChange={(event)=> setCsvFile(event.target.files)}
                        hidden
                        ref={inputRef}
                    />
                    <div style={{color: "#000000", fontSize: "16px", fontWeight: "600"}}>Drop files here or click to upload.</div>
                    <div style={{color: "#009EF7", fontSize: "14px", fontWeight: "500"}}>You can upload from CSV file</div>
                </div>
            </div>
        );
    }

    return (

        <>
            <Modal open={open}>

                <Container className={classes.addUserContainer}>

                    <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Add New IoT</Typography>
                        <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setOpen(false); setCsvFile(null); }}><Close /></div>
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
                                id="demo-simple-select"
                                value={newIot.module}
                                label="Module"
                                size="small"
                                onChange={(e)=>{setNewIot({ ...newIot, module: e.target.value })}}
                            >
                                <MenuItem value="Module 1">Module 1</MenuItem>
                                <MenuItem value="Module 2">Module 2</MenuItem>
                                <MenuItem value="Module 3">Module 3</MenuItem>
                                <MenuItem value="Module 4">Module 4</MenuItem>
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

                    <div>{displayCsvUploader()}</div>

                    <div className={classes.spacerSmall} />
                    <div className={classes.spacerSmall} />

                    <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end"}}>
                        <div 
                            className={classes.cancelButton}
                            onClick={(e)=>{
                                setOpen(false);
                                setCsvFile(null);
                            }}
                        >
                            Cancel
                        </div>
                        <div className={classes.spacerSmall} />
                        <div 
                            className={classes.saveButton}
                            onClick={(e)=>{
                                handleSubmit();
                                setCsvFile(null);
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



const IotTable = () =>  {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        getIot();
    })

    
    function getIot() {
        fetch('https://api.showaapp.com/admin/iot/get-all-iot-sensor', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {

                var tempRows = new Array();
                data.map((iot, index) => (
                    // addNewItem(request, index)
                    tempRows.push({ id: index, product: iot, customer: iot.uid, status: iot.status, price: iot.price, options: iot})
                ));
                setRows(tempRows);

            });
    }


    function displayIoT () {

        if (rows.length === 0)
            return <div style={{ width: "100%", display: "flex", justifyContent: "center", padding:"20px" }}>
                <h3>No IoT sensor in the server</h3>
            </div>;
        
        return (
            <DataGrid
                rows={rows}
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

    return <div style={{ overflow: "auto" }}>
        {displayIoT()}
    </div>;

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
            let url = "https://api.showaapp.com/admin/wallet/find-user-with-id/" + uid;
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
            
            <div className={classes.tabTitle}>{props.value.macId}</div>
            <div className={classes.tabSubtitle}>{props.value.module}</div>

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

    const [editOpen, setEditOpen] = useState(false);
    const [editIot, setEditIot] = useState(
        {
            iotProductId: '',
            macId: '',
            price: '',
            module: ''
        }
    );

    const handleEditSubmit = () => {
        if(editIot.macId===""){
            alert("Please provide the sensor MAC ID to continue");
            return;
        }
        if(editIot.price===""){
            alert("Please provide price of the sensor to continue");
            return;
        }
        if(editIot.module===""){
            alert("Please select the model of the sensor to continue");
            return;
        }
        
        let iotProductId = editIot.iotProductId;
        let macId = editIot.macId;
        let price = editIot.price;
        let module = editIot.module;

        fetch('https://api.showaapp.com/admin/iot/edit-iot-sensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                iotProductId, macId, price, module
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setEditOpen(false);
                alert("Successfully edited the IoT Sensor");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }

    const handleDeleteSubmit = () => {
        
        let iotProductId = props.value.iotProductId;

        fetch('https://api.showaapp.com/admin/iot/delete-iot-sensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                iotProductId
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setEditOpen(false);
                alert("Successfully deleted the IoT Sensor");
            })
            .catch((error)=>{
                alert("Error: " + error);
            });
    }
 
    const classes = useStyle();
    
    return <>

        <Modal open={editOpen}>

            <Container className={classes.addUserContainer}>

                <div style={{ width :"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography style={{ fontSize: "24px", fontWeight: "700", }}>Edit IoT Sensor</Typography>
                    <div style={{ color: "black", cursor: "pointer" }} onClick={() => { setEditOpen(false); }}><Close /></div>
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
                            id="demo-simple-select"
                            value={editIot.module}
                            label="Module"
                            size="small"
                            onChange={(e)=>{setEditIot({ ...editIot, module: e.target.value })}}
                        >
                            <MenuItem value="Module 1">Module 1</MenuItem>
                            <MenuItem value="Module 2">Module 2</MenuItem>
                            <MenuItem value="Module 3">Module 3</MenuItem>
                            <MenuItem value="Module 4">Module 4</MenuItem>
                        </TextField>
                    </FormControl>
                    <div className={classes.spacerSmall} />

                    <FormControl fullWidth>
                        <TextField
                            className={classes.input}
                            size="small" 
                            placeholder="MAC ID"
                            label="MAC ID"
                            value={editIot.macId}
                            onChange={(e)=>{setEditIot({ ...editIot, macId: e.target.value })}}
                        />
                    </FormControl>
                    <div className={classes.spacerSmall} />

                    <FormControl fullWidth>
                        <TextField
                            className={classes.input}
                            size="small" 
                            label="Price (Yen)"
                            value={editIot.price}
                            placeholder="Price (Yen)"
                            onChange={(e)=>{setEditIot({ ...editIot, price: e.target.value })}}
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
                            setEditOpen(false);
                        }}
                    >
                        Cancel
                    </div>
                    <div className={classes.spacerSmall} />
                    <div 
                        className={classes.saveButton}
                        onClick={(e)=>{
                            handleEditSubmit();
                        }}
                    >
                        Save
                    </div>
                </div>

            </Container>

        </Modal>

        <div>

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
                        setEditIot({
                            iotProductId: props.value.iotProductId,
                            macId: props.value.macId,
                            price: props.value.price,
                            module: props.value.module,
                        });
                        setEditOpen(true);                
                }}>
                    <Edit style={{ color: "#313E6A" }} />
                    <div className={classes.spacerSmall} />
                    Edit
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        handleClose();
                        handleDeleteSubmit();
                }}>
                    <Delete style={{ color: "red" }} />
                    <div className={classes.spacerSmall} />
                    Delete
                </MenuItem>
            </StyledMenu>

        </div>
    </>;
}

