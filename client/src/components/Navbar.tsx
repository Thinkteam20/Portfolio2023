import React from "react";

import {
    AppBar,
    Badge,
    IconButton,
    List,
    ListItem,
    Switch,
    Toolbar,
    Typography,
    makeStyles,
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Logo from "../assets/sp2.png";
import DrawerComponent from "./Drawer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        sm: 600;
        md: 900;
        lg: 1200;
        xl: 1536;
        mobile: true; // adds the `mobile` breakpoint
        tablet: 640;
        laptop: 1024;
        desktop: 1200;
    }
}

const midLinks = [
    { title: "Home", path: "/" },
    { title: "AboutMe", path: "/aboutme" },
    { title: "Skill", path: "/skill" },
    { title: "TimeLine", path: "/timeline" },
    { title: "Projects", path: "/project" },
];

const rightLinks = [{ title: "contact", path: "/contact" }];

const newStyles = {
    color: "grey.900",
    textDecoration: "none",
    typography: "h6",
    "&:hover": {
        color: "#2AABBB",
    },
    "&.active": {
        color: "#2AABBB",
    },
};

export default function Navbar() {
    return (
        <AppBar
            position='static'
            sx={{
                // mb: 4,
                height: "50px",
                display: "flex",
                justifyContent: "center",
                // alignItems: "center",
                background: "#fff",
                maxWidth: "xl",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box display='flex' alignItems='center'>
                    {/* <Typography
                        variant='h6'
                        component={NavLink}
                        to='/'
                        sx={{
                            color: grey,
                            textDecoration: "none",
                        }}
                    >
                        SP_J
                    </Typography> */}
                    <Box
                        component='img'
                        sx={{
                            height: 64,
                        }}
                        alt='Your logo.'
                        src={Logo}
                    />
                    <Switch />
                </Box>

                <List sx={{ display: { md: "flex", sm: "none" } }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={newStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <LinkedInIcon sx={{ color: "black" }} />
                </Box>
                <DrawerComponent />
            </Toolbar>
        </AppBar>
    );
}
