import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Header} from '../components/Header/Header'
import { styles } from "./style"
import React from "react";
import Login from '../components/Login/Login'
import Cardapio from "../components/Cardapio/Cardapio";
import Resumo from "../components/Resumo/Resumo";

export default function Index(){

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Login />

        <Cardapio />
        <Resumo />
    </ScrollView>
    );
}

