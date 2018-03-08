import { all, call, put, takeEvery } from 'redux-saga/effects';
import "regenerator-runtime/runtime";
import * as actions from '../actions/';

function* fetchPostsSaga(action) {
    console.log('Saga =>', action)
    const posts = yield call(actions.fetchPosts);
   // console.log('Fetching Posts=>',posts);
    yield put({type: 'fetch_posts_success', payload: posts.data});
}

export default function* rootSaga() {
    yield all([
        takeEvery('fetch_posts_saga', fetchPostsSaga),
      ])
} 
