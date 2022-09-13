import React from 'react';
import { Grid, Paper, Typography, Link, Stack } from "@mui/material";

function Sidebar({sidebar}) {

  console.log("sidebar")
  
  return (
    <Grid item xs={12} md={4}>
        <Paper elevation={0} sx={{p: 2, bgcolor: 'grey.200'}}>
          <Typography variant="h6" gutterBottom>{sidebar.title}</Typography>
          <Typography>{sidebar.description}</Typography>
        </Paper>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          آرشیو
        </Typography>
        {sidebar.archives.map((archive) => (
          <Link display="block" 
            key={archive.title} 
            href={archive.url}
            variant="body1"
            underline="none"
            sx={{
              '&:hover':{
                color: "#16213E"
              }
            }}
          >
            {archive.title}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          شبکه‌های اجتماعی
        </Typography>
        {sidebar.social.map((network) => (
          <Link 
            display="block" 
            href={network.url}
            key={network.name}
            variant="body1"
            underline="none"
            sx={{
              '&:hover':{
                color: "#16213E"
              }
            }}
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
          </Link>
        ))}
    </Grid>
  )
}

export default React.memo(Sidebar)