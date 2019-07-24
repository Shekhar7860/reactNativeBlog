import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class RankingScreen extends Component {

  constructor() {
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      image : "",
      details : ""
    };
 
  }
  componentDidMount = () => {
    const {state} = this.props.navigation;
    console.log(state.params);
     if(state.params)
     {
       console.log(state.parms, 'params');
       
       this.setState({details:state.params.data.text});
    this.setState({image:state.params.data.url});
   
     }
     else{
       this.setState({user:" "});
     }
  }
  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1, flexDirection: 'column'}}>
       <View style={styles.toolbar}>
                  <TouchableOpacity
                     style={styles.toolbarButton}
          onPress={() => {
            this.props.navigation.goBack()
          }}
        >
         <Image style={{width:30, marginLeft:5, height:30}} source={require('../images/back.png')}></Image>
        </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>FunBlog</Text>
                    <TouchableOpacity
                    style={styles.toolbarButton}
         
        >
          <Icon
            name="back"
            size={20}
            color="#FFFFFF"
            style={styles.headerLeftIconStyle}
          />
        </TouchableOpacity>
                </View>
                <Image
                  style={{width:200, height : 200, marginTop:10, alignSelf:'center'}}
                  source={{uri: this.state.image}}
                />
                <Text style={{marginTop:10, alignSelf : 'center'}}>{this.state.details}</Text>
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
