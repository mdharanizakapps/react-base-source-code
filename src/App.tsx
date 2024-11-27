import React from 'react'; // Import React
import './App.css';
import './index.css'; // Import your Tailwind CSS file
import { AlertComponent } from './components/ui_library_components/AlertComponent';

function App() {


  return (
    <>
      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          Alert
        </div>
        <div>
          <AlertComponent></AlertComponent>
        </div>
      </div>
    </>
  );
}

export default App;
