import { TitleStyle } from "./Title.style";

type TitleProps = {
  text: string;
}

export function Title(props: TitleProps) {
  return(
    <TitleStyle>{props.text}</TitleStyle>
  )
}