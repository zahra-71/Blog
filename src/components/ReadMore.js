import React, { useState } from 'react';
import { Button, Typography } from "@mui/material"

function ReadMore({description, limit}) {
    console.log("readmore")
    const [isReadMore, setIsReadMore] = useState(false);
    const handleClick = (e) => {
        e.preventDefault()
        setIsReadMore(!isReadMore)
    }

  return (
    <div>
      <Typography>
        {isReadMore ? description : description.substr(0,limit)}
      </Typography>
      <Button onClick={handleClick}
        sx={{
          '&:hover': { color: "#16213E"} 
        }}
      >
        مطالعه {isReadMore? "کمتر" : "بیشتر"}
      </Button>
    </div>
  )
}

export default React.memo(ReadMore);