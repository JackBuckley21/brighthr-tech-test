'use client'

import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const Files = ({name, type, dateAdded}) => {
    return (
        <div className='flex bg-gray-200 rounded-xl px-9 grid-rows-1 space-x-4 p-1'> 
            <DescriptionOutlinedIcon/>
        {name}.{type}
        <div className='flex space-x-4'>
          Date added: {dateAdded}
          </div>
    </div>
  )
}

export default Files
