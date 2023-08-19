import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import Homepage from "./pages/Home/Homepage";
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />

      </Routes>

    </div>
  );
}

export default App;
