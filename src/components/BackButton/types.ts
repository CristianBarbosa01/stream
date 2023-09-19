import { OpaqueColorValue } from "react-native";

export interface Props{
    onClick: () => void;
}

export interface IconProps {
     size?: number;
     name?: any;
     color?: string | OpaqueColorValue;
}