import { Divider, Grid, Typography } from '@mui/material'
import React from 'react';
import PropTypes from 'prop-types';

// components
import MarkDown from './MarkDown/MarkDown'

function Main({title, postone, posttwo}) {

  console.log("post in main")

  return (
    <Grid item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
        mb: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <MarkDown className="markdown" >
        {postone}
      </MarkDown>
      <MarkDown className="markdown" >
        {posttwo}
      </MarkDown>
    </Grid>
  )
}

// Main.propTypes = {
//     posts: PropTypes.arrayOf(PropTypes.string).isRequired,
//     title: PropTypes.string.isRequired,
// };

export default React.memo(Main);