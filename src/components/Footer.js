import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {HashLink as Link} from "react-router-hash-link";

function Footer(){
    return(
        <Box sx={{backgroundColor: "black", height: "20vh"}}>
            <Link to="/#top" smooth>
                <Typography sx={{textDecoration: "none", color: "primary.main", "&:visited": {color: "inherit"}}}>
                    Go to top
                </Typography>
            </Link>
            <Typography variant="subtitle2" color={"white"} sx={{mt: "14vh"}}>
                Designed and developed by Zohan Marediya
            </Typography>
        </Box>
    );
}

export default Footer;