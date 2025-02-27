import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const HomeSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={38}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M16.896 4.501a3.167 3.167 0 0 1 4.208 0l6.23 5.537.395-2.381a1.583 1.583 0 0 1 3.124.52l-.722 4.347 4.172 3.71a1.583 1.583 0 0 1-2.103 2.365l-.734-.652-1.247 12.451a3.167 3.167 0 0 1-3.152 2.852H10.933a3.166 3.166 0 0 1-3.15-2.852l-1.245-12.45-.737.651A1.583 1.583 0 0 1 3.7 16.234L16.896 4.5Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default HomeSVG;
