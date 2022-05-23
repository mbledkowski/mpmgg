import styled from "styled-components";

const HeroBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .asciicast {
    margin: 0 !important;
  }

  .asciinema {
    width: 40vw;
    height: 40vw;
    background: #121314;
    padding: 0vw 2vw calc(2vw - 16.25px) !important;
    border-radius: 2vw;
  }
  > h1 {
    width: 40vw;
  }
`

const DummyButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > svg {
    width: 4vw;
    height: 1vw;
  }
  height: 4vw;
`

function DummyButtons() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 116 25" version="1.1" xmlns="http://www.w3.org/2000/svg"
         style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <rect x="0" y="0" width="115.662" height="24.857" style="fill:none;"/>
      <clipPath id="_clip1">
        <rect x="0" y="0" width="115.662" height="24.857"/>
      </clipPath>
      <g clip-path="url(#_clip1)">
        <g>
          <circle cx="12.428" cy="13.222" r="12.428" style="fill:#f00;"/>
          <circle cx="57.831"
                  cy="13.222"
                  r="12.428"
                  style="fill:#f2af0d;"/>
          <circle
            cx="103.234" cy="13.222" r="12.428" style="fill:#0df228;"/>
        </g>
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <HeroBox>
      <div className="asciinema">
        <DummyButtonsWrapper>
          <DummyButtons/>
        </DummyButtonsWrapper>
        <script id="asciicast-335480" src="https://asciinema.org/a/335480.js" async data-autoplay="1" data-preload="1"
                data-loop="1" data-columns="70" data-rows="35"></script>
      </div>
      <h1>Minecraft Package Manager</h1>
    </HeroBox>
  )
}