import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import listaComida from "../Cardapio/listaComida";

interface ItemCompra {
    id: string;
    quantidade: number;
}


const itensCompra: ItemCompra[] = [
    {
        id: "1", 
        quantidade: 1,
    },
    {
        id: "4", 
        quantidade: 2,
    },
];

export default function Resumo() {

    const itensResumo = itensCompra.map((itemCompra) => {
        const itemDetalhes = listaComida.find((comida) => comida.id === itemCompra.id);
        return {
            ...itemDetalhes,
            quantidade: itemCompra.quantidade,
        };
    });


    const total = itensResumo.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Resumo da Compra</Text>
            <FlatList
                data={itensResumo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text style={styles.quantidade}>Quantidade: {item.quantidade}</Text>
                        <Text style={styles.preco}>Preço: R$ {item.preco.toFixed(2)}</Text>
                    </View>
                )}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalTexto}>Total:</Text>
                <Text style={styles.totalValor}>R$ {total.toFixed(2)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    item: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
    },
    quantidade: {
        fontSize: 16,
        color: "#555",
    },
    preco: {
        fontSize: 16,
        color: "#555",
    },
    totalContainer: {
        marginTop: 20,
        padding: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
    },
    totalTexto: {
        fontSize: 20,
        fontWeight: "bold",
    },
    totalValor: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
});