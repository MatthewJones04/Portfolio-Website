import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    const navItems = [
        { label: "Projects", id: "projects" },
        { label: "About", id: "about" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <>
            <AppBar position="sticky" color="inherit" elevation={1}>
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    {/* Name */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            cursor: "pointer",
                            fontSize: { xs: "1rem", sm: "1.25rem" },
                        }}
                        onClick={() => scrollTo("top")}
                    >
                        Matthew Jones
                    </Typography>

                    {/* Desktop Nav */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Hamburger */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" } }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{ width: 250 }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton
                                    onClick={() => scrollTo(item.id)}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}