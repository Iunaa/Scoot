import styles from "./imagecard.module.scss"

export default function ImageCard(props) {
    
         const ImageClass = `${styles.imageCard} ${props.className} ${
    styles[`imageCard--${props.typography}`]
  } `;
  return (
    <img className={ImageClass} 
      src={props.src}
      />
  );
    
}