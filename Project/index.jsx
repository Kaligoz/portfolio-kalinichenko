import Image from 'next/image'; 
import Link from 'next/link'; 
import styles from './project.module.css';

const Project = ({ title, photo, description, link }) => {
  return (
    <div className={styles.project}>
      <Image src={photo} alt="photo" className={styles.photo} />
      <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>
        {description}
      </p>
      <Link href={link} className={styles.link}> |Link to the project|</Link>
      </div>
    </div>
  );
};

export default Project;
