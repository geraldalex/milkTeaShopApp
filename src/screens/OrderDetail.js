import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image, TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, constants,dummyData, images } from '../constants';
import { IconButton, TabButton, VerticalTextButton } from '../components';

import { connect } from 'react-redux';

const OrderDetail = ({navigation, route, appTheme}) => {

    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState(20)
    const [selectedMilkIndex, setSelectedMilkIndex] = React.useState(0)
    const [selectedSweetnessLevel, setSelectedSweetnessLevel] = React.useState(50)
    const [selectedIceLevel, setSelectedIceLevel] = React.useState(50)

    React.useEffect(() => {
        let {selectedItem} = route.params
        setSelectedItem(selectedItem)
    })

function milcButtonHeandler(action){
    if(action == "next" && selectedMilkIndex < dummyData.milkList.length - 1){
        setSelectedMilkIndex(selectedMilkIndex + 1)
    } else if (action == "prev" && selectedMilkIndex > 0) {
        setSelectedMilkIndex(selectedMilkIndex - 1)
    }
}


function sweetnessLevelButtonHeandler(action){
    if(action == "+" && selectedSweetnessLevel < 100){
        setSelectedSweetnessLevel(selectedSweetnessLevel + 25)
    } else if (action == "-" && selectedSweetnessLevel > 0) {
        setSelectedSweetnessLevel(selectedSweetnessLevel - 25)
    }
}

function iceLevelButtonHeandler(action){
    if(action == "+" && selectedIceLevel < 100){
        setSelectedIceLevel(selectedIceLevel + 25)
    } else if (action == "-" && selectedSweetnessLevel > 0) {
        setSelectedIceLevel(selectedIceLevel - 25)
    }
}





    function renderHeaderSection(){
        return(
            <View style={{
                width:'100%',
                height:'55%',
                alignItems:'center',
                justifyContent:'center'
            }}>
<View style={{
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:40,
    borderBottomLeftRadius:100,
    backgroundColor:COLORS.primary

}}/>

<Image
source={selectedItem?.thumbnail}
resizeMode='contain'
style={{
    width:SIZES.width * 0.7,
    width:SIZES.height * 0.7,

}}
/>
{/* Back Button */}

<IconButton
containerStyle={{
    position:'absolute',
    top:45,
    left:20,
    padding:10,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.black
}}
icon={icons.leftArrow}
onPress={() => navigation.goBack()}
/>
            </View>
        )
    }


    function renderDetailSecion(){
        return(
            <View style={{
                flex:1,
                paddingHorizontal:10,
                marginTop:SIZES.padding,
                justifyContent:'space-between'

            }}>
{/* Name and Description */}
<View style={{marginLeft:20}}>
    <Text style={{
        color:appTheme.headerColor,
        ...FONTS.h1,
        fontSize:25
    }}>
{selectedItem?.name}
    </Text>

    <Text style={{
        marginTop:SIZES.base,
        color:appTheme.textColor,
        ...FONTS.body3,
      
    }}>
{selectedItem?.description}
    </Text>
</View>
{/* Size */}
<View style={{
    flexDirection:'row',
    alignItems:'center',
    marginTop:SIZES.radius
}}>
{/* label */}
<Text style={{
    flex:1,
    color:appTheme.headerColor,
    ...FONTS.h2,
    fontSize:20
}}>Pick A Size</Text>

{/* Cup */}
<View style={{
    flex:1,
    flexDirection:'row'
}}>
<TouchableOpacity style={{
    alignItems:'center',
    justifyContent:'flex-end'
}}
onPress={() => setSelectedSize(20)}
>
<ImageBackground
source={icons.coffee_cup}
style={{
    width:80,
    height:80,
    alignItems:'center',
    justifyContent:'center'
}}
imageStyle={{tintColor:selectedSize === 20 ? COLORS.primary : COLORS.gray2}}
>
<Text style={{color:COLORS.white, ...FONTS.body3}}>20oz</Text>
</ImageBackground>
<Text style={{
    marginTop:3,
    color:COLORS.white,
    ...FONTS.body3
}}>$4.50</Text>
</TouchableOpacity>


<TouchableOpacity style={{
    alignItems:'center',
    justifyContent:'flex-end'
}}
onPress={() => setSelectedSize(32)}
>
<ImageBackground
source={icons.coffee_cup}
style={{
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center'
}}
imageStyle={{tintColor:selectedSize === 32 ? COLORS.primary : COLORS.gray2}}
>
<Text style={{color:COLORS.white, ...FONTS.body3}}>32oz</Text>
</ImageBackground>
<Text style={{
    marginTop:3,
    color:COLORS.white,
    ...FONTS.body3
}}>$5.00</Text>
</TouchableOpacity>
</View>
</View>
{/* Milk, Sweetness and Ice */}
<View style={{
    flexDirection:'row',
    marginTop:SIZES.padding
}}>
{/* Milk Section */}
<View style={{
    flex:1,
    alignItems:'center'
}}>
<Text style={{
    color:appTheme.headerColor,
    ...FONTS.h2,
    fontSize:20
}}>
    Milk
</Text>

<View style={{
    flexDirection:'row',
    width:100,
    height:100,
    marginTop:SIZES.base,
    alignItems:'center',
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.primary


}}>
    <IconButton
    icon={icons.leftArrow}
    containerStyle={{
        marginLeft: -15,
        width:25,
        height:25,
        borderRadius:3,
        backgroundColor:COLORS.white
    }}
    iconStyle={{
        width:15,
        height:15,
        tintColor:COLORS.black
    }}
    onPress={() =>milcButtonHeandler("prev") }
    />

    <Image
    source={dummyData.milkList[selectedMilkIndex].image}
    resizeMode='contain'
    style={{
        flex:1,
        width:70,
        height:70,
        tintColor:COLORS.white
    }}
    />

<IconButton
    icon={icons.rightArrow}
    containerStyle={{
        marginRight: -15,
        width:25,
        height:25,
        borderRadius:3,
        backgroundColor:COLORS.white
    }}
    iconStyle={{
        width:15,
        height:15,
        tintColor:COLORS.black
    }}
    onPress={() =>milcButtonHeandler("next") }
    />

</View>
<Text style={{
    marginTop:SIZES.base,
    color:COLORS.white,
    ...FONTS.body3
}}>{dummyData.milkList[selectedMilkIndex].name}</Text>
</View>
{/* Sweetness & Ice */}
<View style={{flex:1}}>
{/* Sweetness */}
<View style={{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:SIZES.padding
}}>
<Text style={{
    textAlign:'center',
    color:appTheme.headerColor,
    ...FONTS.h2,
    fontSize:20
}}>Sweetness</Text>
<View style={{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:'60%',
    borderRadius:15,
    backgroundColor:COLORS.primary
}}>
<IconButton
    icon={icons.leftArrow}
    containerStyle={{
        marginLeft: -8,
        width:25,
        height:25,
        borderRadius:3,
        backgroundColor:COLORS.white
    }}
    iconStyle={{
        width:15,
        height:15,
        tintColor:COLORS.black
    }}
    onPress={() =>sweetnessLevelButtonHeandler("-") }
    />
<View style={{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}}>
<Text style={{color:COLORS.white, ...FONTS.h3}}>{selectedSweetnessLevel}%</Text>
</View>
<IconButton
    icon={icons.rightArrow}
    containerStyle={{
        marginRight: -8,
        width:25,
        height:25,
        borderRadius:3,
        backgroundColor:COLORS.white
    }}
    iconStyle={{
        width:15,
        height:15,
        tintColor:COLORS.black
    }}
    onPress={() =>sweetnessLevelButtonHeandler("+") }
    />
</View>
</View>

{/* Ice */}

<View style={{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:SIZES.padding
}}>
<Text style={{
    textAlign:'center',
    color:appTheme.headerColor,
    ...FONTS.h2,
    fontSize:20
}}>Ice</Text>
<View style={{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:'60%',
    borderRadius:15,
    backgroundColor:COLORS.primary
}}>
<IconButton
    icon={icons.leftArrow}
    containerStyle={{
        marginLeft: -8,
        width:25,
        height:25,
        borderRadius:3,
        backgroundColor:COLORS.white
    }}
    iconStyle={{
        width:15,
        height:15,
        tintColor:COLORS.black
    }}
    onPress={() =>iceLevelButtonHeandler("-") }
    />
<View style={{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}}>
<Text style={{color:COLORS.white, ...FONTS.h3}}>{selectedIceLevel}%</Text>
</View>
<IconButton
    icon={icons.rightArrow}
    containerStyle={{
        marginRight: -8,
        width:25,
        height:25,
        borderRadius:3,
        backgroundColor:COLORS.white
    }}
    iconStyle={{
        width:15,
        height:15,
        tintColor:COLORS.black
    }}
    onPress={() =>iceLevelButtonHeandler("+") }
    />
</View>
</View>
</View>

</View>
            </View>
        )
    }

    return (
        <View style={{flex:1, backgroundColor:appTheme.backgroundColor}}>
            <ScrollView
            contentContainerStyle={{
                flex:1,
                paddingBottom:200
            }}
           
            >
{/* Header */}
{renderHeaderSection()}

{/* Detail */}

{renderDetailSecion()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)