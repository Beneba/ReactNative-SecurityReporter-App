import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

function Login() {
    return (
        <View style ={styles.container} >
            <View style ={styles.headerContainer}> 
                <Text style = {styles.loginContainer}>Create Account </Text>
            </View>
            <View style ={styles.inputContainer}>
             <TextInput 
                    style= {styles.textContainer} 
                    placeholder = "Name"     />
                <TextInput 
                    style= {styles.textContainer} 
                    placeholder = "E-mail"     />
                <TextInput style= {styles.textContainer}
                secureTextEntry= {true} 
                placeholder = "Password" />
                

            </View>
            <View style ={styles.loginBtnContainer}>
                <TouchableOpacity style ={styles.buttonLogin} >
                    <Text style ={styles.log} >Sign Up</Text>
                </TouchableOpacity>
              
                  <TouchableOpacity style={styles.ImageContainer}>
                      <Image source={require("./../../assets/Img/googleSignIn.png")} style= {styles.Image} />
                   </TouchableOpacity>
                
               
            </View>

            
            <View style ={styles.accountContainer}>
                <Text style ={styles.noAccountContainer} >Already have account?</Text>
                <Text style ={styles.signupText} >Login</Text>

            </View>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: 'white',
      marginHorizontal: 50,
   
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    headerContainer: {
        paddingTop:100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginContainer:{
        fontWeight: "bold",
        color: 'blue',
        fontSize: 30,
    },
      inputContainer:{
        paddingTop:50,
                 
      },
      loginBtnContainer: {
        paddingTop:50,
       
        backgroundColor:"white",
        borderRadius:10,
        paddingBottom:100,
      },

      accountContainer:{
          paddingBottom:100,      
          flexDirection:"row",
          alignItems: "center",
          justifyContent: "center",
      },
      noAccountContainer:{
        marginRight:10,
        fontSize:16,
      },
      signupText:{
        fontSize:16,
        color:'blue',
      },
     
      textContainer:{
          borderBottomWidth:2,
          borderBottomColor: 'blue',
          paddingTop:10,
          fontSize:16,
          fontWeight: "bold",
          marginTop:20
          
      },
      forgetPassword: {
          alignSelf:"flex-end",
          color: "blue",
          padding:10
      },
      buttonLogin:{
        
        borderRadius:10, 
        backgroundColor:'blue', 
        marginHorizontal:15,
        height:50,
       alignItems:"center",
       justifyContent: "center",
       marginBottom:10,  
       
      },
      log:{
          color: "white",
          fontSize: 20,
          fontWeight:"bold"
      },
    
      ImageContainer: {
        
        padding: 10,
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",

      },
      Image:{ 
        height:55,
        width: 240,
        
        borderRadius:10,
        alignItems: "center",
        justifyContent:"center",
      }

  });


export default Login;
