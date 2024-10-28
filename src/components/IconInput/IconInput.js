import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  // TODO: validate size

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;

// const Wrapper = styled.div`
//   position: relative;
//   width: fit-content;
// `;

// const IconWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   margin: auto;
//   pointer-events: none;

//   svg {
//     stroke: ${COLORS.gray700};
//   }

//   ${Wrapper}:hover & svg {
//     stroke: ${COLORS.black};
//   }
// `;

// const Input = styled.input`
//   width: ${(p) => p.width}px;
//   color: ${COLORS.gray700};
//   font-weight: 700;
//   border: none;

//   &::placeholder {
//     color: ${COLORS.gray500};
//     font-weight: 400;
//   }

//   &:focus {
//     outline-offset: 2px;
//   }

//   &:hover {
//     color: ${COLORS.black};
//   }
// `;

// const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
//   const iconSize = size === "large" ? 24 : 16;

//   const SIZES = {
//     small: {
//       input: {
//         fontSize: 14 / 16 + "rem",
//         borderBottom: `1px solid ${COLORS.black}`,
//         padding: "4px",
//         paddingLeft: `${iconSize + 8}px`,
//       },
//       iconWrapper: { width: `${iconSize}px`, height: `${iconSize}px` },
//     },
//     large: {
//       input: {
//         fontSize: 18 / 16 + "rem",
//         borderBottom: `2px solid ${COLORS.black}`,
//         padding: "6px",
//         paddingLeft: `${iconSize + 12}px`,
//       },
//       iconWrapper: { width: `${iconSize}px`, height: `${iconSize}px` },
//     },
//   };

//   return (
//     <Wrapper>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       <Input
//         type="text"
//         placeholder={placeholder}
//         width={width}
//         style={SIZES[size].input}
//       />
//       <IconWrapper style={SIZES[size].iconWrapper}>
//         <Icon id={icon} size={iconSize} />
//       </IconWrapper>
//     </Wrapper>
//   );
// };

// export default IconInput;
