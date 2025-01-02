import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignContent: "center",
    },

    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 500,
        textAlign: 'center',
    },

    header: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: 700,
        padding: 20,
    },

    input: {
        width: 300,
        height: 60,
        padding: 10,
        margin: 12,
        borderRadius: 20,
        overflow: "hidden",
        color: "white",
        fontWeight: 700,
        fontSize: 30,
        backgroundColor: "#121212",
    },

    form: {
        backgroundColor: "#080808",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 170
    },
});