import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonButtons, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import Card from '../components/Card.jsx'
import Button from '../components/Buttons.jsx'
import '../styles/toolbar.css'
import '../styles/home.css'

class Home extends React.Component {

render() {
	return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
					<IonGrid fixed="true">
						<IonRow>
							<IonCol>
								<IonButtons>
									<IonButton>Menu</IonButton>
								</IonButtons>
							</IonCol>
							<IonCol>
								<IonTitle className="logo">Manao</IonTitle>
							</IonCol>
							<IonCol className="profile">
								<div className="avatar"></div>
							</IonCol>
						</IonRow>
					</IonGrid>
        </IonToolbar>
      </IonHeader>


      <IonContent className="main ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol>
							<Button />
						</IonCol>
						<IonCol>
							<Button />
						</IonCol>
						<IonCol>
							<Button />
						</IonCol>
					</IonRow>
				</IonGrid>
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
				<IonButton className="play">PLAY THIS GAME!</IonButton>
      </IonContent>
    </IonPage>
  );
}

};

export default Home;
