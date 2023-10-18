'use client'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import React, { useState } from 'react';
import Files from './files';


const findFilesByFolderName = (folderName) => {
    const jsonFile = require('../data/data.json');
    const files = [];
  
  for (let i = 0; i < jsonFile.length; i++) {
    const file = jsonFile[i]
    files.push(file);
  
  }
  
    const folder = files.find((folder) => folder.name === folderName);
    if (folder) {
      return folder.files;
    } else {
      return [];
    }
  };

const Folders = ({ name }) => {
  const [files, setFiles] = useState([]);

  const handleClick = () => {
    // Find the files related to the folder
    const foundFiles = findFilesByFolderName(name);

    // Set the files in state
    setFiles(foundFiles);
  };

  return (
    <div className='flex bg-gray-200 rounded-xl px-9' onClick={handleClick}>
      <FolderOpenOutlinedIcon/>
      {name}

     
      {files.length > 0 && (
        <li className='justify-start col-span-1 mt-5 '>
          {files.map((file) => (
            <Files name={file.name}
              type={file.type} />
          ))}
        </li>
        )}
    </div>
  )
}

export default Folders
