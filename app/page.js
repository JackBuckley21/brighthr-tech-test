import Folders from "./components/folders";


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
    <div className="flex justify-center">
      <li className="list-none">
    {folders.map((folder) => (
      <Folders name={folder.name} />
    ))}
         {otherFiles.map((file) => (
      <div>{file.name}.{file.type}</div>
    ))}</li>
      </div>
)}