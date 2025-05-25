//actions trong Redux là một object chứa thông tin về việc thay đổi state
//vd: tăng giảm giá trị của state
//action có 2 thuộc tính bắt buộc là type và payload
export const up = (number) => {
    return {
        type: "UP",
        number: number // giá trị tăng lên là 1
    };
}
export const down = (number) => {
    return {
        type: "DOWN",
        number: number // giá trị giảm xuống là 1
    };
}
export const reset = () => {
    return {
        type: "RESET",
        number: 0 // giá trị reset về 0
    };
}