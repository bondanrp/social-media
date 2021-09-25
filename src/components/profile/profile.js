export default function Profile({ data }) {
  const address = data.address || {};
  const company = data.company || {};
  const geo = address.geo || {};
  return (
    <div>
      <p>{data.name}</p>
      <p>@{data.username}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.website}</p>
      <p>{company.name}</p>
      <p>{company.catchPhrase}</p>
      <p>{company.bs}</p>
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
  );
}
