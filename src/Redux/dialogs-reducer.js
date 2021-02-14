let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vitalik'},
        {id: 2, name: 'Nazar'},
        {id: 3, name: 'Maryan'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Oleg'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Nice'},
        {id: 5, message: 'I want to watch football today!'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            localStorage.setItem('MessagesArray', [...state.messages, {id: 6, message: body}])
            return {
                ...state,
                messages: [...state.messages, {id:6, message: body}]
            }
        
        default:
            return state
    }
}

export let sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;