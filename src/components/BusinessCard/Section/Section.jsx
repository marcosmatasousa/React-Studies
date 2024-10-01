import PropTypes from 'prop-types';

import styles from './Section.module.css';

function Section({title, text}) {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
};

export default Section;