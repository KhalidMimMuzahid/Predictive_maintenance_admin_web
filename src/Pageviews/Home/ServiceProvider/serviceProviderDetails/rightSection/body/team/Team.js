import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Header/Header";
import { Cancel, Search } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useGetServiceProviderAllMembersByIdQuery } from "../../../../../../../features/serviceProvider/serviceProviderSlice";
import AddTeamMemberModal from "./allMembers/modal/AddTeamMemberModal";
import AllMembersTable from "./allMembers/AllMembersTable";
import AdminTable from "./admin/AdminTable";
import SubAdminTable from "./SubAdmin/SubAdminTable";
import BranchManagerTable from "./branchManager/BranchManagerTable";
import EngineersTable from "./engineers/EngineersTable";
import Loader from "../../../../../../../Utils/Loader";

const Team = () => {
  const [value, setValue] = useState("all");
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const handleChange = (e) => {};
  const { _id } = useParams();

  const {
    data: teamData,
    isLoading,
    isError,
    error,
  } = useGetServiceProviderAllMembersByIdQuery(_id);
  return (
    <>
      {addMemberOpen && (
        <AddTeamMemberModal
          addMemberOpen={addMemberOpen}
          setAddMemberOpen={setAddMemberOpen}
        />
      )}
      <Box
        sx={{
          margin: "auto",
          padding: "0 20px",
        }}
      >
        <Header
          addMemberOpen={addMemberOpen}
          setAddMemberOpen={setAddMemberOpen}
          value={value}
          setValue={setValue}
        />
        <Box sx={{ padding: "28px 0px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                    <IconButton // onClick={() => {
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
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel id="demo-simple-select-helper-label">
                Sort By
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Sort By"
                // onChange={handleChange}
              >
                <MenuItem value="newest">Newest</MenuItem>
                <MenuItem value="last_update">Last Update</MenuItem>
                <MenuItem value="oldest">Oldest</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {isLoading && <Loader />}
          {value === "all" && (
            <AllMembersTable allMembers={teamData?.data?.allMembers} />
          )}
          {value === "admin" && <AdminTable admin={teamData?.data?.admin} />}
          {value === "sub_admin" && (
            <SubAdminTable
              subAdmin={teamData?.data?.serviceProviderSubAdmins}
            />
          )}
          {value === "branch_manager" && (
            <BranchManagerTable
              branchManager={teamData?.data?.serviceProviderBranchManagers}
            />
          )}
          {value === "engineers" && (
            <EngineersTable
              engineers={teamData?.data?.serviceProviderEngineers}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Team;
