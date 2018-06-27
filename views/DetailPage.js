import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import HeaderCom from './header/HeaderCom';
export default class DetailVC extends Component {
  //接收上一个页面传过来的title显示出来
  static navigationOptions = ({ navigation }) => {
        
    }
  // 点击返回上一页方法
  backVC=()=>{
    //返回首页方法
    this.props.navigation.goBack();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
        <HeaderCom backgEvent={()=>this.props.navigation.goBack()} title="新闻"/>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
