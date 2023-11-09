import "./App.css";
import CounterPaths from "./components/CounterPaths";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <div className="flex flex-col items-center mx-auto h-1/2">
        <div className="text-4xl pt-10">Counter Paths</div>
        <div className="block w-3/4 mt-32">
          <CounterPaths />
        </div>
      </div>
    </div>
  );
};

export default App;
