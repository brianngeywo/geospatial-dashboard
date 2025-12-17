import { Row, Col, Breadcrumb } from "antd";
import { useAppSelector } from "./hooks/storeHooks";
import Counter from "./components/Counter";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <Row justify={'center'}>
      <Col>
      <Breadcrumb items={[{ title: 'sample' }, { title: 'sample' }, { title: 'sample' }]} />
        <Row justify={"center"}>
            <div className="mb-6 p-6">The count is {count} </div>
        </Row>
        <Row justify={"center"}>
            <Counter />
        </Row>
      </Col>
    </Row>
  );
}

export default App;