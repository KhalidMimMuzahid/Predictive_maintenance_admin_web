import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { usePostBidsAssignMutation } from "../../../../../features/resGroup/resGroupSlice";

const ViewBidsModal = ({
  viewBidsModal,
  setViewBidsModal,
  reservationRequestGroup,
  props,
}) => {
  const [postBidId, { data, isError, error, isLoading, isSuccess }] =
    usePostBidsAssignMutation();

  useEffect(() => {
    if (isSuccess & !isLoading) {
      alert(data?.message);
      console.log(data);
    }
    if (isError & !isLoading) {
      alert(error?.data?.message);
      console.log(error);
    }
  }, [isLoading]);
  //   Assign
  const assign = (_id) => {
    console.log("Coming through button", _id);
    postBidId({ reservationRequestGroup, _id });
  };

  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={viewBidsModal}
    >
      <Container
        sx={{
          width: "50%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            View Bids
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setViewBidsModal(!viewBidsModal);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box>
          <Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableCell sx={{ width: "20%" }}>ID</TableCell>
                  <TableCell sx={{ width: "20%" }}>Bidding User</TableCell>
                  <TableCell sx={{ width: "20%" }}>
                    Service Provider Company
                  </TableCell>
                  <TableCell sx={{ width: "25%" }}>Bidding Amount</TableCell>
                  <TableCell sx={{ width: "15%" }}>Action</TableCell>
                </TableHead>
                <TableBody>
                  {props?.allBids?.map((bid, i) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {bid?._id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {bid?.biddingUser}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {bid?.serviceProviderCompany}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ textAlign: "center" }}
                      >
                        {bid?.biddingAmount}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Button
                          onClick={() => assign(bid?._id)}
                          sx={{
                            padding: "6px 24px",
                            background: "#24459C",
                            color: "white",
                            "&:hover": {
                              background: "#24459C",
                            },
                          }}
                        >
                          Assign
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default ViewBidsModal;
