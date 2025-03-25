import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    fundo: {
       
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerLogo:{
        flex: 1,
        justifyContent: 'center',
    },

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
    },
   input:{
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color:'222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
   },

    btnSubmit:{
     backgroundColor: '#35AAFF',
     width: '90%',
     height: 45,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 7,
    },
    submitText:{
        color: '#fff',
        fontSize: 18,
    },
    btnRegister:{
        marginTop: 10,
    },
    registerText:{
        color: '#fff',
    },
})