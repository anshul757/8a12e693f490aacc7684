/*
    This is the Detail page that contains the Detail of the specific news.
*/

/*
    imports
*/
import React, { Component } from 'react';
import { Button, StyleSheet, Text } from 'react-native';



/*
    classes
*/
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Text>
                {JSON.stringify(
                    this.props.route.params.data.item
                )}
            </Text>
        )
    }
}

export default Details;

/*
    styles
*/
const styles = StyleSheet.create({})