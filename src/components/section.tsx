import styled from "styled-components";

export default function Section(props: { children: JSX.Element, imgSrc: string, title: string, side: string }) {
  const StyledSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    > .image {
      max-width: 100vw;
      margin: 2rem;
      border-radius: 2rem;
      @media (max-width: 480px) {
        border-radius: 0;
      }
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
        <img alt={props.title} className="image" src={props.imgSrc} />
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
        <img alt={props.title} className="image" src={props.imgSrc} />
      </StyledSection>
    )
  }
}