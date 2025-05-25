
const counterReducer = (state = 0, action) => {
    console.log(state, action);
    // state là giá trị hiện tại của state, action là object chứa thông tin về việc thay đổi state
    switch (action.type) {
        case "UP":
            return state + action.number;
        case "DOWN":
            return state - action.number;
        case "RESET":
            return 0;
        default:
            return state;
    }
};

export default counterReducer;
