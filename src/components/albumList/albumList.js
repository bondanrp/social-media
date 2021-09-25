import { useEffect } from "react";
import { request } from "../../api/api";
import { Album, Post } from "../components";

export default function AlbumList({ data }) {
  return (
    <div>
      {data.map((album) => {
        return <Album key={`${album.id}-x-${album.name}`} data={album} />;
      })}
    </div>
  );
}
