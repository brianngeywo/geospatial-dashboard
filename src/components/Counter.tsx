import { Row } from "antd";
import { useAppDispatch } from "../hooks/storeHooks";
import { decrement, increment } from "../slices/counterSlice";

export default function Counter() {
  const dispatch = useAppDispatch();

  function incrementCounter() {
    dispatch(increment());
  }

  function decrementCounter() {
    dispatch(decrement());
  }

  return (
    <>
         <Row justify={"center"}>
             <div className="mr-6 bg-blue-600 p-4 rounded-lg shadow-lg text-white" onClick={incrementCounter}>
            Increment +
          </div>
  
          <div className="mr-6 bg-blue-600 p-4 rounded-lg shadow-lg text-white " onClick={decrementCounter}>
            Decrement -
          </div>
        </Row>
    </>
  );
}