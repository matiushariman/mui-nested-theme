import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';

import type { ReactNode } from 'react';

interface JustButtonProps {
    children?: ReactNode;
}

export const JustButton = ({ children }: JustButtonProps) => {
    return <Box sx={{ p: 4, bgcolor: 'secondary.main' }}>
        <AppBar position="static" color="default"><Toolbar>
            Hahaha
        </Toolbar><Button>Just Button</Button>{children}</AppBar>
    </Box>
}