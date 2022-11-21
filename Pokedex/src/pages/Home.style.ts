import styled from "styled-components";

export const Title = styled.h1 `
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: #17171b;

  max-width: 700px;
  margin: 160px 0 70px;
`

export const List = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  column-gap: 30px;
`

export const Input = styled.input`
  width: 109%;
  font-size: 1.2rem;
  color: #17171b;
  padding: 0.5rem 1rem;
  margin-bottom: 90px;
`