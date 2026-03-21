import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";

import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
    </div>
  );
}

export default App;
