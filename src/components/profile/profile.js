import { getInitials } from "../../helper/function";
import styles from "./profile.module.scss";

export default function Profile({ data }) {
  const address = data.address || {};
  const company = data.company || {};
  const geo = address.geo || {};
  return (
    <div className={styles.profile}>
      <div>
        <div className={styles.top}>
          {getInitials(data.name)}
          <div>
            <p>{data.name}</p>
            <p>@{data.username}</p>
          </div>
        </div>
        <div className={styles.company}>
          <p>{company.name}</p>
          <p>{company.catchPhrase}</p>
          <p>{company.bs}</p>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <h3>Contact Info</h3>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <a target="_blank" href={"https://" + data.website}>
          {data.website}
        </a>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
        <a
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${geo.lat},${geo.lng}`}
        >
          {geo.lat} {geo.lng}
        </a>
      </div>
    </div>
  );
}
