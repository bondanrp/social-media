import qs from "qs";
import { Link } from "react-router-dom";

export default function Photo({ data, big, click }) {
  const imageUrl = big ? data.url : data.thumbnailUrl;
  if (!click) {
    return (
      <div to={`/photo?${qs.stringify({ id: data.id })}`}>
        <img src={imageUrl} alt={data.id} />
      </div>
    );
  } else {
    return (
      <Link to={`/photo?${qs.stringify({ id: data.id })}`}>
        <img src={imageUrl} alt={data.id} />
      </Link>
    );
  }
}
