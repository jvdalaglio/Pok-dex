import "./Badge.css"

type BadgeProps = {
  name: string;
}

export function Badge(props: BadgeProps) {
  return (
    <p>{props.name}</p>
  );
}