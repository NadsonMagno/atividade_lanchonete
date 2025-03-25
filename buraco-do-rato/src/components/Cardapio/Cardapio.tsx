import React from "react";
import {View, Text} from "react-native";

import {styles} from "./style";

export default  function Cardapio() {

    return(

        <View style={styles.container}>

            <View style={styles.containerFoto}>
            {/*     <Image source={require("../../assets/logo.png")} /> */}

            </View>

            <View style={styles.comida}>
               
                <View>
                    <Text>Nome do Prato</Text>
                    <Text>Descrição do Prato</Text>
                    <Text>Preço</Text>
                </View>

               {/*  <Image source={require("../../assets/logo.png")} style={styles.foto} style={styles.fotoComida}/> */}
            </View>


        </View>
    );

}
