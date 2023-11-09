import "./App.css";
import CounterPaths from "./components/CounterPaths";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
        <div className="text-4xl pt-10">Counter Paths</div>
      </div>
    </div>
  );
};

export default App;
