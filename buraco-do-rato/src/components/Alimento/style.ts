import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
       flexDirection: 'row',
       marginBottom: 10,
       padding: 10,
    },
   

    foto:{
        width: 80,
        height: 80,
        borderRadius: 6,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#5A5A5A",
    },

    descricao: {
        fontSize: 16,
    },

    preco: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    textos: {
        flex: 1,
        padding: 10,
    }


})