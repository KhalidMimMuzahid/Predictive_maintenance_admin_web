import { Close } from "@mui/icons-material";
import logo from "../../../../../../../../../src/Assets/Component/logo_small.svg";
import invoiceLogo from "../../../../../../../../../src/Assets/Component/invoiceLogo.png";
// import userimg from "../../../../../../../../../src/Assets/Component/invoiceUser.png"
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { useGetCustomerDetailsQuery } from "../../../../../../../../features/customers/customersSlice";
import ItemName from "./ViewModalComponent/ItemName";
import QuantityComponent from "./ViewModalComponent/QuantityComponent";
import Rate from "./ViewModalComponent/Rate";
import Tax from "./ViewModalComponent/Tax";
import SubTotal from "./SubTotal";
// import { ToWords } from 'to-words';
// addedBy: Types.ObjectId; // ServiceProviderEngineer model
// productName: string;
// // quantity: number;
// // promo:number // percentage of promo ; by default 0%   // is it the same of discount offer? what is actually a promo?

// cost: {
//   price: number;
//   quantity: number;
//   tax?: number; // percentage of tax ; by default 0%
//   totalAmount: number;
//   // currency: string;
// };

const columns = [
  {
    field: "item", // productName
    headerName: "ITEM",
    width: 450,
    renderCell: (props) => <ItemName props={props?.row?.productName} />,
  },
  {
    field: "hrsQty",
    headerName: "HRS/QTY",
    width: 160,

    renderCell: (props) => (
      <QuantityComponent props={props?.row?.cost?.quantity} />
    ),
  }, //
  {
    field: "rate",
    headerName: "RATE",
    width: 160,

    renderCell: (props) => <Rate props={props?.row?.cost?.price} />,
  }, //
  {
    field: "tax",
    headerName: "TAX",
    width: 160,
    renderCell: (props) => <Tax props={props?.row?.cost?.tax} />,
  }, //
  {
    field: "subtotal",
    headerName: "SUBTOTAL",
    width: 160,
    renderCell: (props) => <SubTotal props={props?.row?.cost?.totalAmount} />,
  }, // cost?.totalAmount
];

const columns1 = [
  {
    field: "header",
    headerName: "Invoice Summary",
    width: 400,
    headerAlign: "center",
  }, // Width of the combined header
  { field: "cell2", headerName: "", width: 150 },
];

// [
//   { id: 1, header: "Subtotal", cell2: "30,480" },
//   { id: 2, header: "Subtotal", cell2: "1900" },
//   { id: 3, header: "Total (Yen)", cell2: "32,380" },
// ];

