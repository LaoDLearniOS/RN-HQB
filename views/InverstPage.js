import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    StatusBar
} from 'react-native';
// 引入自定义头部
import HeaderCom from './header/HeaderCom';
export default class HomePage extends Component {
    static navigationOptions ={
        headerMode: 'none',
        title: '投资',
        tabBarLabel: '投资',
            
        tabBarIcon: ({ tintColor, focused  }) => (
            <Image
                source={
                    require('./img/list_nor.png')
                }
                style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
            />
        ),
    };

    componentDidMount() {

        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content',true); //主题色（ enum('default', 'light-content', 'dark-content')）
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        return(
            
            <View>
            <HeaderCom isNotShowBack headerColor = 'red' title="投资"/>
                <Text>投资</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});