export const Create = (todo) => {
    return {
        type: 'CREATE_ELEMENT',
        payload: todo
    };
};

export const Delete = (todo) => {
    return {
        type: 'DELETE_ELEMENT',
        payload: todo
    };
};

export const Check = (todo) => {
    return {
        type: 'CHECK_ELEMENT',
        payload: todo
    }
}

//our three action creators for Creating tasks, Deleting tasks and Checking completed tasks.