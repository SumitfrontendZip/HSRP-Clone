import './App.css';
import BookingSection from './Components/BookingSection/BookingSection';
import FitmentLocation from './Components/FitmentLocation/FitmentLocation';
import { Home } from './Components/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppointmentSlot from './Components/AppointmentSlot/AppointmentSlot'
import BookSummary from './Components/BookSummary/BookSummary';
import PaymentSection from './Components/PaymentSection/PaymentSection'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/orderPlace',
      element: <BookingSection />
    },
    {
      path: '/fitmentLocation',
      element: <FitmentLocation />
    },
    {
      path: '/appointmentSlot',
      element: <AppointmentSlot />
    },
    {
      path: '/bookingSummary',
      element: <BookSummary />
    },
    {
      path:'/payment',
      element:<PaymentSection/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
