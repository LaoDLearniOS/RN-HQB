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

export default class HomePage extends Component {

    static navigationOptions =({ navigation, screenProps }) => ({
            
            title: '首页',
            tabBarLabel: '首页',
            
            tabBarIcon: ({ tintColor, focused  }) => (
                <Image
                    source={
                        require('./img/home_nor.png')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),

        });

    render() {
        
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#f00" barStyle="light-content" />
                <Text>首页</Text>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                    onPress={() => navigate('DetailPage', { title: '详情',des:'我是返回点击我' })} >
                    <Text>点击进详情页</Text>
                </TouchableOpacity>
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

