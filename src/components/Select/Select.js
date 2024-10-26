import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;

// const iconSize = 24;
// const inlineBorderSize = 16;

// const Wrapper = styled.div`
//   position: relative;
//   align-items: center;
//   width: fit-content;
//   background-color: ${COLORS.transparentGray15};
//   border-radius: 8px;
//   color: ${COLORS.gray700};

//   &:hover {
//     color: ${COLORS.black};
//   }
// `;

// const Dropdown = styled.select`
//   opacity: 0;
//   border: solid transparent;
//   border-width: 12px ${24 + iconSize + inlineBorderSize}px 12px
//     ${inlineBorderSize}px;
//   cursor: pointer;
// `;

// const ChosenOption = styled.div`
//   position: absolute;
//   left: ${inlineBorderSize}px;
//   top: calc(50% - 1rem / 2); 
// `;

// const Select = ({ label, value, onChange, children }) => {
//   const displayedValue = getDisplayedValue(value, children);

//   return (
//     <Wrapper>
//       <Icon
//         id="chevron-down"
//         size={iconSize + "px"}
//         style={{ position: "absolute", right: inlineBorderSize, top: `calc(50% - ${iconSize / 2 + "px"})` }}
//       ></Icon>
//       <ChosenOption>{displayedValue}</ChosenOption>
//       <Dropdown value={value} onChange={onChange}>
//         {children}
//       </Dropdown>
//     </Wrapper>
//   );
// };

// export default Select;
