import Create from "./components/Create";
import List from "./components/List";

function App() {
  return (
  <div className="flex justify-center">  
      <div className="w-1/2 bg-slate-200 h-screen">
          <Create/>
        <List/>
      </div>
  </div>
  );
}

export default App;
