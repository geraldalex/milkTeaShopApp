import * as themeActionsTypes from'./themeActions'
import {selectedTheme} from '../constants'

const initialState = {
    appTheme: selectedTheme,
    error: null
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case themeActionsTypes.TOOGLE_THEME_BEGIN:
            return {
                ...state,
                error: null
            }
        case themeActionsTypes.TOOGLE_THEME_SUCCESS:
            return {
                ...state,
                appTheme:action.payload.selectedTheme
            }

        case themeActionsTypes.TOOGLE_THEME_FAILURE:
            return {
                    ...state,
                    error:action.payload.error
                }    
        default:
            return state;
    }
}

export default themeReducer