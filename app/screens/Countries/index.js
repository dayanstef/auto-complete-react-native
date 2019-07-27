import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import {Dimensions} from "react-native";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class Countries extends Component {
    constructor() {
        super();
        this.state = {filter: ''}
    }

    handleFilterUpdate = (filter) => {
        this.setState({filter})
    };

    render() {
        const {filter} = this.state;
        return (
            <View className="container">
                <Text style={styles.subHeading}>ReactNative AutoComplete Country Search</Text>
                <View style={styles.theList}>
                    <CountryFilter onUpdate={this.handleFilterUpdate}/>
                    <CountryList filter={filter}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subHeading: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: "700",
        textAlign: "center"
    },
    theList: {
        marginLeft: 15,
        marginRight: 15,
        alignSelf: 'stretch',
        textAlign: 'center',
        width: width - 30,
        height: height - 75,
    }
});