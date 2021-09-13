import React, {FC} from 'react';
import './App.css';
import {Layout} from "./Components/Layout";
import {Navigation} from "./Components/Navigation";
import {CustomHeader} from "./Components/CustomHeader";


const App:FC = () => {
  return (
    <div className="App">
        <Layout>
            <Navigation/>
        </Layout>
    </div>
  );
}

export default App;
