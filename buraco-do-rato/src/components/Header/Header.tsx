import { View, Text, Pressable} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "./style";
import React from "react";

export  function Header(){
    return(
        <View style={styles.container}>
            <Pressable>
                <Ionicons name="menu"   size={20} color={"#121212"}/>
            </Pressable>
        </View>
      
    );
}
