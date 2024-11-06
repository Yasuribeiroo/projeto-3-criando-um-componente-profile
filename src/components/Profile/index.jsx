import styles from './styles.module.css'

export default function Profile(props) {
    return (
        <div>
            <img className={styles.avatar} src={props.avatar} /> 
            <h1 className={styles.name}>{props.name}</h1>
            <hr/>
            <p className={styles.bio}>{props.bio}</p>
            <hr/>
            <p className={styles.phone}>{props.phone}</p>
            <hr/>
            <p className={styles.email}>{props.email}</p>

            <button className={styles.github}>{props.githubUrl}</button>
            <button className={styles.linkedin}>{props.lindekinUrl}</button>
            <button className={styles.twitter}>{props.twitterUrl}</button>
        </div>
    )
}