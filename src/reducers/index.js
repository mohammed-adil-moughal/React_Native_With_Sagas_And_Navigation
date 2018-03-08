import _ from 'lodash';
import * as actions from '../actions';

export default function (state = {}, action) {

    switch (action.type) {
        case actions.FETCH_POSTS_SUCCESS:
        console.log('Actions=>000',action.payload);
        return{ ...state, albums:action.payload}
        ;
            // return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }

}
