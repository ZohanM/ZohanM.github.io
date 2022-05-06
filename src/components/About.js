//Internal Imports
import "./About.css";

//External Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function About(){
    return(
        <section id={"about"}>
            <Box mt={10}>
                <Typography variant="h3">
                    Let Me Introduce Myself
                </Typography>
            </Box>
            <Grid container 
                rowSpacing={4}
                columnSpacing={1}
                my={{md: 0,lg: 10}}
                >
                <Grid item
                    xs={0}
                    lg={0}>
                        {/* Intentionally Empty */}
                </Grid>
                <Grid item
                    xs={12}
                    lg={6}
                    mx={{xs: 10, sm: 20, md: 30, lg: 0}}
                    >
                    <Box
                        component="img"
                        alt="Zohan Marediya"
                        src="images/zohan_marediya.jpeg"
                        borderRadius={16}
                        sx={{maxWidth: "inherit"}}
                    />
                </Grid>
                <Grid item
                    // sx={{border: "3px solid red"}}
                    //TODO: LOWER THE FONT-SIZE WHEN SMALLER SCREEN
                    xs={12}                
                    lg={5}
                    mx={{xs: 5, sm: 10, md: 15, lg: 0}}>
                    <Typography variant={"h4"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid item
                    xs={0}
                    lg={1}
                    >
                        {/* Intentionally Empty */}
                </Grid>
            </Grid>
        </section>
    );
}

export default About;