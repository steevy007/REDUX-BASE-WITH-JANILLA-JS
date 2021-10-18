//BUILD REDUX APP WITH VANILLA JAVASCRIPT
//Constante action
const BUY_PHONE = 'BUY_PHONE'
const BUY_TAB='BUY_TAB'
const BUY_TV='BUY_TV'


//function action
function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

function buyTab(){
    return {
        type: BUY_TAB
    }
}

function buyTv(){
    return {
        type:BUY_TV
    }
}

//reducer
//(prevState,action)=>newState
//state initial
const initialState={
    phones:5,
    tablette:10
}

const initialStateTv={
    tv:17
}


//reducers
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_PHONE:
            return {
                ...state,
                phones:state.phones-1
            }
        case BUY_TAB:
            return {
                ...state,
                tablette:state.tablette-1
            }
        default:return state
    }
}

const reducerTv=(state=initialStateTv,action)=>{
    switch(action.type){
        case BUY_TV:
            return {
                ...state,
                tv:state.tv-1
            }
        default:return state
    }
}

//store
const store=Redux.createStore(
    Redux.combineReducers({
        reducerPhone:reducer,
        reducerTv:reducerTv
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const availablePhone=document.getElementById('count')
const availableTablette=document.getElementById('count_tab')
const availableTv=document.getElementById('count_tv')
availablePhone.innerHTML=store.getState().reducerPhone.phones
availableTablette.innerHTML=store.getState().reducerPhone.tablette
availableTv.innerHTML=store.getState().reducerTv.tv

//event to dispatch
document.getElementById('buy_phone').addEventListener('click',()=>{
    store.dispatch(buyPhone())
})
document.getElementById('buy_tab').addEventListener('click',()=>{
    store.dispatch(buyTab())
})

document.getElementById('buy_tv').addEventListener('click',()=>{
    store.dispatch(buyTv())
})
//suscribe to modify state
store.subscribe(()=>{
   availablePhone.innerHTML=store.getState().reducerPhone.phones
   availableTablette.innerHTML=store.getState().reducerPhone.tablette
   availableTv.innerHTML=store.getState().reducerTv.tv

   console.log(`update state`,store.getState())
})