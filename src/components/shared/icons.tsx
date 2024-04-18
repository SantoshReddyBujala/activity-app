import React from "react";
import Svg, { Path, G } from "react-native-svg";

type IconProps = {
  height?: string;
  width?: string;
  color?: string;
};

type IconNames = "home" | "calender" | "completed" | "categories";
const Home = ({ height = "24px", width = "24px", color }: IconProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height}>
    <Path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z" />
    <Path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z" />
    <Path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z" />
    <Path fill="#D84315" d="M18 28H30V44H18z" />
    <Path fill="#01579B" d="M21 17H27V23H21z" />
    <Path
      fill="#FF8A65"
      d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
    />
  </Svg>
);

const Calender = ({ height = "24", width = "24", color }: IconProps) => (
  <Svg height={height} width={width}>
    <G transform="translate(0 -1028.4)">
      <Path
        d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z"
        fill="#bdc3c7"
      />
      <Path
        d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z"
        fill="#ecf0f1"
        transform="translate(0 1028.4)"
      />
      <Path
        d="m5 3c-1.1046 0-2 0.8954-2 2v3 1h18v-1-3c0-1.1046-0.895-2-2-2h-6-2-6z"
        fill="#e74c3c"
        transform="translate(0 1028.4)"
      />
      <Path
        d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
        fill="#c0392b"
        transform="translate(.5 1028.4)"
      />
      <Path
        d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z"
        fill="#bdc3c7"
        transform="translate(0 1028.4)"
      />
      <Path
        d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"
        fill="#c0392b"
        transform="translate(12.5 1028.4)"
      />
      <G fill="#bdc3c7">
        <Path d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z" />
        <Path d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
        <Path d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
        <Path d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z" />
      </G>
    </G>
  </Svg>
);

const Completed = ({ height = "24px", width = "24px", color }: IconProps) => (
  <Svg viewBox="0,0,256,256" width={height} height={width}>
    <G
      fill="#fa6d6d"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
      style="mix-blend-mode: normal"
    >
      <G transform="scale(5.12,5.12)">
        <Path d="M25,2c-12.69047,0 -23,10.30953 -23,23c0,12.69047 10.30953,23 23,23c12.69047,0 23,-10.30953 23,-23c0,-12.69047 -10.30953,-23 -23,-23zM25,4c11.60953,0 21,9.39047 21,21c0,11.60953 -9.39047,21 -21,21c-11.60953,0 -21,-9.39047 -21,-21c0,-11.60953 9.39047,-21 21,-21zM34.98828,14.98828c-0.3299,0.0065 -0.63536,0.17531 -0.81641,0.45117l-10.20117,15.03711l-7.29102,-6.76562c-0.26069,-0.25084 -0.63652,-0.34135 -0.98281,-0.23667c-0.3463,0.10468 -0.60907,0.38821 -0.68715,0.74145c-0.07809,0.35324 0.04068,0.72112 0.31059,0.96201l8.99609,8.34766l11.51172,-16.96484c0.2153,-0.3085 0.23926,-0.71173 0.06201,-1.04356c-0.17725,-0.33183 -0.52573,-0.53612 -0.90186,-0.5287z"></Path>
      </G>
    </G>
  </Svg>
);

const Categories = ({
  height = "24px",
  width = "24px",
  color = "#f87171",
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G id="Iconly/Curved/Category">
      <G id="Category">
        <Path
          id="Stroke 1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Stroke 3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Stroke 5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Stroke 7"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </G>
  </Svg>
);

const Icons = ({
  name,
  height,
  width,
  color,
}: IconProps & { name: IconNames }) => {
  switch (name) {
    case "home":
      return <Home height={height} width={width} color={color} />;
    case "calender":
      return <Calender height={height} width={width} color={color} />;
    case "completed":
      return <Completed height={height} width={width} color={color} />;
    case "categories":
      return <Categories height={height} width={width} color={color} />;
  }
};

export default Icons;
