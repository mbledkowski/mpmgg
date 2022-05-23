import styled from "styled-components";

export default function Section(props: { children: JSX.Element, imgSrc: string, title: string, side: string }) {
  const StyledSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    > .image {
      margin: 2rem;
      background-image: url("${props.imgSrc}");
      background-position: center;
      background-size: cover;
      height: 340px;
      width: 480px;
      border-radius: 2rem;
    }

    > .text {
      margin: 2rem;
      width: 60%;
      text-align: start;
    }
  `
  if (props.side === "left") {
    return (
      <StyledSection>
        <div className="image" />
        <div className="text">
          <h2>{props.title}</h2>
          <p>{props.children}</p>
        </div>
      </StyledSection>
    )
  } else {
    return (
      <StyledSection>
        <div className="text">
          <h2>{props.title}</h2>
          {props.children}
        </div>
        <div className="image" />
      </StyledSection>
    )
  }
}