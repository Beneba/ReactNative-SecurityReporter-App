
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

LogBox.ignoreLogs(['Remote debugger']);


import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
     
      <View style ={styles.HeaderContainer} >
          <Image source={require("./../../assets/Img/securityimg.png")} style= {styles.ImageContainer} />
      </View>
      <View style = {styles.BriefDetails}>
          <Text style = {styles.CaptionHeader1}>Your Safety is Needed,  </Text>
          <Text style = {styles.CaptionHeader2}>Report on the Go!</Text>
      </View>
      <View style = {styles.Swipe}>
          
          <Text style ={styles.dot1} >.</Text>
          <Text style ={styles.dot2}>.</Text>
          <Text style ={styles.dot1}>.</Text>
      </View>
      <View style = {styles.RegisterOptions}>
        <TouchableOpacity style = {styles.signupContainer}>
          <Text style ={styles.SignupText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.loginContainer}>
          <Text style ={styles.loginText}>Login </Text>
        </TouchableOpacity>
          
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#f0f2f2',
    padding :10,
   
  },
  HeaderContainer:{
      flex:6,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",

  },
  ImageContainer: {
    alignItems:"center",
    justifyContent: "center",
    padding: 10,
    height: 250,
    width: 250,

  },
  BriefDetails: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      
  },
  CaptionHeader1:{
    fontSize: 22,
    fontWeight: "bold",
  },
  CaptionHeader2:{
    fontSize: 18,
    
  },
  Swipe: {
    flex: 1,
    // backgroundColor: "lightgray",
    alignItems:"center",
    flexDirection:"row",
    justifyContent: "center",
},
RegisterOptions: {
    flex: 2,
    flexDirection: "row",
    paddingHorizontal: 5,
    
    alignItems:"center",
    justifyContent: "space-around",
    paddingHorizontal: 5
},
signupContainer: {
  borderRadius: 10,
  borderWidth:2,
  padding:15,
  backgroundColor: "blue",
  color:"white",
  borderColor: "blue",

},
SignupText:{
  color:"white",
  fontWeight:"bold",
},
loginContainer: {
  borderRadius: 10,
  borderWidth:2,
  padding:15,
  backgroundColor: "white",
  color:"white",
  borderColor: "blue",

},
loginText:{
  color:"blue",
  fontWeight:"bold",
},
dot1:{
  backgroundColor: "lightgray",
  marginVertical:30,
  borderRadius:50,
  height:10,
  width:20,
  marginTop:20,
  
},
dot2:{
backgroundColor: "blue",
marginVertical:30,
borderRadius:50,
height:10,
width:20,
marginTop:20,

}
});
