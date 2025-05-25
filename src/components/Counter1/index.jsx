import {useDispatch, useSelector} from "react-redux";
import { down, reset, up } from "../../actions/counter";

const Action = () => {
  const count = useSelector((state) => state.counterReducer);
  //useSelector là một hook giúp lấy state từ store
  const dispath = useDispatch();
  //useDispatch là một hook giúp gửi action đến store của redux để thay đổi state

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispath(up(2))}>UP</button>
      <button onClick={() => dispath(down(1))}>DOWN</button>
      <button onClick={() => dispath(reset())}>RESET</button>
    </>
  );
};

export default Action;
