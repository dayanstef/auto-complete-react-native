import React, {Component} from "react";
import PropTypes from "prop-types";
import {StyleSheet, TextInput} from 'react-native';

export default class CountryFilter extends Component {
    constructor() {
        super();
    }

    clearInput(event) {
        if (event.keyCode === 27) {
            this.refs['country'].value = '';
        }
    }

    render() {
        return (
            <TextInput
                style={styles.textInput}
                ref='country'
                type="text"
                placeholder="Search country..."
                onChangeText={(text) => this.props.onUpdate(text)}
                onKeyDown={this.clearInput.bind(this)}
            />
        );
    }
}

CountryFilter.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        borderColor: "#9b4dca",
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 15,
        marginBottom: 15,
        color: "#414141",
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: "700",
        padding: 5,
        textAlign: "center",
        textTransform: "uppercase"
    }
});
