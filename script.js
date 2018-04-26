function MyComponent({ title, content }) {
  return (
    <div>
      <dialog open>
        <h1>{title}</h1>
        <p>{content}</p>
      </dialog>
    </div>
  );
}

ReactDOM.render(
  <MyComponent title="Tytuł" content="A tu jest treść" />,
  document.getElementById('app')
);