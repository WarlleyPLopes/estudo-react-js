export default function HelloWorld() {
  const name = "Warlley";
  const title = <h1>Hello, {name}!</h1>;

  if (name === "Warlley") {
    return (
      <div>
        <h1 tabIndex={0} style={{ color: "red" }}>
          {name}
        </h1>
      </div>
    );
  }

  return <div>{title}</div>;
}
