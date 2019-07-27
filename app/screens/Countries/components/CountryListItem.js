import React from "react";
import PropTypes from "prop-types";
import {Text} from 'react-native';

export default CountryListItem;

function CountryListItem({country}) {
    return (
        <Text>
            {country.name}
        </Text>
    );
}

CountryListItem.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.string,
    }),
};

CountryListItem.defaultProps = {
    country: {},
};
