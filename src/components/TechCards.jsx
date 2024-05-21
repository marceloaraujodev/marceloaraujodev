import styled from "styled-components";

const CardContainer = styled.div`
  height: 160px;
  width: 130px;
  margin: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 2px solid lightgrey; */
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  /* overflow: hidden; */
  @media screen and (max-width: 768px){
    margin: 15px 8px;
  }
`;

const ImgDivContainer = styled.div`
    height: 130px;
    width: 110px;
    /* border: 1px solid red; */
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export default function TechCards({img, techName}) {



  return (
    <>
      <CardContainer>
        <ImgDivContainer>
          <img src={img} alt="" />
        </ImgDivContainer>
        {techName}
      </CardContainer>
    </>
  )
}
