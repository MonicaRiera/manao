import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/react';
import React from 'react';
import Card from './Card.jsx'

class Home extends React.Component {

render() {
	return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Manao!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
				<IonSlides>
					<IonSlide>
						<Card />
					</IonSlide>
					<IonSlide>
						<Card />
					</IonSlide>
					<IonSlide>
						<Card />
					</IonSlide>
					<IonSlide>
						<Card />
					</IonSlide>
				</IonSlides>
      </IonContent>
    </IonPage>
  );
}

};

export default Home;
