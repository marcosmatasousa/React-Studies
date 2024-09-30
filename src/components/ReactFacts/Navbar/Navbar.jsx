import styles from './Navbar.module.css';

function Navbar(props) {

    const navbarStyles = {
        backgroundColor: !props.darkTheme ?  "white" : "#21222A",
        titleStyle: {
            color: !props.darkTheme ? "#00ABCA" : "#61DAFB"
        },
        lightStyle: {
            color: !props.darkTheme ? "#2B283A" : "#918E9B"
        },
        darkStyle: {
            color: !props.darkTheme ? "#D5D4D8" : "white"
        },
        circleStyleLight: {
            position: "absolute",
            right: "13px"
        },
        circleStyleDark: {
            position: "absolute",
            left: "13px"
        },
    }
    
    return(
        <nav style={navbarStyles} className={styles.nav}>
            <div className={styles.reactFactsTitle}>
                <img className={styles.reactFactsImg} src="/react-facts/reactjs-icon 1.svg" alt=""/>
                <h1 style={navbarStyles.titleStyle}>ReactFacts</h1>
            </div>
            <div className={styles.toggleTheme}>
                <span style={navbarStyles.lightStyle}>Light</span>
                <div className={styles.toggleImgContainer}>
                    {!props.darkTheme && <img
                        src="/react-facts/toggle-light.svg" 
                        alt="toggle-button"
                        onClick={props.changeTheme}
                    />}
                    {props.darkTheme && <img
                        src="/react-facts/toggle-dark.svg" 
                        alt="toggle-button"
                        onClick={props.changeTheme}
                    />}
                    {!props.darkTheme && <img
                        style={navbarStyles.circleStyleLight}
                        src="/react-facts/circle-light.png" 
                        alt="toggle-circle"
                    />}
                    {props.darkTheme && <img
                        style={navbarStyles.circleStyleDark}
                        src="/react-facts/circle-dark.svg" 
                        alt="toggle-circle"
                    />}
                </div>
                <span style={navbarStyles.darkStyle}>Dark</span>
            </div>
        </nav>
    )
}

export default Navbar;