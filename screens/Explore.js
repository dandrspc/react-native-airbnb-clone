import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '@Explore/Category'

const { height, width } = Dimensions.get('window')

class Explore extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight == 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{
                        height: this.startHeaderHeight, backgroundColor: 'white',
                        borderBottomWidth: 1, borderColor: "#dddddd"
                    }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try Bogotá"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: "white" }}
                            />
                        </View>
                    </View>
                    <ScrollView>
                        <View style={{
                            flex: 1, backgroundColor: 'white',
                            paddingTop: 20
                        }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we find, Varun?
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../assets/home.jpg')} name="Home" />
                                    <Category imageUri={require('../assets/experiences.jpg')} name="Experiences" />
                                    <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant" />
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>Introducing Airbnb Plus</Text>
                            <Text style={{ fontWeight: '100', marginTop: 10 }}>A new selection of homes verified for quality & confort</Text>
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../assets/home.jpg')} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});