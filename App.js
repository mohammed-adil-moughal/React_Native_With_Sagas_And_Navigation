import React from 'react'
import ReactNative from 'react-native'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
import HomeScreen from './src/components/HomeScreen'
import reducers from './src/reducers'
import rootSaga from './src/saga'

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(rootSaga);


const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Albums: {
        screen: AlbumList
    }
});

const App = () => {
    console.log(store.getState(),'>Global State')
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Header headerText={'albums'} />
                <RootStack />
            </View>
        </Provider>
    );
};


export default App;