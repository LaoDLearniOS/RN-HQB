import React, { Component } from 'react';

import HomePage from './views/HomePage';
import InverstPage from './views/InverstPage';
import MinePage from './views/MinePage';
import DetailPage from './views/DetailPage';

import {
    StyleSheet,
    Image,
    Style
} from 'react-native';

import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
// export default class Pages extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <Navigator/>
//         )
//     }
// }
const TabRouteConfigs = {
    Home: {
        screen: HomePage,
    },
    Inverst: {
        screen: InverstPage,
    },
    Mine: {
        screen: MinePage,
    },
};
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


const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    lazy: true,
    showIcon: true,//是否显示图标，默认关闭
    showLabel: true,//是否显示label，默认开启
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否左右滑动,如果有DrawerNavigator,最好设置为false避免手势冲突
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: 'red', // 文字和图片选中颜色
        inactiveTintColor: 'gray', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: 'white', // TabBar 背景色
            height:50
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop: 0,
        },
    },
};
const Tab = createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const Navigator = createStackNavigator({
    Tab: {
        screen: Tab,
    },
    Home: {
        screen: HomePage,
    },
    DetailPage: {
        screen: DetailPage,
    }
},{
    // mode: 'float',
    headerMode: 'none',
})

export default Navigator;