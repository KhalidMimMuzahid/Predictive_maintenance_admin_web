import { Box, Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Action from "../request/components/RequestAction";
import MachineStatusAction from "./component/MachineStatusAction";
import { columns } from "./component/constant";
import { AppContext } from "../../../../../../../contextApi/appProvider";

const MachineStatus = () => {
  const [machine, setMachine] = useState([]);
  const [isShowActionOption, SetIsShowActionOption] = useState(false);

  const { setDownloadData } = useContext(AppContext);

  const uid = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/all-machine/user/${uid?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          // console.log({ machine: data?.data });
          setMachine(data?.data);
        } else {
          setMachine([]);
        }
      });
  }, [uid?.uid]);

  const rowsTemp = machine?.map((data, id) => {
    return { ...data, id };
  });
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      {true && (
        <DataGrid
          rows={rowsTemp}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(data, index) => {
            const selectedRowData = data?.map((index, i) => {
              return {
                "SL No": i + 1,
                name: rowsTemp[index]?.name,
                model: rowsTemp[index]?.model,
                brand: rowsTemp[index]?.brand,
                typeOfMachine: rowsTemp[index]?.typeOfMachine,
                typeOfShop: rowsTemp[index]?.typeOfShop,
                environment: rowsTemp[index]?.environment,
                address: rowsTemp[index]?.address,
                uid: rowsTemp[index]?.uid,
                _id: rowsTemp[index]?._id,
              };
            });
            setDownloadData({
              selectedRowData,
              fileName: "Machine Data Details",
            });
          }}
        />
      )}
    </Box>
  );
};

export default MachineStatus;
