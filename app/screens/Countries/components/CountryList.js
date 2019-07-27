import React, {Component} from "react";
import PropTypes from "prop-types";
import {ScrollView, StyleSheet} from 'react-native';
import CountryListItem from "./CountryListItem";
import {getCountries} from "../../../utils/countries-api";

export default class CountryList extends Component {
    constructor() {
        super();
        this.state = {countries: []}
    }

    getCountries() {
        this.props.getCountries().then(countries => {
            this.setState({countries});
        });
    }

    componentWillMount() {
        this.getCountries();
    }

    render() {
        const {countries} = this.state;
        const {filter} = this.props;
        return (
            <ScrollView id="countries" style={styles.countryList}>
                {renderCountries(countries, filter.toLowerCase())}
            </ScrollView>
        );
    }
}

CountryList.propTypes = {
    filter: PropTypes.string.isRequired,
    getCountries: PropTypes.func,
};
CountryList.defaultProps = {getCountries};

function renderCountries(countries, filter) {
    return countries
        .filter(country => {
            return !filter ||
                (country.name && country.name.toLowerCase().includes(filter));
        })
        .map(country => <CountryListItem key={country.name} country={country}/>);
}

const styles = StyleSheet.create({
    countryList: {
        width: "100%",
        alignSelf: "stretch",
        marginBottom: "10%",
        color: "#414141",
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "700",
        padding: 5,
        textAlign: "center",
        textTransform: "uppercase"
    }
});
