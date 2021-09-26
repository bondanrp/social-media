import { Photo } from "../components";
import styles from "./photoList.module.scss";

export default function PhotoList(props) {
  return (
    <div className={styles.photoList}>
      <div>
        {props.data.map((photo) => {
          return (
            <Photo
              click={true}
              key={`photoId${photo.id}${photo.name}`}
              data={photo}
            />
          );
        })}
      </div>
    </div>
  );
}
