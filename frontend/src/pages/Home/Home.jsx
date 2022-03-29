import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const signInLinkStyle = {
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
  };
  
  const history = useHistory();
  function startRegister(){
    history.push('/authenticate');
  }

  return (
  <div className={styles.cardWrapper}>
    <Card title="Welcome to PodHut" icon="logo">
    <p className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut dignissimos 
      corrupti accusantium architecto a similique sit exercitationem facere. Sint! 
      ipsum dolor sit amet consectetur, adipisicing elit. 
      Temporibus
    </p>
    <div>
        <Button onClick={startRegister} text="Let's Go"/>
    </div>

    </Card>
  
  </div>
  
  );
};

export default Home;
