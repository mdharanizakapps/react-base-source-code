import React from 'react'; // Import React
import './App.css';
import './index.css'; // Import your Tailwind CSS file
import { AlertComponent } from './components/ui_library_components/AlertComponent';
import { AccordionComponent } from './components/ui_library_components/AccordionComponent';
import { AlertDialogComponent } from './components/ui_library_components/AlertDialogComponent';
import { AvatarComponent } from './components/ui_library_components/AvatarComponent';
import { BadgeComponent } from './components/ui_library_components/BadgeComponent';
import { BreadcrumbComponent } from './components/ui_library_components/BreadcrumbComponent';

function App() {


  return (
    <div className='flex  gap-6 flex-col-reverse' >
      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          Alert
        </div>
        <div>
          <AlertComponent />
        </div>
      </div>

      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          Accordion
        </div>
        <div>
          <AccordionComponent />
        </div>

      </div>

      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          Alert Dialog
        </div>
        <div>
          <AlertDialogComponent />
        </div>
      </div>

      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          Avatar
        </div>
        <div>
          <AvatarComponent />
        </div>
      </div>

      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          Badge
        </div>
        <div>
          <BadgeComponent />
        </div>

      </div>

      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          BreadcrumbComponent
        </div>
        <div>
          <BreadcrumbComponent />
        </div>
      </div>


      <div>
        <div className='text-center text-lg font-bold text-blue-600'>
          BreadcrumbComponent
        </div>
        <div>
          <BreadcrumbComponent />
        </div>
      </div>






    </div>
  );
}

export default App;
