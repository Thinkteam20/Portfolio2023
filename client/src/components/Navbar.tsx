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
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import Logo from "../assets/sp2.png";

const midLinks = [
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
        color: "grey.900",
    },
    "&.active": {
        color: "grey.900",
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

                <List sx={{ display: "flex" }}>
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
                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path }) => (
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
                </Box>
            </Toolbar>
        </AppBar>
    );
}
