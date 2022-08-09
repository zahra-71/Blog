import React from 'react';
import { Box, Container, Typography, Link } from "@mui/material";

function Footer({title, description}) {
  console.log("footer")
  return (
    <Box component="footer" sx={{py: 6,bgcolor: "Background.paper"}}>
        <Container maxWidth="lg" align="center">
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography 
                variant="subtitle1" 
                color="text.secondary"
                component="p"
            >
                {description}
            </Typography>
            <Copyright />
        </Container>

    </Box>
  )
}

export default React.memo(Footer);

function Copyright() {
  return (
    <Typography color="text.secondary">
        {'  کپی رایت © '}
        <Link color="inherit">وبلاگ</Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    

  )
}