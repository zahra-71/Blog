import React from 'react';
import { Paper,Box, Typography, Grid } from "@mui/material";

// components
import ReadMore from './ReadMore';

// for read more with styles
// import  classNames  from 'classnames';
// import lodash from "lodash";
// import useStyles from "./styles";

function MainFeaturedPost({post}) {
    // console.log("mainFeature")

    // for read more with styles
    // const classes = useStyles();
    // const [showButton, setShowButton] = useState(true);
    // const containerRef = useRef(null);

    // const handleClick = () => {
    //     setIsReadMore(!isReadMore)
    // }

  return (
    <Paper
      variant="outlined"
      sx={{
        position: 'relative',
        bgroundColor: 'grey.800',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        color: '#fff',
        mb: 4,
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* <img src={post.image} alt={post.imageText} 
        style={{
          // maxWidth: window.innerWidth,
          // backgroundPosition: "center",
          display: 'none'
        }}
      /> */}
      <Box>
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: {xs:3 , md:6},
              }}
            >
              <Typography component="h1" variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <ReadMore description={post.description} limit={50} />
                {/* read mores with style */}
                {/* <Typography 
                  className={classNames(classes.clamp, clamped && classes.longtext)}
                  ref={containerRef}
                >
                  {post.description}
                </Typography>
                {showButton && (
                  <Button onClick={handleClick}>
                    مطالعه {clamped? "بیشتر" : "کمتر"}
                  </Button>
                )} */}  
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )}

export default React.memo(MainFeaturedPost);