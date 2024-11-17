import React, { useState } from "react";
import axios from "axios";

const ListFiles: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.pinata.cloud/v3/files", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PINATA_JWT}`,
        },
      });
      setFiles(response.data.rows);
    } catch (error) {
      console.error("Error fetching files:", error);
      alert("Failed to fetch files. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>List Uploaded Files</h1>
      <button onClick={fetchFiles} disabled={loading}>
        {loading ? "Loading..." : "Fetch Files"}
      </button>
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              <a
                href={`${process.env.GATEWAY_URL || "https://gateway.pinata.cloud/ipfs"}/${file.cid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name || `File ${index + 1}`}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListFiles;
