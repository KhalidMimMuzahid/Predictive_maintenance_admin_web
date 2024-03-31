import { json2csv } from "json-2-csv";

function downloadCSV(csvString, filename) {
  // Create a Blob from the CSV string
  var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

  // Create a temporary anchor element
  var link = document.createElement("a");

  // Set the href attribute of the anchor to the Blob URL
  if (link.download !== undefined) {
    // feature detection
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the download by simulating a click
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export const downloadTableData = async (downloadData, setDownloadData) => {
  console.log({ downloadData });

  const fileName = downloadData?.fileName || "Table Data";

  const csv = json2csv(downloadData?.selectedRowData);
  downloadCSV(csv, fileName);
  setDownloadData([]);
};
