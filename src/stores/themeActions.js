import {lightTheme, darkTheme} from '../constants'

export const TOOGLE_THEME_BEGIN = "TOOGLE_THEME_BEGIN"
export const TOOGLE_THEME_SUCCESS = "TOOGLE_THEME_SUCCESS"
export const TOOGLE_THEME_FAILURE = "TOOGLE_THEME_FAILURE"


export const toogleThemeBegin = () => ({
type: TOOGLE_THEME_BEGIN
})

export const toogleThemeSuccess = (selectedTheme) => ({
    type: TOOGLE_THEME_SUCCESS,
    payload: {selectedTheme}
})

export const toogleThemeFailure = error => ({
    type: TOOGLE_THEME_FAILURE,
    payload: {error}
})

export function toogleTheme(themeType) {
return dispatch => {
    dispatch(toogleThemeBegin())

    switch (themeType){
        case 'dark':
            dispatch(toogleThemeSuccess(darkTheme))
            break;
        
        case 'light':
                dispatch(toogleThemeSuccess(lightTheme))
                break;    
        default:
            dispatch(toogleThemeFailure({error:'Invalid theme type'}))
            break;
    }
}
}