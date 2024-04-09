import { Close } from "@mui/icons-material";
import logo from "../../../../../../../../../src/Assets/Component/logo_small.svg";
import invoiceLogo from "../../../../../../../../../src/Assets/Component/invoiceLogo.png"
import userimg from "../../../../../../../../../src/Assets/Component/invoiceUser.png"
import {
  Box,
  Button,
  Container,

  Modal,

  TextField,

  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'item', headerName: 'ITEM', width: 450 },
  { field: 'hrsQty', headerName: 'HRS/QTY', width: 160 },
  { field: 'rate', headerName: 'RATE', width: 160 },
  { field: 'tax', headerName: 'TAX', width: 160 },
  { field: 'subtotal', headerName: 'SUBTOTAL', width: 160 },
];

const initialRows  = [
  { id: 1, item: 'Washing machine making noise when draining or not draining at all', hrsQty: 1, rate: 7500, tax: 120, subtotal: 7620 },
  { id: 2, item: 'Washing machine making noise when draining or not draining at all', hrsQty: 1, rate: 7500, tax: 120, subtotal: 7620 },
  { id: 3, item: 'Washing machine making noise when draining or not draining at all', hrsQty: 1, rate: 7500, tax: 120, subtotal: 7620 },
  { id: 4, item: 'Washing machine making noise when draining or not draining at all', hrsQty: 1, rate: 7500, tax: 120, subtotal: 7620 }
];

const columns1 = [
  { field: 'header', headerName: 'Invoice Summary', width: 400, headerAlign: 'center' }, // Width of the combined header
  { field: 'cell2', headerName: '', width: 150 },
];

const rows1 = [
  { id: 1, header: 'Subtotal', cell2: '30,480' },
  { id: 2, header: 'Subtotal', cell2: '1900' },
  { id: 3, header: 'Total (Yen)', cell2: '32,380' },
];




const ViewModal = ({ viewOpen, setViewOpen, props }) => {

  const [editing, setEditing] = useState(false);
  const [inputFields, setInputFields] = useState({
    item: "",
    hrsQty: "",
    rate: "",
    tax: "",
    subtotal: "",
  });
  const [gridRows, setGridRows] = useState(initialRows);

  const handleInputChange = (field, value) => {
    setInputFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddRow = () => {
    const newRow = { ...inputFields, id: gridRows.length + 1 };
    setGridRows((prevRows) => [...prevRows, newRow]);
    setInputFields({
      item: "",
      hrsQty: "",
      rate: "",
      tax: "",
      subtotal: "",
    });
    setEditing(false);
  };

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "24px"
      }}
      open={viewOpen}
    >
      <Container
        sx={{
          width: "65%",
          background: "white",
          borderRadius: "20px",
          padding: "24px"
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setViewOpen(!viewOpen);
            }}
          >
            <Close />
          </Button>
        </Box>


        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          marginLeft: "24px"
        }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <img style={{ height: "40px" }} src={invoiceLogo} alt="webscript" />
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#000000",
                textAlign: "center",

              }}
            >
              www.showa.com
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "12px 28px",
              display: "flex",
              gap: "24px",
            }}
          >
             {!editing && (
            <Button
            onClick={() => {
              setEditing(true);
            }}
              variant="outlined"
              sx={{
                width: "160px",
                height: "36px",
                textTransform: "capitalize",
                borderRadius: "20px",
                padding: "8px 10px",
                background: "white",
                fontSize: "14px",
                fontWeight: "700",
                color: "#24459C",
                borderColor: "#24459C",
              }}
            >
              Edit
            </Button>
            )}
            <Button
              sx={{
                width: "160px",
                height: "36px",
                borderRadius: "20px",
                padding: "8px 10px",
                background: "#24459C",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: "600",
                color: "#FFFFFF",
                "&:hover": {
                  background: "#24459C",
                },
              }}
            >
              Download
            </Button>
          </Box>

        </Box>


        <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "24px", marginRight: "24px" }}>

          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#5A6872",
                textAlign: "start",
                marginBlock: "8px"
              }}
            >
              FROM
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", alignItems: "start" }}>
              <img src={logo} alt="webscript" />
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#5A6872",
                    // textAlign: "start",
                  }}
                >
                  Showa Company Ltd
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#5A6872",
                    // textAlign: "start",
                  }}
                >
                  442-1227, Tsukuno, Minamiuonuma-shi, Niigata Japan <br />
                  Company No. 4675933 | EU VAT No. 949 67545 45 <br />
                  accounts@devias.io | (+40) 652 3456 23
                </Typography>
              </Box>

            </Box>

          </Box>


          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#5A6872",
                textAlign: "start",
                marginBlock: "8px"
              }}
            >
              To
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", alignItems: "start" }}>
              <img src={userimg} alt="webscript" />
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#5A6872",
                    // textAlign: "start",
                  }}
                >
                  Leslie Alexander
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#5A6872",
                    // textAlign: "start",
                  }}
                >
                  235-1241, Shinkiba, Koto-ku, Tokyo, Japan <br />
                  alma.lawson@example.com | +8121-800-7169

                </Typography>
              </Box>

            </Box>


          </Box>

        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", marginLeft: "24px", marginRight: "24px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#5A6872",
              marginBlock: "8px"
            }}
          >
            Invoice No. 098784
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#5A6872",
              marginBlock: "8px"
            }}
          >
            Due: Mar 19th, 2022
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#5A6872",
            marginBlock: "8px",
            marginLeft: "24px"
          }}
        >
          Invoice  Date: Mar 19th, 2022
        </Typography>


        {/* main table  */}
        <div style={{ height: 'auto', width: 'auto', marginLeft: "24px", marginRight: "24px" }}>
        {editing ? (
          <div>
          <div style={{ display: "flex", marginBottom: "8px" }}>
            {columns.map((column) => (
              <div key={column.field} style={{ width: column.width }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#000000",
                    textAlign: "start",
                  }}
                >
                  {column.headerName}
                </Typography>
                <TextField
                  label={`Input for ${column.headerName}`}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={inputFields[column.field]}
                  onChange={(e) => handleInputChange(column.field, e.target.value)}
                />
              </div>
            ))}
          </div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleAddRow}
                sx={{ marginTop: "16px",
                width: "100%",
                fontSize: "16px",
                fontWeight: "700",
                color: "#8B8B8B",
                borderColor: "#8B8B8B",
              borderStyle: "dashed" }}
              >
                Add new invoice Item
              </Button>
            </div>
          ) : (
            <DataGrid
            rows={gridRows}
            columns={columns}
          />
          )}
        </div>
         

      


        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px", marginRight: "24px" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#5A6872",
                marginBlock: "8px",
                marginLeft: "24px"
              }}
            >
              In word
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#5A6872",
                marginBlock: "8px",
                marginLeft: "24px"
              }}
            >
              Thirty Two thousand Three Hundred Eighty Yen only
            </Typography>
          </Box>

          <div style={{ height: 'auto', width: 'auto', marginLeft: '24px', marginRight: '24px' }}>
            <DataGrid rows={rows1} columns={columns1} />

          </div>

        </Box>

      </Container>
    </Modal>
  );
};

export default ViewModal;
