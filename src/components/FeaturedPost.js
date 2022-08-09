import React from 'react';
import { Grid, CardActionArea, Card, CardContent, 
    CardMedia, Typography, Button } from "@mui/material";
import ReadMore from './ReadMore';

function FeaturedPost({post}) {
    // console.log("FeaturedPost")
  
  return (
    <Grid item xs={12} md={6}>
        <CardActionArea component="a"  href="#">
            <Card sx={{display: "flex"}}>
                <CardContent sx={{flex: 1}}>
                    <Typography variant="h5">
                        {post.title}
                    </Typography>
                    <Typography color="text.secondary">
                        {post.date}
                    </Typography>
                    <ReadMore description={post.description} limit={10} />
                </CardContent>
                <CardMedia 
                    component="img"
                    image={post.image}
                    sx={{width: 160, display: {xs: "none", sm: "block"}}}
                    alt={post.imageLabel}
                />
            </Card>
        </CardActionArea>
    </Grid>
  )
}

export default React.memo(FeaturedPost);