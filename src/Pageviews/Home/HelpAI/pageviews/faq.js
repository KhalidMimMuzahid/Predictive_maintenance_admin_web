import {
  Add,
  Close,
  Delete,
  Download,
  MoreVert,
  Upload,
} from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  holder: {
    padding: theme.spacing(2),
  },
  title: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
  subtitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  spacerSmall: {
    width: "10px",
    height: "10px",
  },
  topHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  tableHolder: {
    width: "100%",
  },
  packageContainer: {
    width: "100%",
    padding: "16px",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  editButton: {
    width: "100%",
    display: "flex",
    padding: "10px",
    borderRadius: "25px",
    backgroundColor: "#24459c",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
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
    },
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
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#F6F6F6",
    padding: "10px 35px",
    color: "#959596",
    cursor: "pointer",
    borderRadius: "25px",
    fontSize: "14px",
  },
}));

const FAQ = () => {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const openEl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [newFAQ, setNewFAQ] = useState({
    title: "",
    type: "",
    answer: "",
  });

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const createFAQ = () => {
    if (newFAQ.title === "") {
      alert("Please provide the title to continue");
      return;
    }
    if (newFAQ.type === "") {
      alert("Please select the type of FAQ to continue");
      return;
    }
    if (newFAQ.answer === "") {
      alert("Please provide answer of the FAQ to continue");
      return;
    }

    let faqId = makeid(16);
    let title = newFAQ.title;
    let type = newFAQ.type;
    let answer = newFAQ.answer;

    fetch("https://api.showaapp.com/admin/faq/add-faq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faqId,
        title,
        type,
        answer,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setModalOpen(false);
        setNewFAQ({
          faqId: "",
          title: "",
          type: "",
          answer: "",
        });
        alert("Successfully added new FAQ");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const [faq, setFAQ] = useState([]);

  useEffect(() => {
    getFAQ();
  }, []);

  function getFAQ() {
    var url = "https://api.showaapp.com/admin/faq/get-faq";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFAQ(data);
      });
  }

  function displayFAQ() {
    if (faq.length === 0)
      return (
        <Container
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "25px",
            backgroundColor: "white",
          }}
        >
          <h3>No FAQ in the server</h3>
        </Container>
      );

    return (
      <Grid container spacing={2}>
        {faq.map((FAQ, index) => (
          <FAQTab faq={FAQ} key={index} />
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Modal open={modalOpen}>
        <Container className={classes.addUserContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "24px", fontWeight: "700" }}>
              Create New FAQ
            </Typography>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                setModalOpen(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </div>

          <div>
            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                placeholder="Title of the FAQ"
                label="Title of the FAQ"
                value={newFAQ.title}
                onChange={(e) => {
                  setNewFAQ({ ...newFAQ, title: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                value={newFAQ.type}
                label="FAQ Type"
                size="small"
                onChange={(e) => {
                  setNewFAQ({ ...newFAQ, type: e.target.value });
                }}
              >
                <MenuItem value="App">App</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Security">Security</MenuItem>
              </TextField>
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                label="Answer of the FAQ"
                value={newFAQ.answer}
                placeholder="Answer of the FAQ"
                maxRows={5}
                onChange={(e) => {
                  setNewFAQ({ ...newFAQ, answer: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />
          </div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <div
              className={classes.cancelButton}
              onClick={(e) => {
                setNewFAQ({
                  faqId: "",
                  title: "",
                  type: "",
                  answer: "",
                });
                setModalOpen(false);
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                createFAQ();
                setNewFAQ({
                  faqId: "",
                  title: "",
                  type: "",
                  answer: "",
                });
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
            <div className={classes.title}>FAQ</div>
            <div className={classes.spacerSmall}></div>
            <div style={{ display: "flex" }}>
              <div style={{ color: "black" }} className={classes.subtitle}>
                Dashboard /{" "}
              </div>
              <div style={{ color: "#24459c" }} className={classes.subtitle}>
                FAQ
              </div>
            </div>
          </div>

          <div className={classes.buttonHolder}>
            <Button
              style={{ backgroundColor: "#24459c", color: "white" }}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create New FAQ
            </Button>
          </div>

          <div className={classes.smallMenuHolder}>
            <IconButton onClick={handleClick}>
              <MoreVert />
            </IconButton>

            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={openEl}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setNewFAQ({
                    faqId: "",
                    title: "",
                    type: "",
                    answer: "",
                  });
                  handleClose();
                }}
              >
                <div className={classes.spacerSmall} />
                Create New FAQ
              </MenuItem>
            </StyledMenu>
          </div>
        </div>
        <div className={classes.spacerSmall}></div>
        <div className={classes.spacerSmall}></div>

        <div className={classes.tableHolder}>{displayFAQ()}</div>
      </div>
    </>
  );
};

export default FAQ;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

const FAQTab = (props) => {
  const classes = useStyle();

  const [editOpen, setEditOpen] = useState(false);
  const [editFaq, setEditFaq] = useState({
    faqId: "",
    title: "",
    type: "",
    answer: "",
  });

  const handleEditSubmit = () => {
    if (editFaq.title === "") {
      alert("Please provide the title to continue");
      return;
    }
    if (editFaq.type === "") {
      alert("Please select the type of FAQ to continue");
      return;
    }
    if (editFaq.answer === "") {
      alert("Please provide the answer of FAQ to continue");
      return;
    }

    let faqId = editFaq.faqId;
    let title = editFaq.title;
    let type = editFaq.type;
    let answer = editFaq.answer;

    fetch("https://api.showaapp.com/admin/faq/edit-faq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faqId,
        title,
        type,
        answer,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditOpen(false);
        alert("Successfully edited the FAQ");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  const handleDeleteSubmit = () => {
    let faqId = props.faq.faqId;

    fetch("https://api.showaapp.com/admin/faq/delete-faq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faqId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Successfully deleted the FAQ");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  return (
    <>
      <Modal open={editOpen}>
        <Container className={classes.addUserContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "24px", fontWeight: "700" }}>
              Edit FAQ
            </Typography>
            <div
              style={{ color: "black", cursor: "pointer" }}
              onClick={() => {
                setEditOpen(false);
              }}
            >
              <Close />
            </div>
          </div>

          <div>
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
            <div className={classes.spacerSmall} />
          </div>

          <div>
            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                placeholder="Title of the FAQ"
                label="Title of the FAQ"
                value={editFaq.title}
                onChange={(e) => {
                  setEditFaq({ ...editFaq, title: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                select
                id="demo-simple-select"
                value={editFaq.type}
                label="FAQ Type"
                size="small"
                onChange={(e) => {
                  setEditFaq({ ...editFaq, type: e.target.value });
                }}
              >
                <MenuItem value="App">App</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Security">Security</MenuItem>
              </TextField>
            </FormControl>
            <div className={classes.spacerSmall} />

            <FormControl fullWidth>
              <TextField
                className={classes.input}
                size="small"
                label="Answer of the FAQ"
                value={editFaq.answer}
                placeholder="Answer of the FAQ"
                maxRows={5}
                onChange={(e) => {
                  setEditFaq({ ...editFaq, answer: e.target.value });
                }}
              />
            </FormControl>
            <div className={classes.spacerSmall} />
          </div>

          <div className={classes.spacerSmall} />
          <div className={classes.spacerSmall} />

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <div
              className={classes.cancelButton}
              onClick={(e) => {
                setEditOpen(false);
              }}
            >
              Cancel
            </div>
            <div className={classes.spacerSmall} />
            <div
              className={classes.saveButton}
              onClick={(e) => {
                handleEditSubmit();
              }}
            >
              Save
            </div>
          </div>
        </Container>
      </Modal>

      <Grid item xs={6} sm={4} md={3} lg={3}>
        <Container className={classes.packageContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <IconButton>
              <Delete style={{ color: "red" }} onClick={handleDeleteSubmit} />
            </IconButton>
          </div>
          <div className={classes.spacerSmall} />
          <div
            style={{
              color: "#090A0A",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {props.faq.title}
          </div>
          <div className={classes.spacerSmall} />
          <div
            style={{
              color: "#585858",
              fontSize: "12px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {props.faq.type}
          </div>
          <div className={classes.spacerSmall} />
          <div
            style={{
              color: "#090A0A",
              fontSize: "14px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {props.faq.answer}
          </div>
          <div className={classes.spacerSmall} />

          <div
            className={classes.editButton}
            onClick={() => {
              setEditFaq({
                faqId: props.faq.faqId,
                title: props.faq.title,
                type: props.faq.type,
                answer: props.faq.answer,
              });
              setEditOpen(true);
            }}
          >
            Edit
          </div>
        </Container>
      </Grid>
    </>
  );
};
