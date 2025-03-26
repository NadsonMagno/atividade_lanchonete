import React from "react";

import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { styles } from "./style";

interface AlimentoProps {
    image: ImageSourcePropType; // Tipo correto para a propriedade image
    [key: string]: any; // Permite outras propriedades opcionais
}

export default function Alimento({image, ...rest}: AlimentoProps) {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} style={styles.foto}/>
            <View>
            <Text>Nome do Prato</Text>
            <Text>Descrição do Prato</Text>
            </View>
            <View>
                
                <Text>Preço: R$ 10</Text>
            </View>
           

        </TouchableOpacity>
    )
}