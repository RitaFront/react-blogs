import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from 'widgets/Header/components/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout: React.FC = () => {
  // const [show, setShow] = useState(false);

  return (
    <div>
      {/* {show &&
        toast.error('WOw so easy!', {
          theme: 'dark',
        })} */}
      <ToastContainer />
      <Header />
      <Container className="pt-5">
        <Outlet />
      </Container>
    </div>
  );
};
