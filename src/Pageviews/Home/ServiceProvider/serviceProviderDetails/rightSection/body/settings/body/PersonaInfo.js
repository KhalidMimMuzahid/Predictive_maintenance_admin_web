import { Cancel, EditOutlined } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";
import doc1 from "../../../../../../../../Assets/Home/service_provider/doc1.png";
import doc2 from "../../../../../../../../Assets/Home/service_provider/doc2.png";
import profileImage from "../../../../../../../../Assets/Home/service_provider/profile_image.png";
import addPhoto from "../../../../../../../../Assets/Home/marketplace/add_photo_box.png";
// import addPhoto from "../../../../../Assets/Home/marketplace/add_photo_box.png";

const PersonaInfo = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const imageUploadFunc = (e) => {
    setUploadedImage(URL.createObjectURL(e.target.files[0]));
  };
  const [docImages, setDocImages] = useState([]);
  console.log(docImages);

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]?.name) {
      const files = event.target.files;
      const fileName = files[0].name;
      const fileType = files[0].type;

      const imageUp = await fetch(
        `${process.env.REACT_APP_BASE_URL}/extra-data/upload-photo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileName,
            fileType,
            file: JSON.stringify(event?.target?.files[0]),
            folder: "marketplace",
          }),
        }
      );
      const imageUrl = await imageUp.json();
      const parseUrl = new URL(imageUrl?.data?.url);
      console.log("Image URL  ", parseUrl);

      setDocImages((prev) => {
        prev.push({
          photoUrl: URL.createObjectURL(event.target.files[0]),
        });
      });
    }
  };

  return (
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
            Personal Info
          </Typography>

          <Button onClick={() => setEditOpen(!editOpen)}>
            <img src={editIcon} alt="" />
          </Button>
        </Box>
        {/* View Start */}
        {!editOpen && (
          <Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={profileImage} alt="" />
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
                  width: "25%",
                }}
              >
                Company Name
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                ANTT Robotics Ltd.
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
                  width: "25%",
                }}
              >
                Company Reg No.
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                109890354398945345
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
                  width: "25%",
                }}
              >
                Email
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                antt.dev.intern@gmail.com
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
                  width: "25%",
                }}
              >
                Select Type of Service
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                Washing Machine Service
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
                  width: "25%",
                }}
              >
                Total Number of Stuff
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                145
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
                  width: "25%",
                }}
              >
                Company’s Capital Size{" "}
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                ¥145
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
                  width: "25%",
                }}
              >
                Documents
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
                  <img src={doc1} alt="" />
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
                  <img src={doc2} alt="" />
                </Box>
              </Box>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          </Box>
        )}
        {/* View End */}
        {/* Edit Start */}
        {editOpen && (
          <Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            {uploadedImage ? (
              <Box
                sx={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <button
                  onClick={() => setUploadedImage(null)}
                  style={{
                    position: "absolute",
                    background: "#D7E0E7",
                    width: "24px",
                    height: "24px",
                    borderRadius: "100%",
                    padding: "0px",
                    right: 1,
                    top: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "0px",
                    cursor: "pointer",
                  }}
                >
                  <Cancel sx={{ color: "red", fontSize: "18px" }} />
                </button>
                <img
                  style={{
                    border: "1px solid #D7E0E7",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100px",
                    height: "100px",
                  }}
                  src={uploadedImage}
                  alt=""
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <label
                  style={{
                    border: "1px solid #D7E0E7",
                    borderRadius: "5px",
                    width: "100px",
                    height: "100px",
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
                    onChange={imageUploadFunc}
                  />
                  <img src={addPhoto} alt="" />
                </label>
                <Typography
                  sx={{ color: "#868DAA", fontWeight: "600", fontSize: "14px" }}
                >
                  Edit Image
                </Typography>
              </Box>
            )}
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />

            <Box
              sx={{
                padding: "16px 24px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
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
                label="Email"
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
                label="Company Reg No."
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
                label="Select Type of Service"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Total Number of Stuff"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Company’s Capital Size"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
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
                Update Documents
              </Typography>

              <Box
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
              </Box>
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
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
          </Box>
        )}
        {/* Edit End */}
      </Box>
    </Box>
  );
};

export default PersonaInfo;
