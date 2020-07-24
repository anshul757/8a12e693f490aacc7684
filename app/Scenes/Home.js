/*
    This is the main page that contains the listing of the news.
*/


/*
    imports
*/
import React, { Component } from 'react';
import { Card, CardItem, Body, Button } from 'native-base';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import InfiniteScroll from 'react-native-infinite-scrolling';
import formatDate from '../Utils/Common';
import axios from "axios";

/*
    classes
*/
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            page: 0,
            hasMoreData: false
        }
        this.renderData = this.renderData.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        this.intervalId = setTimeout(() => {
            this.getData();
        }, 10000)
    }
    UNSAFE_componentWillMount() {
        this.getData();
    }
    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }
    getData() {
        const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.page}`
        axios.get(url)
            .then((response) => {
                this.setState({
                    dataSource: response.data.hits,
                    page: this.state.page + 1
                })
            })
            .catch((error) => console.log('error =', error))

    }
    loadMoreData() {
        this.getData()
    }
    renderData(item) {
        return (
            <View style={styles.cardWrapper}>
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('Details', {
                        data: item
                    })
                }}>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={styles.titleWrapper}>
                                    {item.item.title}
                                </Text>
                                <Text style={styles.urlWrapper}>
                                    {item.item.url}
                                </Text>
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.authorWrapper}>
                                        By:-{item.item.author}
                                    </Text>
                                    <Text style={styles.dateWrapper}>
                                        {formatDate(item.item.created_at)}
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    render() {
        return (
            <>
                <InfiniteScroll
                    renderData={this.renderData}
                    data={this.state.dataSource}
                    loadMore={this.loadMoreData}
                />
            </>
        )
    }
}

export default Home;

/*
    styles
*/
const styles = StyleSheet.create({
    cardWrapper: {
        marginLeft: 20,
        marginRight: 20
    },
    titleWrapper: {
        fontWeight: "bold"
    },
    urlWrapper: {
        marginTop: 10,
        color: "blue"
    },
    infoWrapper: {
        flexDirection: "row",
        marginTop: 10,
        width: '100%',
        justifyContent: "space-between"
    },
    authorWrapper: {
        fontWeight: "bold",
        color: "grey"
    },
    dateWrapper: {
        fontWeight: "bold",
        color: "grey"
    }
})