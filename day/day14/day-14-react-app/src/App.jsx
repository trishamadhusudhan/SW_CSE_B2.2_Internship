import './App.css'
import ClickDemo from "./components/EventHandlerOne";
import FormDemo from "./components/EventHandlerTwo";
import ActionButtonDemo from "./components/EventHandlerThree";

import SimpleList from "./components/ListAndKeysOne";
function App() {
  return (
    <>
      <ClickDemo/>
      
      <FormDemo />

      <ActionButtonDemo />

      <SimpleList/>
    </>
  )
}

export default App;