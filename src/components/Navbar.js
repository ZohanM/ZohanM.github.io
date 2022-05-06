//Internal Imports
import "./Navbar.css";

//External Imports
import {HashLink as Link} from "react-router-hash-link";
import {HashRouter as Router} from "react-router-dom";

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Divider from "@mui/material/Divider";

import {useState, useEffect, useRef} from "react";

const LinkItem = ({title, to}) => {
    return (
        <Typography variant={"h5"}>
            {/* <Link to={to}> */}
                {title}
            {/* </Link> */}
        </Typography>
    );
}

function Navbar(){
    return(
        <AppBar position="sticky">
            <Stack 
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{xs:2, sm:4, md:6}}
                justifyContent="center"
                alignItems="center"
                my={2}
                mx={0}
            >
                <LinkItem title={"About"} to={""} />
                <LinkItem title={"Projects"} to={""} />
                <LinkItem title={"Contact"} to={""} />
            </Stack>
        </AppBar>
    );
}

export default Navbar;