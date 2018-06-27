import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
export default class MinePage extends Component {
    static navigationOptions = ({ navigation }) => ({
     headerMode: 'none',
            title: '我的',
            tabBarLabel: '我的',
            
            tabBarIcon: ({ tintColor, focused  }) => (
                <Image
                    source={
                        require('./img/more_nor.png')
                    }
                    style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
    });
    render() {
        headerMode: 'none';
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>我的</Text>
            </View>
        );
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