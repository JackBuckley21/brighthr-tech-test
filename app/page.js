'use client'

import Folders from "./components/folders";
import Files from "./components/files";
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { useState } from "react";


export default function Page() {
  const data = require("./data/data.json");
  const files = [];

  for (let i = 0; i < data.length; i++) {
    const file = data[i];
    files.push(file);
  }

  const folders = files.filter((file) => file.type === 'folder');
  const otherFiles = files.filter((file) => file.type !== 'folder');

  const [sortMode, setSortMode] = useState('Name'); 
  const [sortLabel, setSortLabel] = useState("Name");

  const handleSortedState = () => {
    setSortMode((prevState) => prevState === 'Name' ? 'Date Added' : 'Name'); 
    setSortLabel(sortMode);
  };

  const sortFiles = (sortMode) => {
    switch (sortMode) {
      case 'Date Added':
        return otherFiles.sort((a, b) => a.dateAdded - b.dateAdded);
      case 'Name':
        return otherFiles.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return otherFiles;
    }
  };
 
  const sortedFiles = sortFiles(sortMode); 

  return (
  
    <div className="flex justify-center my-3">
      <li className="list-none  space-y-2" key={files}>
        {folders.map((folder) => (
          <Folders name={folder.name} isSorted={sortMode}  />
        ))}
        <div className=" space-y-2">
          {sortedFiles.map((file) => (
            <Files
              name={file.name}
              type={file.type}
              dateAdded={file.added}
            />
          ))}
        </div>
      </li>
      <SortOutlinedIcon
        className="flex  h-10 w-10"
        onClick={handleSortedState}
      />
      Sort By {sortLabel}
      </div>
  );
}