//Internal Imports

//External Imports
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

function Contact(){
    return (
        <section id="contact">
            <Box my={10} mx={{xs: 2, sm: 5, md: 10}}>
                <Typography variant="h3">
                    How can I get in touch?
                </Typography>
                <Grid container
                    rowSpacing={10}
                    columnSpacing={1}
                    my={{md: 0,lg: 10}}
                >
                    <Grid item
                        xs={0}
                        lg={1}
                    >
                        {/* Intentionally Blank */}
                    </Grid>
                    <Grid item
                        xs={12}
                        lg={5}
                    >
                        <Typography variant="h5">
                            You can contact me directly through my email and I'll get back to you as soon as possible.
                        </Typography>
                        <Typography  component={"a"} href={"mailto:marediya.zohan99@gmail.com"} sx={{fontSize:"1.25rem"}}>
                            Marediya.Zohan99@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={12}
                        lg={5}
                    >
                        <Typography variant="h5">
                            You can follow me on my other socials.
                        </Typography>
                        <List >
                            <ListItem disabledPadding sx={{maxWidth: "fit-content", ml: "auto", mr: "auto"}}>
                                <ListItemIcon>
                                    <LinkedInIcon fontSize="large"/>
                                </ListItemIcon>
                                <Link
                                    href="https://www.linkedin.com/in/zohan-marediya-90aa20210/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ListItemText primary="LinkedIn" primaryTypographyProps={{variant: "h5"}}/>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding sx={{maxWidth: "fit-content", ml: "auto", mr: "auto"}}
                                >
                                <ListItemIcon>
                                    <GitHubIcon fontSize="large"/>
                                </ListItemIcon>
                                <Link
                                    href="https://github.com/ZohanM"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ListItemText primary="Github" primaryTypographyProps={{variant: "h5"}}/>
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item
                        xs={0}
                        lg={1}
                    >
                        {/* Intentionally Blank */}
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
}

export default Contact;