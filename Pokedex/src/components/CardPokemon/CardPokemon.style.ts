import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  width: 330px;
  min-height: 115px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 20px;

  position: relative;

.info{
  
}

.info__number{
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: rgba(23, 27, 24, 0.6);
}
.info__name{
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  color: #ffffff;
  margin-bottom: 8px;
}
.card__img{
  max-width: 100%;
  max-height: 140px;
  position: absolute;
  top: -35px;
  right: 10px;
}

&.card.type--bug {
  background-color: #8bd674;
}
&.card.type--dark {
  background-color: #6f6e78;
}
&.card.type--dragon {
  background-color: #7383b9;
}
&.card.type--electric {
  background-color: #f2cb55;
}
&.card.type--fairy {
  background-color: #eba8c3;
}
&.card.type--fighting {
  background-color: #eb4971;
}
&.card.type--fire {
  background-color: #ffa756;
}
&.card.type--flying {
  background-color: #83a2e3;
}
&.card.type--ghost {
  background-color: #8571be;
}
&.card.type--grass {
  background-color: #8bbe8a;
}
&.card.type--ground {
  background-color: #f78551;
}
&.card.type--ice {
  background-color: #91d8df;
}
&.card.type--normal {
  background-color: #b5b9c4;
}
&.card.type--poison {
  background-color: #9f6e97;
}
&.card.type--psychic {
  background-color: #ff6568;
}
&.card.type--rock {
  background-color: #d4c294;
}
&.card.type--steel {
  background-color: #4c91b2;
}
&.card.type--water {
  background-color: #58abf6;
}
`

