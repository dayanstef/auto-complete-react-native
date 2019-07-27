import React, {Component} from 'react' ;
import {StyleSheet, Text, View} from 'react-native';
import Countries from './app/screens/Countries';
import * as Font from 'expo-font'

export default class App extends Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
        });

        this.setState({fontLoaded: true});
    }

    render() {
        return this.state.fontLoaded ? (
            <View style={styles.container}>
                <Text style={styles.heading}>ReactNative AutoComplete</Text>
                <Countries/>
            </View>
        ) : null;
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: "10%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    heading: {
        fontSize: 18,
    }
});
