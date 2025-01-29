
import CounterProvider from "./context/counterContext";
import Counter from "./components/Counter";

export default function App() {
  return (
    <CounterProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterProvider>
  );
}
