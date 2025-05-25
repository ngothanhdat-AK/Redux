export const createTodo = (data) => {
    return {
        type: "CREATE_TODO",
        payload: data
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}

export const finishTodo = (id) => {
    return {
        type: "FINISH_TODO",
        payload: id
    }
}