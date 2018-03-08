import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from './Card';
import CardSection from './CardSection';
class HomeScreen extends Component {
    render() {
        return (

            <View>
                <Card>
                    <CardSection>
                        <Text>NAVIGATION </Text>
                        <Button
                            title="Go to Album Page"
                            onPress={() => this.props.navigation.navigate('Albums')}
                        />
                                   </CardSection>
                </Card>
            </View>
        )
    }
};


export default HomeScreen;