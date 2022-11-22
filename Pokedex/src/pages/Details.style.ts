import styled from "styled-components";

export const Container = styled.div` 
  height: calc(100vh - 4rem - 40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;

  @media only screen and (max-width: 1000px) {
    height: 100%;
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 90%;
`

export const Button = styled.button`
  margin-top: 12px;
  padding: 0.5rem 1rem;
  color: rgba(23, 23, 27, 0.6);
  font-weight: 600;
  font-size: 24px;
  background-color: #ffffff;
  border: transparent;
  border-radius: 8px;
`

export const Label = styled.span`
  display: block;
  margin-top: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: rgba(23, 23, 27, 0.6);
`

export const Value = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  color: #ffffff;
`

export const Card = styled.div`
border: 4px solid #62b957;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 115%;

.info__name {
  font-weight: 700;
  font-size: 64px;
  line-height: 83px;
  color: #FFFFFF;
}

.info__number {
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: rgba(23, 23, 27, 0.6);
}
&.type--bug {
  background-color: #8bd674;
  border-color: #8cb230;
}
&.type--dark {
  background-color: #6f6e78;
  border-color: #58575f;
}
&.type--dragon {
  background-color: #7383b9;
  border-color: #0f6ac0;
}
&.type--electric {
  background-color: #f2cb55;
  border-color: #eed535;
}
&.type--fairy {
  background-color: #eba8c3;
  border-color: #ed6ec7;
}
&.type--fighting {
  background-color: #eb4971;
  border-color: #d04164;
}
&.type--fire {
  background-color: #ffa756;
  border-color: #fd7d24;
}
&.type--flying {
  background-color: #83a2e3;
  border-color: #748fc9;
}
&.type--ghost {
  background-color: #8571be;
  border-color: #556aae;
}
&.type--grass {
  background-color: #8bbe8a;
  border-color: #62b957;
}
&.type--ground {
  background-color: #f78551;
  border-color: #dd7748;
}
&.type--ice {
  background-color: #91d8df;
  border-color: #61cec0;
}
&.type--normal {
  background-color: #b5b9c4;
  border-color: #9da0aa;
}
&.type--poison {
  background-color: #9f6e97;
  border-color: #a552cc;
}
&.type--psychic {
  background-color: #ff6568;
  border-color: #a552cc;
}
&.type--rock {
  background-color: #d4c294;
  border-color: #baab82;
}
&.type--steel {
  background-color: #4c91b2;
  border-color: #4a90da;
}
&.type--water {
  background-color: #58abf6;
  border-color: #4a90da;
}


`