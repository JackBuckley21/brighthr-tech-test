import Folders from "./components/folders";
import Files from "./components/files";


export default function Page() {
  const data = require("./data/data.json")


  const files = [];
  
  for (let i = 0; i < data.length; i++) {
    const file = data[i]
    files.push(file);
  
  }

  const folders = files.filter((file) => file.type === 'folder');
const otherFiles = files.filter((file) => file.type !== 'folder');
  
  return (
    <div className="flex justify-center my-3">
      <li className="list-none space-y-2">
    {folders.map((folder) => (
      <Folders name={folder.name} />
    ))}
         {otherFiles.map((file) => (
           <Files name={file.name}
             type={file.type} />
    ))}</li>
      </div>
)}