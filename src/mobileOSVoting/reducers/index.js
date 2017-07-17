/**
 * Created by bikramkawan on 7/17/17.
 */
const initialState = {
    ios: 0,
    android: 0,
    windows: 0

}

export default (state = initialState, action) => {

    switch (action.type) {

        case 'VOTE_IOS':
            console.log('iosafafa',action,state.ios + 1)
            return Object.assign({}, state, {
                ios: state.ios + 1
            })

        case 'VOTE_ANDROID':
            console.log('android')
            return Object.assign({}, state, {
                android: state.android + 1
            })

        case 'VOTE_WINDOWS' :
            console.log('windows')
            return Object.assign({}, state, {
                windows: state.windows + 1
            })
        default :
            return state


    }

}