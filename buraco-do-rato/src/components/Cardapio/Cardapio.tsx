import React from "react";
import {View, Text} from "react-native";

import {styles} from "./style";
import Alimento from "../Alimento/Alimento";

const FotoCocaCola = require("../../../assets/images/download.jpeg");
import { FlatList } from "react-native";
import listaComida from "../Cardapio/listaComida"

export default  function Cardapio() {

    return(

        <View style={styles.container}>

            <View style={styles.containerFoto}>
            {/*     <Image source={require("../../assets/logo.png")} /> */}

            </View>

            <View style={styles.comida}>
               
            <Text> Menu</Text>
          
            <FlatList
    data={listaComida}
    renderItem={({ item }) => (
        <Alimento
            image={
                item.imagemUrl.uri // Verifica se é uma URL remota
                    ? { uri: item.imagemUrl.uri }
                    : item.imagemUrl // Caso contrário, usa require
            }
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
        />
    )}
/>
             
            </View>


        </View>
    );

}
