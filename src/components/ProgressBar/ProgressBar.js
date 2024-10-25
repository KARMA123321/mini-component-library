/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8 + "px",
    borderRadius: 4 + "px",
  },
  medium: {
    height: 12 + "px",
    borderRadius: 4 + "px",
  },
  large: {
    height: 24 + "px",
    padding: 4 + "px",
    borderRadius: 8 + "px",
  },
};

const Wrapper = styled.progress`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &[value]::-webkit-progress-bar {
    background-color: transparent;
  }

  &[value]::-webkit-progress-value {
    --radius: 4px;
    --largeSizeRightRadius: ${(p) => (p.value !== 100 ? 0 : "var(--radius)")};

    width: 0;
    border-radius: var(--radius);
    border-top-right-radius: var(--largeSizeRightRadius);
    border-bottom-right-radius: var(--largeSizeRightRadius);
    background-color: ${COLORS.primary};
  }
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper value={value} max={100} style={SIZES[size]}>
      <VisuallyHidden>Loading in progress. {100 - value}% left </VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;

// const STYLES = {
//   small: {
//     height: 8,
//     padding: 0,
//     radius: 4,
//   },
//   medium: {
//     height: 12,
//     padding: 0,
//     radius: 4,
//   },
//   large: {
//     height: 16,
//     padding: 4,
//     radius: 8,
//   },
// };

// const ProgressBar = ({ value, size }) => {
//   const styles = STYLES[size];

//   if (!styles) {
//     throw new Error(`Unknown size passed to ProgressBar: ${size}`);
//   }

//   return (
//     <Wrapper
//       role="progressbar"
//       aria-valuenow={value}
//       aria-valuemin="0"
//       aria-valuemax="100"
//       style={{
//         '--padding': styles.padding + 'px',
//         '--radius': styles.radius + 'px',
//       }}
//     >
//       <VisuallyHidden>{value}%</VisuallyHidden>
//       <BarWrapper>
//         <Bar
//           style={{
//             '--width': value + '%',
//             '--height': styles.height + 'px',
//           }}
//         />
//       </BarWrapper>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   background-color: ${COLORS.transparentGray15};
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//   border-radius: var(--radius);
//   padding: var(--padding);
// `;

// const BarWrapper = styled.div`
//   border-radius: 4px;

//   /* Trim off corners when progress bar is near-full. */
//   overflow: hidden;
// `;

// const Bar = styled.div`
//   width: var(--width);
//   height: var(--height);
//   background-color: ${COLORS.primary};
//   border-radius: 4px 0 0 4px;
// `;

// export default ProgressBar;
