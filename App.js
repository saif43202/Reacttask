import Hello from "./Hello";
import Profile from "./Profile";

export default function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Profile name="Saif" />
      <Hello city="Agra" />
    </div>
  );
}