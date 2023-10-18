import React from 'react'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

const icon = FolderOpenOutlinedIcon

const Folders = ({name}) => {
    return (
        <div> 
            <FolderOpenOutlinedIcon/>
            {name}
    </div>
  )
}

export default Folders
