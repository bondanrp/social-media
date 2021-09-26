import { Album } from "../components";
import styles from "./albumList.module.scss";
export default function AlbumList({ data, name }) {
  return (
    <div className={`${styles.albumList} ${!name ? styles.alt : ""}`}>
      {name ? (
        <p>
          Albums by <span>{name}</span>
        </p>
      ) : (
        ""
      )}
      <div>
        {data.map((album) => {
          return (
            <Album
              isProfile={name}
              key={`${album.id}-x-${album.name}`}
              data={album}
            />
          );
        })}
      </div>
    </div>
  );
}
