import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowBackSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="m7.15 12.025 3.9-5.525h4.063L11.7 11.375h10.238a10.562 10.562 0 1 1 0 21.125h-7.313l1.625-3.25h5.688a7.312 7.312 0 1 0 0-14.625H11.7l3.413 4.875H11.05l-3.9-5.525L6.5 13l.65-.975Z"
        />
    </Svg>
);
export default ArrowBackSVG;
