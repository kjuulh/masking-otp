import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import './Layout.scss';

interface Props {}

const Layout: React.FC<Props> = () => {
  return (
    <div className='layout'>
      <div className='layout__navbar'>
        <Navbar></Navbar>
      </div>
      <div className='layout__body'>
        <Body></Body>
      </div>
    </div>
  );
};

export default Layout;
