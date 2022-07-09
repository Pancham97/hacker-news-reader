import style from "~/styles/index.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style
    }
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1> Hey there!</h1>
    </div>
  );
}
