'use client'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    const foundFiles = findFilesByFolderName(name);
    setIsExpanded(!isExpanded);
    setFiles(foundFiles);
  };

  const arrowIcon = !isExpanded ? <ArrowDropDownOutlinedIcon onClick={handleClick} /> : <ArrowDropUpOutlinedIcon onClick={handleClick} />;

  return (
    <div className='flex bg-gray-200 rounded-xl p-9' >
      <FolderOpenOutlinedIcon/>
      {name}
      {arrowIcon }
    

      <span className='justify-start col-span-1 mt-5 '>
      {files.length > 0 && isExpanded && (
          <li>
            <row className="mx-3 space-y-2">
          {files.map((file) => (
            <Files name={file.name}
              type={file.type}
              dateAdded={file.added}
            />
          ))}
              </row>
          </li>
        )}
         </span>
    </div>
  )
}

export default Folders
