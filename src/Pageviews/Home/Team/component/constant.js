import { Box, Button, Typography } from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";
import { MoreVert } from "@mui/icons-material";

export const columns = [
  {
    field: "companyName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        COMPANY NAME
      </Typography>
    ),
    width: 300,
    renderCell: (props) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0 16px",
        }}
      >
        <Box
          sx={{
            width: "36px",
            height: "36px",
            borderRadius: "100%",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnchorIcon sx={{ color: "#F15F5F" }} />
        </Box>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: "#25213B",
              fontWeight: "600",
              fontSize: "12px",
              textTransform: "uppercase",
            }}
          >
            {props?.row?.companyName}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "location",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        LOCATION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => (
      <Box
        sx={{
          color: "#25213B",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#25213B",
            fontWeight: "600",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          {props?.row?.location?.street}{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography>{props?.row?.location?.city}</Typography>
          <Typography>{props?.row?.location?.country}</Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "email",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        EMAIL
      </Typography>
    ),
    width: 230,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{ color: "#6B7280", fontSize: "14px", fontWeight: "400" }}
      >
        {params?.row?.email}
      </Typography>
    ),
  },
  {
    field: "totalMember",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        TOTAL MEMBER
      </Typography>
    ),
    width: 250,
    renderCell: (params) => (
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "12px",
            color: "#25213B",
          }}
        >
          {params?.row?.totalMember?.length}
        </Typography>
      </Box>
    ),
  },
  {
    field: "manager",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        MANAGER
      </Typography>
    ),
    width: 280,
    renderCell: (props) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: "0 8px" }}>
        <img
          src={
            props?.row?.companyBasicInfo?.shopInfo
              ?.companyRegDocumentPhotoAddress
          }
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "100%",
            border: "1px solid yellow",
          }}
          alt="Manager"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            {props?.row?.manager?.name}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "12px",
            }}
          >
            {props?.row?.manager?.phone}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "action",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontSize: "14px", fontWeight: "600" }}
      >
        ACTION
      </Typography>
    ),
    width: 100,
    renderCell: (props) => (
      <Button>
        <MoreVert />
      </Button>
    ),
  },
];
