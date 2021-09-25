export default function Spacer(props) {
  const space = props.size ? props.size : "";
  return <div style={{ paddingTop: space }} />;
}
