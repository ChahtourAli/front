/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

const ImagePicker = ({
  input: { onChange },
  meta: { submitFailed, error, warning },
  maxFiles = 1,
  label,
}) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    onChange(photos);
  }, [photos]);

  const handleAddedFile = file => {
    setPhotos(prevArray => [...prevArray, file]);
  };

  const handleRemovedFile = file => {
    setPhotos(prevArray =>
      prevArray.filter(element => element.name !== file.name),
    );
  };

  const djsConfig = {
    maxFiles,
    acceptedFiles: 'image/jpeg,image/png',
    autoProcessQueue: false,
    dictDefaultMessage: label,
    previewTemplate: ReactDOMServer.renderToStaticMarkup(
      <div className="col h-100 mb-5">
        <div className="dz-preview dz-file-preview">
          <div className="d-flex justify-content-end dz-close-icon">
            <small className="fa fa-times" data-dz-remove="true" />
          </div>
          <div className="dz-details media">
            <div className="dz-img">
              <img
                className="img-fluid"
                data-dz-thumbnail="true"
                alt="upload"
              />
            </div>
            <div className="media-body dz-file-wrapper">
              <h6 className="dz-filename">
                <span className="dz-title" data-dz-name="true" />
              </h6>
              <div className="dz-size" data-dz-size="true" />
            </div>
          </div>
        </div>
      </div>,
    ),
  };

  let dropZoneRef;

  const initCallBack = dropzone => {
    dropZoneRef = dropzone;
  };

  const removeFile = () => {
    if (dropZoneRef) {
      dropZoneRef.removeFile(dropZoneRef.files[dropZoneRef.files.length - 1]);
    }
  };

  const componentConfig = {
    iconFiletypes: ['.jpg', '.png'],
    showFiletypeIcon: true,
    postUrl: 'no-url',
  };
  const eventHandlers = {
    addedfile: handleAddedFile,
    removedfile: handleRemovedFile,
    init: initCallBack,
    maxfilesexceeded: removeFile,
  };

  return (
    <>
      <DropzoneComponent
        config={componentConfig}
        djsConfig={djsConfig}
        eventHandlers={eventHandlers}
        className={`u-dropzone ${submitFailed &&
          (error || warning) &&
          'u-dropzone-has-error'}`}
      />
      {submitFailed &&
        ((error && (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            {error}
          </div>
        )) ||
          (warning && (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              {warning}
            </div>
          )))}
    </>
  );
};

ImagePicker.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  maxFiles: PropTypes.number,
  label: PropTypes.string,
};

export default ImagePicker;
