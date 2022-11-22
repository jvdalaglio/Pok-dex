import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavBar = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .brand { 
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #17171B;
  }
`

export const BtnGoBack = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #747476;
`

export const TotalPokemons = styled.span `
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-right: 2rem;
  color: #747476;
`