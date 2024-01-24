import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        /* Add Budget component here */
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        /* Add Remaining component here*/
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }

                    {
                        /* Add ExpenseTotal component here */
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }

                    {
                        /* Add CurrencyDropdown component here */
                        <div className='col-sm'>
                            <CurrencyDropdown />
                        </div>
                    }

                    {
                        /* Add ExpenseList component here */
                        <>
                        <h3 className='mt-3'>Allocation</h3>
                        <div className='col-sm-12'>
                            <ExpenseList />
                        </div>
                        </>
                    }

                    {
                        /* Add ExpenseItem component here */
                        //ExpenseItem component
                        // <div className='col-sm'>
                        //     <ExpenseItem />
                        // </div>
                    }

                    {
                        /* Add AllocationForm component here under */
                        //Allocation component
                        <>
                        <h3 className='mt-3'>Change allocation</h3>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                        </>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;