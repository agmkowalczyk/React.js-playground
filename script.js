function MyComponent() {
  return (
    <div>
      <h1>Witaj, świecie!</h1>
      <h2>To jest React.js!</h2>
    </div>
  );
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);