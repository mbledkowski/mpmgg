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

  > h1 {
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

export default function Hero() {
  return (
    <HeroBox>
      <div className="asciinema">
        <DummyButtons />
        <script id="asciicast-335480" src="https://asciinema.org/a/335480.js" async data-autoplay="1" data-preload="1"
          data-loop="1" data-columns="70" data-rows="35"></script>
      </div>
      <h1>Minecraft Package Manager</h1>
    </HeroBox>
  )
}