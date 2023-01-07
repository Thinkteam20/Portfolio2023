import React, { useState } from "react";
import styles from "./Home.module.css";
import videoBg from "../../assets/typingbg2.mp4";
import { ThemeProvider, createTheme, Button } from "@mui/material";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? "dark" : "light";
    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === "light" ? "#eaeaea" : "#121212",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.carousel}>
                <video
                    src={videoBg}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                ></video>
                <div className={styles.carousel__body}>
                    <h1>Hello, My name is Sangpil.</h1>
                    <h3>
                        <b>Software Developer</b> in Brisbane / Gold Coast
                    </h3>
                    <div className={styles.carousel__buttonBox}>
                        <button className={styles.button_6}>
                            DOWNLOAD RESUME
                        </button>
                        <hr />
                        <button className={styles.button_6}>
                            Contact by Email
                        </button>
                    </div>
                </div>
                {/* <div className={styles.clipBox}></div>
                <div></div> */}
            </div>
        </ThemeProvider>
    );
}

// <video width='100%' height='100%' controls autoPlay>
// <source src='../../assets/typingbg.mp4' />
// </video>
