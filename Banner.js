import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Banner extends Component {
  render() {
    let pic = {
      uri: 'https://images.unsplash.com/photo-1467703834117-04386e3dadd8?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop='
    };
    return (
      <View>
        <Image source={pic} style={{width:450, height:300}}/>
      </View>
    );
  }
}
