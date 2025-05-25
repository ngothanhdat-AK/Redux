
const initValue = [
    {
        id: 1,
        title: 'Đi chợ',
        completed: false
    },
    {
        id: 2,
        title: 'Học ReactJS',
        completed: true
    },
    {
        id: 3,
        title: 'Học Redux',
        completed: false
    },
    {
        id: 4,
        title: 'Học NodeJS',
        completed: false
    }
]

const toDoReducer = (state = initValue, action) => {
    console.log(state, action);
    // state là giá trị hiện tại của state, action là object chứa thông tin về việc thay đổi state
    let newState = [...state]; // Tạo bản sao của state hiện tại
    switch (action.type) {
        case "CREATE_TODO":
            // action.payload là dữ liệu mới được thêm vào
            newState = [...newState, { 
                id: Date.now(), // Tạo id duy nhất dựa trên thời gian hiện tại
                title: action.payload, // Lấy tiêu đề từ payload
                completed: false // Mặc định là chưa hoàn thành
             }];
            break;
        case "FINISH_TODO": {
            const indexCompleted = newState.findIndex((item) => {
                return item.id === action.payload
            });
            console.log(indexCompleted);
            newState[indexCompleted].completed = true; // Đánh dấu todo là đã hoàn thành
            break;
        }
        case "DELETE_TODO": {
            // action.payload là id của todo cần xóa
            newState = newState.filter((item) => {
                return item.id !== action.payload;
            });
            //newState.filter sẽ lọc ra các phần tử trong mảng mà không có id bằng với action.payload
            // Điều này có nghĩa là nó sẽ giữ lại tất cả các phần tử mà id không bằng với action.id cần xóa
            break;
        }
        default:
            // Trả về state hiện tại nếu không có action nào phù hợp
            return newState;
    }
    return newState; // Trả về state mới đã được cập nhật
};

export default toDoReducer;
//filter là 1 hàm của mảng, nó sẽ lọc ra các phần tử trong mảng dựa trên điều kiện mà ta đưa ra
//findIndex là 1 hàm của mảng, nó sẽ tìm kiếm phần tử đầu tiên trong mảng thỏa mãn điều kiện