const ViewModal = ({ viewOpen, setViewOpen, props: invoice }) => {
  // const toWords = new ToWords();
  // let total = toWords.convert(123);
  const rows1 = [
    ...invoice?.additionalProducts?.products?.map((each, id) => {
      return { id, header: "Subtotal", cell2: each?.cost?.totalAmount };
    }),
    {
      id: 3,
      header: "Total",
      cell2: invoice?.additionalProducts?.totalAmount || 0,
    },
  ];

  let dateInfo = "";

  try {
    if (invoice?.reservationRequest?.schedule?.schedules?.length) {
      let date, month, year;
      date = new Date(
        invoice.reservationRequest.schedule.schedules[0]
      ).getDate();
      month =
        new Date(invoice.reservationRequest.schedule.schedules[0]).getMonth() +
        1;

      year = new Date(
        invoice.reservationRequest.schedule.schedules[0]
      ).getFullYear();

      if (date && month && year) {
        dateInfo = `${date} ${month} ${year}`;
      } else {
        throw new Error("Invalid date");
      }
    } else {
      dateInfo = `no-scheduled`;
    }
  } catch (error) {
    dateInfo = `invalid`;
  }

  const {
    data: customerDetailsData,
    isLoading: isLoading3,
    isError: isError2,
    error: error2,
    isSuccess: isSuccess2,
  } = useGetCustomerDetailsQuery(invoice?.user);
  // console.log({ invoice });

  // const [editing, setEditing] = useState(false);
  // const [inputFields, setInputFields] = useState({
  //   item: "",
  //   hrsQty: "",
  //   rate: "",
  //   tax: "",
  //   subtotal: "",
  // });
  // const [gridRows, setGridRows] = useState(initialRows);

  // const handleInputChange = (field, value) => {
  //   setInputFields((prev) => ({ ...prev, [field]: value }));
  // };

  // const handleAddRow = () => {
  //   const newRow = { ...inputFields, id: gridRows.length + 1 };
  //   setGridRows((prevRows) => [...prevRows, newRow]);
  //   setInputFields({
  //     item: "",
  //     hrsQty: "",
  //     rate: "",
  //     tax: "",
  //     subtotal: "",
  //   });
  //   setEditing(false);
  // };

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "24px",
      }}
      open={viewOpen}
    >
      <Container
        sx={{
          width: "65%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            marginLeft: "24px",
          }}
        >
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "24px",
            marginRight: "24px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: "#5A6872",
                textAlign: "start",
                marginBlock: "8px",
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
                  Showa Co. Ltd
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
                marginBlock: "8px",
              }}
            >
              To
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", alignItems: "start" }}>
              <img
                src={customerDetailsData?.data?.showaUser?.photoUrl}
                alt="webscript"
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#5A6872",
                    // textAlign: "start",
                  }}
                >
                  {customerDetailsData?.data?.showaUser?.name?.firstName} {` `}
                  {customerDetailsData?.data?.showaUser?.name?.lastName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#5A6872",
                    // textAlign: "start",
                  }}
                >
                  {
                    customerDetailsData?.data?.showaUser?.addresses[0]?.address
                      ?.street
                  }
                  {`, `}
                  {
                    customerDetailsData?.data?.showaUser?.addresses[0]?.address
                      ?.city
                  }
                  {`, `}
                  {
                    customerDetailsData?.data?.showaUser?.addresses[0]?.address
                      ?.postalCode
                  }
                  {`, `}
                  {
                    customerDetailsData?.data?.showaUser?.addresses[0]?.address
                      ?.details
                  }
                  {`, `}
                  {
                    customerDetailsData?.data?.showaUser?.addresses[0]?.address
                      ?.country
                  }
                  {`, `}
                  {
                    customerDetailsData?.data?.showaUser?.addresses[0]?.address
                      ?.city
                  }
                  {`, `}
                  {customerDetailsData?.data?.email} {`, `}
                  {customerDetailsData?.data?.showaUser?.phone}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "24px",
            marginRight: "24px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#5A6872",
              marginBlock: "8px",
            }}
          >
            Invoice No. {invoice?.invoiceNo}
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#5A6872",
              marginBlock: "8px",
            }}
          >
            Due: {dateInfo}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#5A6872",
            marginBlock: "8px",
            marginLeft: "24px",
          }}
        >
          Invoice Date: Mar 19th, 2022
        </Typography>

        <div
          style={{
            height: "auto",
            width: "auto",
            marginLeft: "24px",
            marginRight: "24px",
          }}
        >
          <DataGrid
            rows={invoice?.additionalProducts?.products?.map((data, id) => {
              return { ...data, id };
            })}
            columns={columns}
          />
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginRight: "24px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#5A6872",
                marginBlock: "8px",
                marginLeft: "24px",
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
                marginLeft: "24px",
              }}
            >
              Thirty Two thousand Three Hundred Eighty Yen only
            </Typography>
          </Box>

          <div
            style={{
              height: "auto",
              width: "auto",
              marginLeft: "24px",
              marginRight: "24px",
            }}
          >
            <DataGrid rows={rows1} columns={columns1} />
          </div>
        </Box>
      </Container>
    </Modal>
  );
};

export default ViewModal;
