import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    containerBack: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(40),
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    }
)