import styled from "styled-components";
import DummyButtons from "./dummybuttons";

const HeroBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .asciicast {
    margin: 0 !important;
  }

  .asciinema {
    width: 40vw;
    min-height: 42vw;
    background: #121314;
    padding: 0 2vw !important;
    padding-bottom: max(0px, calc(2vw - 16.25px)) !important;
    border-radius: 2vw;
  }

  > div > h1 {
    margin: 2vw;
    width: min-content;
  }

  @media (max-width: 800px) {
    flex-flow: column nowrap;
    .asciinema {
      width: 80vw;
    }
  }
`

const StyledA = styled.a`
  background: #0d30d3;
  border: none;
  border-radius: clamp(.4rem, .8vw, .8rem);
  padding: clamp(.5rem, 1vw, 1rem);
  margin: clamp(.5rem, 1vw, 1rem);
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: .8rem;

  }
  :hover {
    box-shadow: 0 3px 12px 1px rgba(0, 0, 0, 0.5);
  }
`


export default function Hero() {
  return (
    <HeroBox>
      <div className="asciinema">
        <DummyButtons />
        <script id="asciicast-335480" src="https://asciinema.org/a/335480.js" async data-autoplay="1" data-preload="1"
          data-loop="1" data-columns="70" data-rows="35"></script>
      </div>
      <div>
        <h1>Minecraft Package Manager</h1>
        <StyledA className="github" href="https://github.com/mbledkowski/mpm">GitHub</StyledA>
        <StyledA className="documentation" href="https://github.com/mbledkowski/mpm/wiki">Documentation</StyledA>
      </div>
    </HeroBox>
  )
}