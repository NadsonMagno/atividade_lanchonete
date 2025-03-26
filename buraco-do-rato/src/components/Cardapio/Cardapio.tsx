import React from "react";
import {View, Text} from "react-native";

import {styles} from "./style";
import Alimento from "../Alimento/Alimento";

const FotoCocaCola = require("../../../assets/images/download.jpeg");

export default  function Cardapio() {

    return(

        <View style={styles.container}>

            <View style={styles.containerFoto}>
            {/*     <Image source={require("../../assets/logo.png")} /> */}

            </View>

            <View style={styles.comida}>
               
            
            <Alimento image={FotoCocaCola}/>

             
            </View>


        </View>
    );

}
