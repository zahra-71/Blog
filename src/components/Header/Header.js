import React from 'react';
import { Button, IconButton, Link, Toolbar, Typography,
    InputBase } from '@mui/material';
import useStyles from "./styles";

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: ,
    borderColor: "lightblue",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


function Header({sections, title}) {

  const classes = useStyles();
  // console.log("header")

  return (
    <React.Fragment>
        <Toolbar 
        sx={{ borderBottom: 1, borderColor: "divider" }}
        >
            <Button variant="outlined">ثبت‌نام</Button>
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
            
            <Button>اشتراک گذاری</Button>
            
        </Toolbar>
        <Toolbar
            sx={{ justifyContent: "space-between", overflowX: "auto"}}
        >
            {sections.map((section) => (
                <Link
                    sx={{p: 1, flexShrink: 0}}
                    key={section.title}
                >
                    {section.title}
                </Link>
            )
            )}

        </Toolbar>
    </React.Fragment>
        
  )
}

export default React.memo(Header)