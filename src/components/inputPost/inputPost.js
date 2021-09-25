import styles from "./inputPost.module.scss";

export default function InputPost({ handleSubmit, err, handleChange, state }) {
  return (
    <div className={styles.inputPost}>
      <input
        placeholder="Title"
        id="title"
        value={state.title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Write something..."
        id="body"
        value={state.body}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {err ? <p>{err}</p> : ""}
    </div>
  );
}
