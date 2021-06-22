const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_ELEMENT':
            return [...state, action.payload];

        case 'DELETE_ELEMENT':
            return state.filter(element => element !== action.payload);

        case 'CHECK_ELEMENT':
            return state.map(el => el === action.payload ? { text: el.text, completed: !el.completed, id: el.id } : el);

        default:
            return state;
    };
};

export default todoReducer;

//Reducer for updating our state based on addition, deletion or checking of our tasks.