import { Box, Button, FormControl, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Action from "../request/components/RequestAction";
import MachineStatusAction from "./component/MachineStatusAction";
import { columns } from "./component/constant";

const MachineStatus = () => {
  const [machine, setMachine] = useState([]);
  const [isShowActionOption, SetIsShowActionOption] = useState(false);

  const uid = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/customer/all-machine/user/${uid?.uid}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          // console.log({ machine: data?.data });
          setMachine(data?.data);
        } else {
          setMachine([]);
        }
      });
  }, [uid?.uid]);

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      {true && (
        <DataGrid
          rows={machine?.map((data, id) => {
            return { ...data, id };
          })}
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
        />
      )}
    </Box>
  );
};

export default MachineStatus;
