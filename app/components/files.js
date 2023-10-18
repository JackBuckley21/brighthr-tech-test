import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const Files = ({name, type}) => {
    return (
        <div className='flex bg-gray-200 rounded-xl px-9'> 
            <DescriptionOutlinedIcon/>
            {name}.{type}
    </div>
  )
}

export default Files
