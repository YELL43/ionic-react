import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonImg } from '@ionic/react';
import { useState } from 'react';

function CameraComponent() {
  const [photo, setPhoto] = useState<string | null>(null);

  // ฟังก์ชันถ่ายภาพ
  const takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      const imageUrl = image.webPath;
      setPhoto(imageUrl || null);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  };

  // ฟังก์ชันลบภาพ
  const deletePicture = () => {
    setPhoto(null); // เคลียร์ค่า photo เพื่อลบภาพออกจากหน้าจอ
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <IonButton onClick={takePicture}>ถ่ายภาพ</IonButton>
      {photo && (
        <div style={{ marginTop: '20px' }}>
          <IonImg src={photo} style={{ width: '100%', maxWidth: '300px' }} />
          <IonButton color="danger" onClick={deletePicture} style={{ marginTop: '10px' }}>
            ลบภาพ
          </IonButton>
        </div>
      )}
    </div>
  );
}

export default CameraComponent;