import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const App = () => {
  return (
  <View style={styles.container}>
    <Appbar.Header style={styles.appbar}>
      <Appbar.Content titleStyle={{textAlign: 'center',fontWeight:'500'}} title="Bayesian React Native Test" />
    </Appbar.Header>
    <View style={{padding:10,marginTop:30}}>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View  style={{backgroundColor:"#7ED194",borderRadius:50,width:90,height:90,marginRight:150}}>
         <Icon name="user-circle-o" size={60} color="#E78829" style={{marginLeft:15,marginTop:15}} />  
       </View>
       <View>
         <Text style={{color:'#006C45',fontWeight:'900',fontSize:20}}>Sumesh T P</Text>
         <Text style={styles.address}> Kalpetta</Text>
         <Text style={styles.address}>Wayanad</Text>
      </View>
   </View>
   <View style={styles.itemContainer}>
     <View  style={{backgroundColor:"#298FE7",borderRadius:50,width:80,height:80,marginRight:90}}>
       <Icon name="phone" size={60} color="white" style={{marginLeft:15,marginTop:10}} />  
     </View>
     <View>
        <Text style={{color:'white',fontWeight:'900',fontSize:20,marginLeft:-10}}>TELEPHONE CALLS</Text>
        <Text style={styles.call}>Overall:75 </Text>
        <Text style={styles.callToday}>Today:10</Text>
      </View>
     </View>
     <View style={styles.itemContainer}>
       <View style={{backgroundColor:"#25D366",borderRadius:50,width:80,height:80,marginRight:150}}>
         <Icon name="whatsapp" size={60} color="white" backgroundColor='green'style={{marginLeft:15,marginTop:10}} />  
   </View>
   <View>
     <Text style={{color:'white',fontWeight:'900',fontSize:20}}>WHATSAPP</Text>
     <Text style={styles.whatsapp}>Overall:75</Text>
     <Text style={styles.whatsappToday}>Today:10</Text>
   </View>
  </View>
 </View>
</View>
  )
}

export default App

const styles = StyleSheet.create({
   appbar:{
    backgroundColor:"#006C45",
    borderRadius: 100,
   },
    container:{
      flex: 1,
      backgroundColor: '#F3FFF6',
    },
    iconContainer:{
      paddingRight:100,
    },
    address:{
      color:'#006C45',
      fontWeight:'500',
      fontSize:15,
       marginLeft:35
    },
    itemContainer:{
  flexDirection:'row',
  justifyContent:'center',
  backgroundColor:'#006C45',
  padding:20,
  borderRadius:20,
  marginTop:80
},
call:{
  color:'white',
  fontWeight:"500",
  fontSize:15,
  marginLeft:90
},
callToday:{
  color:'white',
  fontWeight:"500",
  fontSize:15,
  marginLeft:100
},
whatsapp:{
  color:'white',
  fontWeight:"500",
  fontSize:15,
  marginLeft:30
},
whatsappToday:{
  color:'white',
  fontWeight:"500",
  fontSize:15,
  marginLeft:40
},
})