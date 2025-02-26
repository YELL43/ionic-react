import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { Device } from '@capacitor/device';
import { useEffect, useState } from 'react';
import SatisfactionComponent from '../components/Satisfaction';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Hello word</IonCardTitle>
            <IonCardSubtitle>welcome to my app</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonContent className="ion-padding">
              <h1>ยินดีต้อนรับ</h1>
            </IonContent>
          </IonCardContent>
        </IonCard>
        <SatisfactionComponent />

        {/* <ExploreContainer name="Tab 1 page" /> */}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
