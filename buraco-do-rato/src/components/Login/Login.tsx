import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './style';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.fundo}>
    
    <View style={styles.container}>
       
        <TextInput placeholder="Email" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
          
        <TextInput placeholder="Senha" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
      
        <TouchableOpacity style={styles.btnSubmit}>
            <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar conta</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>     
  );
}