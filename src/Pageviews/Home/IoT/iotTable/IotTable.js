import { Box } from "@mui/system";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Cancel, Search } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import { useGetAllIotQuery } from "../../../../features/iot/iotSlice";
import Loader from "../../../../Utils/Loader";
import IotRawTable from "./IotRawTable";

const IotTable = () => {
  const {
    data: iot,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllIotQuery();

  if (isLoading || isError) {
    return <Loader />;
  }
  console.table(iot?.data);
  return (
    <Box sx={{ background: "white", padding: "20px", borderRadius: "4px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "44px",
            height: "44px",
            background: "#CED4DA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <TuneIcon />
        </Box>
        <TextField
          sx={{ width: "100%" }}
          size="small"
          placeholder="Search..."
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                // onClick={() => {
                //   setSearchText("");
                //   setSmallSearchOpen(false);
                // }}
                >
                  <Cancel />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* {iot?.data?.length > 0 && (
          <DataGrid
            rows={iot?.data?.map((data, id) => {
              return { ...data, id };
            })}
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
        )} */}
      <IotRawTable data={iot?.data} />
    </Box>
  );
};

// import React from "react";

// const IotTable = () => {
//   return <div>IotTable</div>;
// };

export default IotTable;
