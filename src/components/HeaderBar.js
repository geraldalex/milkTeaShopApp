import React from 'react'
import { Text, View,SafeAreaView,Image, TouchableOpacity, StyleSheet,Platform} from 'react-native'
import { connect } from 'react-redux';

import { COLORS, SIZES, FONTS, icons} from '../constants'
import  Constants  from 'expo-constants';
import { toogleTheme } from '../stores/themeActions';

const HeaderBar = ({appTheme, toogleTheme}) => {

function toogleThemeHeandler() {
    if(appTheme.name == 'light'){
        toogleTheme('dark')
    }else {
        toogleTheme('light')
    }
}

    return (
        <SafeAreaView style={{
            height:150,
            width:'100%',
            backgroundColor:COLORS.purple,
            flexDirection:'row',
            paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
        }}>
         {/* Greetings */}
<View style={{flex:1,
paddingLeft:SIZES.padding}}>



<Text style={{color:COLORS.white, ...FONTS.h2}}>Wendy</Text>
<Text style={{color:COLORS.white, ...FONTS.h2}}>Welcome Back!</Text>
</View>
         {/* Toogle Button */}
         <TouchableOpacity
         style={{
             flexDirection:'row',
             alignItems:'center',
             justifyContent:'flex-end',
             marginHorizontal:SIZES.padding,
             height:40,
             borderRadius:20,
             backgroundColor: COLORS.lightPurple
         }}
         onPress={() => toogleThemeHeandler()}
         >
{/* Sun */}

<View style={{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    ...(appTheme.name == "light") ? styles.selectedLightModeStyle : {}
}}>
<Image
source={icons.sunny}
style={{
    height:30,
    width:30,
    tintColor:COLORS.white
}}
/>
</View>

{/* Moon */}

<View style={{
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    ...(appTheme.name == "dark") ? styles.selectedNightModeStyle : {}
}}>
<Image
source={icons.night}
style={{
    height:30,
    width:30,
    tintColor:COLORS.white
}}
/>
</View>
         </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    selectedNightModeStyle: {
        borderRadius:20,
        backgroundColor:COLORS.black
    },
    selectedLightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.yellow
    }
}) 



function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toogleTheme: (themeType) => {return dispatch(toogleTheme(themeType))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)