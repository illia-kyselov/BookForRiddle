import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const LockSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M19.5 35.75c-8.975 0-16.25-7.275-16.25-16.25S10.525 3.25 19.5 3.25s16.25 7.275 16.25 16.25-7.275 16.25-16.25 16.25Zm-1.625-14.963V26h3.25v-5.213a4.063 4.063 0 1 0-3.25 0Z"
        />
    </Svg>
);
export default LockSVG;
