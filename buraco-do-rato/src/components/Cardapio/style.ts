import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    containerFoto:{
        alignItems: "center",
        justifyContent: "center",
    },

    fotoRestaurante:{
        height: 150,
        borderRadius: 100,
    },

    comida:{
        width: "100%",
        flexDirection: "column",
  
        padding: 10,
    },

    fotoComida: {
        height: 40,
        width: 40,
    }
});