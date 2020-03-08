import Home from "../Components/Home"

export default function (token = "",action){
// _______________ action ADD _______________
    if(action.type === 'saveToken'){
                                                console.log(token);
                                                console.log(action.token);
        var newToken = action.token
                                                console.log(newToken);
        return newToken
    } else {
        return token
    }
}