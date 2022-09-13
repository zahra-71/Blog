import React from 'react';
import { Button, IconButton, Link, Toolbar, Typography,
    InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// styles
import useStyles from "./styles";

function Header({sections, title}) {

  const classes = useStyles();
  // console.log("header")

  return (
    <React.Fragment>
      <Toolbar 
        sx={{ borderBottom: 1, borderColor: "divider"}}
      >
        <Button variant="outlined"
          sx={{
            '&:hover': { color: "#16213E",
            borderColor: "#16213E",
            } 
          }}
        >
          ثبت‌نام
        </Button>
        <IconButton className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon classes={{ root: classes.headerIcon }} />  
          </div>
          <InputBase 
            placeholder="جستجو..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              focused: classes.inputFocused
            }}
          />
        </IconButton>
        <Typography
          variant="h5"
          align="center"
          sx={{flex: 1}}
        >
          {title}
        </Typography>
        <Button
          sx={{
            '&:hover': { color: "#16213E"} 
          }}
        >
          اشتراک گذاری
        </Button>
      </Toolbar>
      <Toolbar
        sx={{ justifyContent: "space-between", overflowX: "auto"}}
      >
        {sections.map((section) => (
          <Link
            sx={{p: 1, flexShrink: 0,
              '&:hover': {color: "#16213E"}
            }}
            key={section.title}
            href={section.url}
            underline="none"
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>     
  )}

export default React.memo(Header)