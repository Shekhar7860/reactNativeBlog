
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight, FlatList } from 'react-native';
import {  DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slideshow from 'react-native-slideshow';
import React, { Component } from 'react';
import { InterstitialAdManager } from 'react-native-fbads';

export default class ChannelScreen extends Component {
  

  constructor() {
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      names: [
        {
           id: 0,
           date: '07 June 2019',
           text : 'How to Start A Business With 0 Investment',
           url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg'
        },
        {
           id: 1,
           date: '08 June 2019',
           text : 'How To Prevent Hair From Falling',
           url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg'
        },
        {
           id: 2,
           date: '09 June 2019',
           text : 'Who Will Win The ICC World Cup 2019',
           url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg'
        },
        {
           id: 3,
           date: '09 June 2019',
          text: 'How To Achieve Success In Network Marketing',
           url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg'
        },
        {
          id: 4,
          date: '11 June 2019',
          text: 'How To Become More Successfull',
          url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg'
       },
       {
          id: 5,
          date: '12 June 2019',
          text: 'Why Do You Need Money',
          url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg'
       }
     ],
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
  componentDidMount() {

    InterstitialAdManager.showAd("665254733991193_665318663984800")
  .then(didClick => {
    console.log('working')
  })
  .catch(error => {
    console.log(error, 'rror')
  });
  }
  _openDetail = (value) => {
    this.props.navigation.navigate('RankingScreen', { data: value })
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

  space(){
    return(<View style={{height: 50, width: 2, backgroundColor: 'black'}}/>)
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

     <FlatList
          data={this.state.names}
          style={{flexDirection: 'column', marginLeft:10}}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View  >
         <TouchableOpacity onPress={() => this._openDetail(item)}>
            <View style={styles.rowElement}>
               <View style={styles.emptyWidth}></View>
                <View style={styles.imageWidth}>
                  <Image
                  style={styles.image}
                  source={{uri: item.url}}
                />
               </View>
               </View>
           <View style={styles.rowElement}>
          <View style={styles.emptyWidth}></View>
           <View style={styles.imageWidth}>
           <Text style={styles.textalignment2}>{item.date} </Text>
           </View>
           </View>
        
          <View style={styles.rowElement}>
          <View style={styles.emptyWidth}></View>
           <View style={styles.imageWidth}>
           <Text style={styles.textalignment}>{item.text}</Text>
           </View>
           </View>
           </TouchableOpacity>
           </View>
          }
          keyExtractor={item => item.email}
        />
           
           
          
           

           
          
           


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
  marginTop:5,
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
  width:80
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