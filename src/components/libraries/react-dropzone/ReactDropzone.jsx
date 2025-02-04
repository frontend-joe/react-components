import "./ReactDropzone.css";
import { useDropzone } from "react-dropzone";
import icon from "./icon.svg";

export const ReactDropzone = () => {
  const onDrop = (acceptedFiles) => {
    // Do something with the files
  };
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  return (
    <section className="page dropzone-page">
      <div className="dropzone-card">
        <div>
          <h2>Upload Files</h2>
          <h3>Fast and easy</h3>
        </div>
        <div className="dropzone" {...getRootProps()}>
          <img src={icon} />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        {files.length > 0 && (
          <>
            <h4>Files</h4>
            <ul>{files}</ul>
          </>
        )}
      </div>
    </section>
  );
};
