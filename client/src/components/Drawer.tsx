import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    Box,
    ListItemText,
    makeStyles,
    Typography,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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

export default function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='primary'
                aria-label='logo'
                sx={{ display: { md: "none" } }}
                onClick={() => setOpenDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6' component='div'>
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
}

<List>
    <ListItem>
        <ListItemText>
            <Link to='/'>Home</Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
            <Link to='/about'>About</Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
            <Link to='/contact'>Contact</Link>
        </ListItemText>
    </ListItem>
    <ListItem>
        <ListItemText>
            <Link to='/about'>Faq</Link>
        </ListItemText>
    </ListItem>
</List>;
