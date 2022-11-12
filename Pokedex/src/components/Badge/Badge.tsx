import {Container} from "./Badge.style"

type BadgeProps = {
  name: string;
}

export function Badge(props: BadgeProps) {
  return (
    <Container className={`badge type--${props.name.toLowerCase()}`}>{props.name}</Container>
  );
}