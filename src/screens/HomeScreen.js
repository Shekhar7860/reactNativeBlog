
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import {  DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slideshow from 'react-native-slideshow';
import React, { Component } from 'react';
export default class ChannelScreen extends Component {

  constructor() {
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Tips To Protect Hair From Falling',
          url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg',
        }, {
          title: 'Who Will The ICC Cricket World Cup 2015',
  
          url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg',
        }, {
          title: 'How To Get Success In Network Marketing',
        
          url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg',
        },
      ],
    };
 
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {

    const images = [
      'https://firebasestorage.googleapis.com/v0/b/businessideatest.appspot.com/o/business4i.jpeg?alt=media&token=160034be-416f-4883-af35-b9a9c1839e63',
      'https://firebasestorage.googleapis.com/v0/b/businessideatest.appspot.com/o/images6.jpeg?alt=media&token=b5a59a46-e658-44a4-af1b-8dcbb8ea4abc',
      'https://firebasestorage.googleapis.com/v0/b/businessideatest.appspot.com/o/images10.jpeg?alt=media&token=675800bb-6695-490b-b24f-70d10e6a1bdd'
    ];
    return (
      <View style={{flex:1}}>
      <View style={styles.toolbar}>
                  <TouchableOpacity
                     style={styles.toolbarButton}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }}
        >
          <Icon
            name="bars"
            size={20}
            color="#FFFFFF"
            style={styles.headerLeftIconStyle}
          />
        </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>FunBlog</Text>
                    <TouchableOpacity
                    style={styles.toolbarButton}
         
        >
          <Icon
            name="search"
            size={20}
            color="#FFFFFF"
            style={styles.headerLeftIconStyle}
          />
        </TouchableOpacity>
                </View>
                
                <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
           />

           <View style={styles.rowElement}>
          <View style={styles.emptyWidth}></View>
           <View style={styles.imageWidth}>
           <Image
           style={styles.image}
           source={{uri: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg'}}
          />
           </View>
           <View style={styles.imageWidth}>
           <Image
           style={styles.image}
           source={{uri: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg'}}
          /></View>
           <View style={styles.imageWidth}>
           <Image
           style={styles.image}
          source={{uri: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg'}}
        /></View>
             <View style={styles.emptyWidth}></View>
           </View>
           <View style={styles.rowElement}>
          <View style={styles.emptyWidth}></View>
           <View style={styles.imageWidth}>
           <Text style={styles.textalignment2}>07 June 2019 </Text>
           </View>
           <View style={styles.imageWidth}>
           <Text style={styles.textalignment2}>15 June 2019 </Text></View>
           <View style={styles.imageWidth}>
           <Text style={styles.textalignment2}>21 June 2019 </Text></View>
             <View style={styles.emptyWidth}></View>
           </View>
           <View style={styles.rowElement}>
          <View style={styles.emptyWidth}></View>
           <View style={styles.imageWidth}>
           <Text style={styles.textalignment}>How To Start A Business With 0 Investment</Text>
           </View>
           <View style={styles.imageWidth}>
           <Text  style={styles.textalignment}>Tips For Getting Success In Network Marketing</Text></View>
           <View style={styles.imageWidth}>
           <Text  style={styles.textalignment}>Who Will Win ICC Cricket World Cup 2019</Text></View>
             <View style={styles.emptyWidth}></View>
           </View>
           
          
           

           
          
           


               </View>
    );
  }
}


const styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#4834d4',
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row'    //Step 1
},
textalignment:{
  marginTop:10,
  fontSize:12
},
textalignment2:{
  marginTop:5,
  fontSize:10,
  color : '#95a5a6'
},
rowElement:{
  width:'100%',
  flexDirection : 'row',
}, 
emptyWidth : {
  width : '10%'
},
imageWidth : {
  width:'30%'
},
image: {
  marginTop:20,
  width: 80, height: 70
},
toolbarButton:{
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center'
},
toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1, 
    fontSize:20               //Step 3
}, 
  headerLeftIconStyle: {
    marginLeft: 15,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputIconStyle: {
    padding: 5,
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});