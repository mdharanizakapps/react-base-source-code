import React from 'react'; // Import React
import './App.css';
import './index.css'; // Import your Tailwind CSS file
// import { AlertComponent } from './components/ui_library_components/AlertComponent';
// import { AccordionComponent } from './components/ui_library_components/AccordionComponent';
import { AlertDialogComponent } from './components/ui_library_components/AlertDialogComponent';

function App() {


  return (
    <>
      <div>
        {/* <div className='text-center text-lg font-bold text-blue-600'>
          Alert
        </div>
        <div>
          <AlertComponent />
        </div>

        <div className='text-center text-lg font-bold text-blue-600'>
          Accordion
        </div>
        <div>
          <AccordionComponent />
        </div> */}

        <div className='text-center text-lg font-bold text-blue-600'>
          Alert Dialog
        </div>
        <div>
          <AlertDialogComponent />
        </div>

      </div>
    </>
  );
}

export default App;
