import "./styles.css";
import { Sidebar, ContentPane } from "./components/";
export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <ContentPane />
    </div>
  );
}
