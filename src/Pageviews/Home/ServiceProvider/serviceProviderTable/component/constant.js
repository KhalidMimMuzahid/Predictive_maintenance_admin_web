import { Box, Typography } from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";
import ServiceProviderTableAction from "./ServiceProviderTableAction";

export const columns = [
  {
    headerClassName: "table-header",
    field: "companyName",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        SERVICE PROVIDER NAME
      </Typography>
    ),
    width: 200,
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
            {props?.row?.companyBasicInfo?.companyName}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    headerClassName: "table-header",
    field: "address",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        LOCATION
      </Typography>
    ),
    width: 250,
    renderCell: (props) => (
      <Box>
        <Box
          sx={{
            color: "#25213B",
            fontSize: "12px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography>
            {props?.row?.companyBasicInfo?.address?.postalCode},{" "}
          </Typography>
          <Typography>
            {props?.row?.companyBasicInfo?.address?.bldgNameRoomNo}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#6B7280",
            fontSize: "8px",
            fontWeight: "400",
          }}
        >
          <Typography>
            {props?.row?.companyBasicInfo?.address?.streetAddress},{" "}
          </Typography>
          <Typography>
            {props?.row?.companyBasicInfo?.address?.cityAddress}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    headerClassName: "table-header",
    field: "email",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        LOCATION
      </Typography>
    ),
    width: 230,
    renderCell: (params) => (
      <Typography
        variant="p"
        sx={{ color: "#6B7280", fontSize: "12px", fontWeight: "400" }}
      >
        {params?.row?.companyBasicInfo?.emergencyContact?.email}
      </Typography>
    ),
  },
  {
    headerClassName: "table-header",
    field: "total_orders",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        TOTAL ORDERS
      </Typography>
    ),
    width: 200,
    renderCell: (params) => (
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="p"
          sx={{
            fontSize: "12px",
            color: "#25213B",
          }}
        >
          {params?.row?.total_orders}
        </Typography>
      </Box>
    ),
  },
  {
    headerClassName: "table-header",
    field: "manager",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
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
            {props?.row?.companyBasicInfo?.emergencyContact?.persInCharge}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "12px",
            }}
          >
            {props?.row?.companyBasicInfo?.emergencyContact?.contact}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    headerClassName: "table-header",
    field: "status",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        STATUS
      </Typography>
    ),
    width: 155,
    renderCell: (props) => (
      <Box>
        {props?.row?.status === "Pending" && (
          <Typography
            sx={{
              border: "1px solid #FFA503",
              width: "60px",
              textAlign: "center",
              padding: "2px 8px",
              borderRadius: "20px",
              fontSize: "10px",
              color: "#FFA503",
            }}
          >
            Pending
          </Typography>
        )}
        {props?.row?.status === "Active" && (
          <Typography
            sx={{
              border: "1px solid #2FD573",
              width: "60px",
              textAlign: "center",
              padding: "2px 8px",
              borderRadius: "20px",
              fontSize: "10px",
              color: "#2FD573",
            }}
          >
            Active
          </Typography>
        )}
        {props?.row?.status === "Suspended" && (
          <Typography
            sx={{
              border: "1px solid #FF4858",
              width: "60px",
              textAlign: "center",
              padding: "2px 8px",
              borderRadius: "20px",
              fontSize: "10px",
              color: "#FF4858",
            }}
          >
            Suspended
          </Typography>
        )}
      </Box>
    ),
  },
  {
    headerClassName: "table-header",
    field: "action",
    headerName: (
      <Typography
        sx={{ color: "#6E6893", fontWeight: "600", fontSize: "14px" }}
      >
        ACTION
      </Typography>
    ),
    width: 140,
    renderCell: (props) => <ServiceProviderTableAction props={props} />,
  },
];
