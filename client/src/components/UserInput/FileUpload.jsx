import React, { useContext } from 'react';

import { UserInputContext } from './UserInput';

import { censorDocument } from '../../api/api';

import './file-upload.css';

const FileUpload = () => {
  const {
    file,
    setFile,
    statusText,
    setStatusText,
    banString,
    onFileCensored,
    handleLoading,
  } = useContext(UserInputContext);

  const handleSendFile = async () => {
    const postForm = new FormData();
    postForm.append('data', file);
    postForm.append('banText', banString);

    handleLoading(true);
    const response = await censorDocument(postForm).catch(console.error);
    if (!response) {
      onFileCensored('');
    }

    handleLoading(false);
    onFileCensored(response.document);
    setStatusText(response?.statusText);
  };

  return (
    <div className="file-upload-container">
      <div className="file-picker">
        <label htmlFor="text-file-input">Select a Document:</label>
        <input
          id="text-file-input"
          name="text-file-input"
          type="file"
          accept=".txt"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </div>
      {file ? (
        <button className="upload-button" onClick={handleSendFile}>
          Upload Document
        </button>
      ) : null}
      <pre>{statusText}</pre>
    </div>
  );
};

export default FileUpload;
