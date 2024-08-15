import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";
import shop1 from "../../../../../../../../Assets/Home/service_provider/shop_photo1.png";
import shop2 from "../../../../../../../../Assets/Home/service_provider/shop_photo1.png";
import LocationMapModal from "../component/LocationMapModal";

const Address = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [viewLocation, setViewLocation] = useState(false);
  return (
    <>
      {viewLocation && (
        <LocationMapModal
          viewLocation={viewLocation}
          setViewLocation={setViewLocation}
        />
      )}
      <Box sx={{ padding: "12px 60px" }}>
        <Box sx={{ paddingY: "12px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "16px 24px",
            }}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}
            >
              Address
            </Typography>

            <Button onClick={() => setEditOpen(!editOpen)}>
              <img src={editIcon} alt="" />
            </Button>
          </Box>
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          {!editOpen && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "15%",
                  }}
                >
                  Postal Code
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  12345
                </Typography>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "15%",
                  }}
                >
                  Prefecture
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  OSAKA - 大阪府
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "15%",
                  }}
                >
                  Address1
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  Hakonora - 箱の浦, Hannanshi - 阪南市
                </Typography>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "15%",
                  }}
                >
                  Address2
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  208-1294, Kamishingashi, Kamgashi, #879
                </Typography>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "15%",
                  }}
                >
                  Map Location
                </Typography>

                <Button
                  onClick={() => {
                    setViewLocation(!viewLocation);
                  }}
                  sx={{
                    backgroundColor: "#24459c",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "20px",
                    padding: "4px 24px",
                    fontWeight: "500",
                    "&:hover": {
                      background: "#24459C",
                    },
                  }}
                >
                  Google Map Location
                </Button>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "15%",
                  }}
                >
                  Shop Photo
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  <Box
                    sx={{
                      background: "white",
                      boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                      padding: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={shop1} alt="" />
                  </Box>
                  <Box
                    sx={{
                      background: "white",
                      boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                      padding: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={shop2} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {editOpen && (
            <Box>
              <Box
                sx={{
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  size="small"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "50%",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Prefecture"
                  variant="outlined"
                  size="small"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "50%",
                  }}
                />
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Address1"
                  variant="outlined"
                  size="small"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "50%",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Address2"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "50%",
                  }}
                />
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                    width: "25%",
                  }}
                >
                  Update Shop Photos
                </Typography>

                {/* <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  {docImages?.length > 0 &&
                    docImages?.map((photo, i) => (
                      <Box sx={{ position: "relative" }}>
                        <button
                          // onClick={() => removeImage(i)}
                          style={{
                            position: "absolute",
                            background: "#D7E0E7",
                            width: "32px",
                            height: "32px",
                            borderRadius: "100%",
                            padding: "0px",
                            right: 4,
                            top: 4,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "0px",
                            cursor: "pointer",
                          }}
                        >
                          <Cancel sx={{ color: "red" }} />
                        </button>
                        <img
                          style={{
                            border: "1px solid #D7E0E7",
                            borderRadius: "5px",
                            width: "150px",
                            height: "150px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          src={photo}
                          alt=""
                        />
                      </Box>
                    ))}

                  {(docImages?.length <= 4 || !docImages?.length) && (
                    <label
                      style={{
                        border: "1px solid #D7E0E7",
                        borderRadius: "5px",
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={onImageChange}
                      />
                      <img src={addPhoto} alt="" />
                    </label>
                  )}
                </Box> */}
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  padding: "16px 24px",
                }}
              >
                <Button
                  sx={{
                    background: "#24459C",
                    color: "white",
                    fontWeight: "600",
                    padding: "6px 36px",
                    textTransform: "none",
                    "&:hover": {
                      background: "#24459C",
                      opacity: "75%",
                    },
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          )}
          <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        </Box>
      </Box>
    </>
  );
};

export default Address;
