import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from "@mui/material";
import ProgressingLoader from "../ProgressingLoader";

const TableGenerator = ({ data, postPdfData, postData, isLoading }) => {
  const generatePDF = () => {
    postPdfData(postData);
    const doc = new jsPDF();

    if (data) {
      // Define columns
      const columns = [
        "Date",
        "Time",
        "Section Name",
        "Vibration",
        "Temperature",
        "Health",
      ];

      // Map data array to rows for the table
      const rows = data?.sensorDataWithHealthStatus?.map((item) => [
        item?.createdAt?.split("T")[0],
        item?.createdAt?.split("T")[1]?.split(".")[0],
        item.aiData?.sectionName,
        item?.aiData?.sensorData?.vibration,
        item?.aiData?.sensorData?.temperature,
        item.aiData?.healthStatus,
      ]);

      // Title text
      const title = "Sensors Reading with Predictions";

      // Get the width of the title text
      const titleWidth = doc.getTextWidth(title);

      // Set the title color and font style
      doc.setTextColor(36, 69, 156); // RGB color for #24459c
      doc.setFont("helvetica", "bold"); // Set font to Helvetica and bold style

      // Calculate the X coordinate to center the title
      const x = (doc.internal.pageSize.width - titleWidth) / 2;

      // Add the title to the PDF, centered
      doc.text(title, x, 20);

      // Add the table to the PDF with custom styles
      doc.autoTable({
        head: [columns],
        body: rows,
        startY: 30, // Start table below the title
        theme: "striped", // Theme can be 'striped', 'grid', or 'plain'
        headStyles: {
          fillColor: [36, 69, 156], // Header background color
          textColor: 255, // Header text color (white)
          fontSize: 12, // Header font size
          fontStyle: "bold", // Header font style
        },
        bodyStyles: {
          fillColor: [245, 245, 245], // Alternating row color
          textColor: 50, // Text color
          fontSize: 10, // Font size
          lineColor: [200, 200, 200], // Border color
          lineWidth: 0.5, // Border width
        },
        alternateRowStyles: {
          fillColor: [255, 255, 255], // Alternate row color
        },
        margin: { top: 30 }, // Margin from the top of the page
        styles: {
          cellPadding: 4, // Cell padding
          overflow: "linebreak", // Handle text overflow
          valign: "middle", // Vertical alignment
          halign: "center", // Horizontal alignment
        },
        columnStyles: {
          0: { halign: "left", fillColor: [220, 220, 220] }, // ID column: align left with a different color
          1: { halign: "center" }, // Name column: center align
          2: { halign: "right" }, // Country column: align right
        },
      });

      // Save the PDF
      doc.save("Sensors Reading with Predictions.pdf");
    }
  };

  return (
    <div>
      <Button
        onClick={() => generatePDF()}
        sx={{
          color: "white",
          backgroundColor: "#24459C",
          minWidth: 180,
        }}
        variant="contained"
      >
        {isLoading ? <ProgressingLoader /> : "Download"}
      </Button>
    </div>
  );
};

export default TableGenerator;
