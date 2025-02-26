import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useEffect, useState } from 'react';
import { Device } from '@capacitor/device';

const Tab3: React.FC = () => {

  const [deviceId, setDeviceId] = useState<any>(null);
  const [deviceInfo, setDeviceInfo] = useState<any>(null);
  const [batteryInfo, setBattery] = useState<any>(null);

  const fetchDeviceId = async () => {
    const id = await Device.getId();
    setDeviceId(id);
  };

  const fetchDeviceInfo = async () => {
    const info = await Device.getInfo();
    setDeviceInfo(info);
  };

  const fetchBatteryInfo = async () => {
    const battery = await Device.getBatteryInfo();
    setBattery(battery);
  };

  useEffect(() => {
    fetchDeviceId();
    fetchDeviceInfo();
    fetchBatteryInfo();
  }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Device Information</IonCardTitle>
            <IonCardSubtitle>Information</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Device Battery:</strong> {batteryInfo ? JSON.stringify(batteryInfo) : 'Loading...'}</p>
            <p><strong>Device ID:</strong> {deviceId ? JSON.stringify(deviceId) : 'Loading...'}</p>
            <p><strong>Device Info:</strong> {deviceInfo ? JSON.stringify(deviceInfo) : 'Loading...'}</p>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
