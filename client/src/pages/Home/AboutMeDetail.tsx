import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export default function AboutMeDetail() {
    return (
        <Container>
            <Container sx={{ margin: "auto" }}>
                <Box
                    maxWidth='lg'
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                >
                    <Typography variant='h4' mt={3}>
                        About Me.
                    </Typography>
                </Box>
            </Container>
            <Grid container spacing={1} mt={2}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        backgroundColor: "#fff",
                    }}
                >
                    <Box
                        sx={{
                            display: "block",
                            borderTopLeftRadius: "37px 140px",
                            borderTopRightRadius: "23px 130px",
                            borderBottomLeftRadius: "110px 19px",
                            borderBottomRightRadius: "120px 24px",

                            position: "relative",
                            border: "solid 3px #6e7491",
                            padding: "40px 60px",
                            maxWidth: "800px",
                            width: "70%",
                            height: " 500px",
                            margin: "0px auto 0",
                            lineHeight: "28px",
                            transform: "rotate(1deg)",
                            boxShadow: "3px 15px 8px -10px rgba(0, 0, 0, 0.3)",
                            transition: "all 0.13s ease-in",
                            "&:hover": {
                                // transform: "translateY(-10px) rotate(1deg)",
                                // boxShadow:
                                //     "3px 15px 8px -10px rgba(0, 0, 0, 0.3)",
                            },
                        }}
                    >
                        <Typography variant='h4'>
                            Personal Information
                        </Typography>
                        <Typography variant='subtitle2'>
                            Multiple Border-Radius Values
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                background: "#edeff5",
                                padding: "20px",
                            }}
                        >
                            Multiple Border-Radius Values
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ backgroundColor: "#fff" }}>
                    <Container
                        sx={{
                            height: "100%",
                            borderRadius: "2px",
                            // margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            mb={2}
                            sx={{
                                padding: "1rem",
                                width: "100%",
                                boxShadow:
                                    "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
                                borderRadius: "0.5rem",
                                borderLeft: "0 solid #00ff99",
                                transition:
                                    "border-left 100ms ease-in-out, padding-left 100ms ease-in-out",
                                "&:hover": {
                                    paddingLeft: "10px",
                                    borderLeft: "10px solid #00ff99",
                                },
                            }}
                        >
                            <Typography variant='h5'>FRONT-END.</Typography>
                            <Typography variant='subtitle2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cupiditate ab tenetur at
                                delectus aspernatur similique modi, est, debitis
                                sit voluptate dolorem eligendi odio laborum
                                magni nesciunt? Aliquam omnis molestiae at.
                            </Typography>
                        </Box>
                        <Box
                            mb={2}
                            sx={{
                                padding: "1rem",
                                width: "100%",
                                boxShadow:
                                    "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
                                borderRadius: "0.5rem",
                                borderLeft: "0 solid #00ff99",
                                transition:
                                    "border-left 100ms ease-in-out, padding-left 100ms ease-in-out",
                                "&:hover": {
                                    paddingLeft: "10px",
                                    borderLeft: "10px solid #00ff99",
                                },
                            }}
                        >
                            <Typography variant='h5'>BACK-END.</Typography>
                            <Typography variant='subtitle2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cupiditate ab tenetur at
                                delectus aspernatur similique modi, est, debitis
                                sit voluptate dolorem eligendi odio laborum
                                magni nesciunt? Aliquam omnis molestiae at.
                            </Typography>
                        </Box>
                        <Box
                            mb={2}
                            sx={{
                                padding: "1rem",
                                width: "100%",
                                boxShadow:
                                    "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
                                borderRadius: "0.5rem",
                                borderLeft: "0 solid #00ff99",
                                transition:
                                    "border-left 100ms ease-in-out, padding-left 100ms ease-in-out",
                                "&:hover": {
                                    paddingLeft: "10px",
                                    borderLeft: "10px solid #00ff99",
                                },
                            }}
                        >
                            <Typography variant='h5'>a little title</Typography>
                            <Typography variant='subtitle2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Cupiditate ab tenetur at
                                delectus aspernatur similique modi, est, debitis
                                sit voluptate dolorem eligendi odio laborum
                                magni nesciunt? Aliquam omnis molestiae at.
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}
