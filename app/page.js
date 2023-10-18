'use client'

import Folders from "./components/folders";
import Files from "./components/files";
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { useState } from "react";


export default function Page() {
  const data = require("./data/data.json")
  const files = [];
  
  for (let i = 0; i < data.length; i++) {
    const file = data[i]
    files.push(file);
  
  }

  const folders = files.filter((file) => file.type === 'folder');
  const otherFiles = files.filter((file) => file.type !== 'folder');

  const [isSorted, setSorted] = useState(false);

  const handleSortedState = () => {
    setSorted((prevState) => !prevState);
  };
  
  const sortFilesByDate = otherFiles.sort((a, b) => a.dateAdded - b.dateAdded)
  const sortFilesByName = otherFiles.sort((a, b) => a.name.localeCompare(b.name))

  
  
  return (
    <div className="flex justify-center my-3">
      <li className="list-none  space-y-2" key={files}>
    {folders.map((folder) => (
      <Folders name={folder.name} />
    ))}
        <div className=" space-y-2">
         { isSorted? sortFilesByDate.map((file) => (
           <Files name={file.name}
             type={file.type}
              dateAdded={file.added}
           />
         )): sortFilesByName.map((file) => (
           <Files name={file.name}
             type={file.type}
              dateAdded={file.added}
           />
         ))}
          </div>
      </li>
      <SortOutlinedIcon className="flex  h-10 w-10" onClick={handleSortedState} /> Sort
      </div>
)}