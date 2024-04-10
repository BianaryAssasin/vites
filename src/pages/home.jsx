import "../css/home.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Carousel from "../comp/carousel.jsx";
import Acordion from "../comp/aboutMe.jsx";

function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const clicked = (event) => {
        handleClose(event);
        pageChange(event);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };
    const pageChange = (e) => {
        if(e.target.textContent == "Project's") {
            window.location.href = "/projects";
        } else {
            window.location.href = "/linktree";
        }
    }

    return <>
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{bgcolor: "black"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Aiden's Portfolio
                    </Typography>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={clicked}>Project's</MenuItem>
                <MenuItem onClick={clicked}>LinkTree</MenuItem>
            </Menu>
        </div>
        <br />
        <Container className="info-container" maxWidth="sm">
            <h1>Hello there!, welcome to Aiden's Portfolio Site!</h1>
        </Container>
        <Carousel />
        <br />
        <Acordion />
    </>
}

export default Home;