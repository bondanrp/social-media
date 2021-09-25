import { Photo } from "../components";

export default function PhotoList(props) {
  return (
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
  );
}
