import React from 'react';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture.js';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numberstable/NumbersTable';
import FaceBook from './components/facebook/Facebook';

import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <h3>Iteration 1</h3>
         <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"/>
          <IdCard
            lastName='Delores'
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"/>
        </div>

        <div>
          <h3>Iteration 2</h3>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>

        <div>
          <h3>Iteration 3</h3>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
        </div>

        <div>
          <h3>Iteration 4</h3>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>

        <div>
          <h3>Iteration 5</h3>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />
        </div>

        <div>
          <h3>Iteration 6</h3>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>

        <div>
          <h3>Iteration 7</h3>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }} />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }} />
        </div>

        <div>
          <h3>Iteration 8</h3>
          <LikeButton />
        </div>

        <div>
          <h3>Iteration 9</h3>
          <ClickablePicture
            img='/img/persons/maxence.png'
            imgClicked='/img/persons/maxence-glasses.png'
          />
        </div>

        <div>
          <h3>Iteration 10</h3>
          <Dice />
        </div>

        <div>
          <h3>Iteration 11</h3>
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
          />
        </div>

        <div>
          <h3>Iteration 12</h3>
          <NumbersTable limit={12} />
        </div>

        <div>
          <h3>Iteration 13</h3>
          <FaceBook />
        </div>

    </div>
  );
}

export default App;
