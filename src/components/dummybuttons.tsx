import styled from "styled-components";

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

export function DummyButtons() {
  return (
    <DummyButtonsWrapper>
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
    </DummyButtonsWrapper>
  )
}