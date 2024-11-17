import React, { useState } from "react";
import axios from "axios";

const UploadFile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://uploads.pinata.cloud/v3/files",
        formData,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
          },
        }
      );

      const ipfsHash = response.data.IpfsHash;
      const gatewayUrl = process.env.GATEWAY_URL || "https://gateway.pinata.cloud/ipfs";
      const url = `${gatewayUrl}/${ipfsHash}`;
      setFileUrl(url);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload Company Data</h1>
      <input type="file" accept=".txt,.json" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {fileUrl && (
        <div>
          <h2>File URL:</h2>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
