import React from 'react';
import SecondFactorForm from '../components/SecondFactorForm';
import { Card } from '@material-ui/core';
import './SecondFactorPage.scss';

interface Props {}

const SecondFactorPage: React.FC<Props> = () => {
  return (
    <div className='second-factor-page'>
      <Card className='second-factor-page__card'>
        <SecondFactorForm></SecondFactorForm>
      </Card>
    </div>
  );
};

export default SecondFactorPage;
