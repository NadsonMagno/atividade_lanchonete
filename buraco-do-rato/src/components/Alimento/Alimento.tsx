import React from "react";

import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { styles } from "./style";

interface AlimentoProps {
    image: ImageSourcePropType; // Tipo correto para a propriedade image
    [key: string]: any; // Permite outras propriedades opcionais

    nome: string;
    descricao: string;
    preco: number;

}

export default function Alimento({image, nome,descricao, preco, ...rest}: AlimentoProps) {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} style={styles.foto}/>

            <View style={styles.textos}>
            <Text>{nome}</Text>
            <Text>{descricao}</Text>
            </View>

            <View >
                
                <Text>Preço: R$ {preco}</Text>
            </View>
           

        </TouchableOpacity>
    )
}