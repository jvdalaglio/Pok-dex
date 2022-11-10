import "./Badge.css"

type BadgeProps = {
  name: string;
}

export function Badge(props: BadgeProps) {
  return (
    <span className="badge">{props.name}</span>
  );
}