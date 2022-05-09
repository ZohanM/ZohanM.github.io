//Internal Imports
import "./Navbar.css";

//External Imports
import {HashLink as Link} from "react-router-hash-link";

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Divider from "@mui/material/Divider";

import {useState, useEffect, useRef} from "react";
const LinkItem = ({title, to, scroll}) => {
    return (
        <Link to={to} scroll={el => scroll(el)} className="nav-links">
            <Typography variant={"h5"} sx={{color: "primary.main"}}>
                {title}
            </Typography>
        </Link>
    );
}

function Navbar(){
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);
  
    useEffect(() => {
      setHeight(elementRef.current.clientHeight);
    }, []);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -1 * height - 10;
        window.scrollTo({top: yCoordinate + yOffset, behavior: 'smooth'});
    }

    return(
        <AppBar position="sticky" ref={elementRef} sx={{backgroundColor: "secondary.dark"}}>
            <Stack 
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{xs:2, sm:4, md:6}}
                justifyContent="center"
                alignItems="center"
                my={2}
                mx={0}
            >
                <LinkItem title={"About"} to={"/#about"} scroll={scrollWithOffset}/>
                <LinkItem title={"Projects"} to={"/#projects"} scroll={scrollWithOffset}/>
                <LinkItem title={"Contact"} to={"/#contact"} scroll={scrollWithOffset}/>
            </Stack>
        </AppBar>
    );
}

export default Navbar;