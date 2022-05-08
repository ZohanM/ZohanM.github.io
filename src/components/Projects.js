//Internal Imports

//External Imports
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

function ProjectCard({project}){
    return(
        <Card raised variant={"outlined"}>
            <CardHeader 
                title={project["title"]}
            />
            <CardMedia
                component={"img"}
                image={project["image_path"]}
                alt={project["title"]}
                sx={{maxWidth: "95%", mx:"auto", borderRadius: 8}}
            />
            <CardContent>
                {project.websiteLink !== "" && <Link 
                    href={project["websiteLink"]}
                    underline={"hover"}
                    target="_blank"
                    rel="noreferrer"
                    fontSize={"1.25rem"}
                >
                    Website Link
                </Link>}
                {project.websiteLink !== "" && <br />}
                <Link 
                    href={project["gitLink"]}
                    underline={"hover"}
                    target="_blank"
                    rel="noreferrer"
                    fontSize={"1.25rem"}
                >
                    Github Link
                </Link>
                <Typography
                    mt={2}
                >
                    {project["description"]}
                </Typography>
            </CardContent>

        </Card>
    );
}

function projectElem(title, gitLink, websiteLink, description, image_path){
    return {
        "title": title,
        "gitLink": gitLink,
        "websiteLink": websiteLink,
        "description": description,
        "image_path": image_path
    };
}

function addProjects(projectList){
    const artemisSystem = projectElem("Artemis Observation System (An Embedded Forest Fire Detection System)",
    "http://github.com/LoRaWAN-Forest-Fire-Detection",
    "",
    "This was an embedded system project with a web application component for an easier access to data for the users. the aim of this project was to build a system to detect fire in remote locations without access to wifi. This project was built with python for the nodes placed in the forest (where the sensors collected the data), and React for the web application. We used google api to display the node location and its real time status. The data transfer from the nodes was ddone with teh LoRaWAN protocol and DynamoDB was used for data storage needs.",
    "images/artemis.png");

    const sdw = projectElem("SDW (A Prototype HaaS System)",
    "https://github.com/SuperDopeWebsiteTeam",
    "http://superdopewebsite.herokuapp.com/",
    "This was a demo website for how a potential Haas(Hardware as a Service) system would look like and function. It was built wth React as the frontend, python for the backend, and MongoDB for the database. Git and Agile was extensively used during the completion of the project for source control and efficient collaboration among teammembers.",
    "images/sdw.jpg");

    projectList.push(artemisSystem);
    projectList.push(sdw);
}

function Projects(){
    let projectList=[];
    addProjects(projectList);
    return(
        <section id={"projects"}>
            <Typography variant="h3">
                Projects
            </Typography>
            <Typography>
                {/* Space for a General projects description */}
            </Typography>
            <Stack
                spacing={4}
                divider={<Divider orientation="horizantal" flexItem />}
                maxWidth={{xs: "90vw", sm: "65vw", md: "50vw", lg: "40vw"}}
                alignItems="center"
                justifyContent="center"
                mx="auto"
                my={3}
            >
                {projectList.map((project) => {
                    return <ProjectCard project={project} />
                })}
            </Stack>
        </section>
    );
}

export default Projects;