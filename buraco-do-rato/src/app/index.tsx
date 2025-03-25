import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Header} from '../components/Header/Header'
import { styles } from "./style"
import React from "react";
import Login from '../components/Login/Login'

export default function Index(){

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.container}>
        <Header/>

        </View>

        <Login />
    </ScrollView>
    );
}

