import styles from './Button.module.css'

function Button() {

    const inline_styles = {
        backgroundColor: "pink"
    };

    return (
        <>
            <button className={styles.button} style={inline_styles}>click me</button>
        </>
    )
}

export default Button;