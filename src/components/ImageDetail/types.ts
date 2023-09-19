import { ImageResizeMode } from "react-native";

export interface Props {
    source: string;
    mode: ImageResizeMode
    height?: number;
}