import { IonButton, IonItem, IonLabel, IonAlert } from '@ionic/react';
import { useState } from 'react';

const SatisfactionComponent: React.FC = () => {
  const [rating, setRating] = useState<number>(0); // Store the user's rating (1-5)
  const [showAlert, setShowAlert] = useState<boolean>(false); // Control the alert display
  const [alertMessage, setAlertMessage] = useState<string>(''); // Message for the alert
  const emojis = ['😞', '😕', '😐', '😊', '😍']; // Emojis for satisfaction levels

  // Function to handle emoji selection
  const handleRating = (value: number) => {
    setRating(value);
  };

  // Function to submit the rating
  const submitRating = () => {
    if (rating === 0) {
      setAlertMessage('Please select your score before submitting!');
      setShowAlert(true);
    } else {
      setAlertMessage(`Thank you for your evaluation! You rated ${rating} (${emojis[rating - 1]})`);
      setShowAlert(true);
      setRating(0); // Reset rating after submission
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>How satisfied are you with this app?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        {emojis.map((emoji, index) => (
          <span
            key={index}
            style={{
              fontSize: '40px',
              cursor: 'pointer',
              margin: '0 10px',
              opacity: rating >= index + 1 ? 1 : 0.3, // Highlight selected emojis
            }}
            onClick={() => handleRating(index + 1)}
          >
            {emoji}
          </span>
        ))}
      </div>
      <IonItem>
        <IonLabel>
          Selected rating: {rating > 0 ? `${rating} (${emojis[rating - 1]})` : 'Not selected'}
        </IonLabel>
      </IonItem>
      <IonButton expand="block" onClick={submitRating} style={{ marginTop: '20px' }}>
        Submit Evaluation
      </IonButton>

      {/* IonAlert */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)} // Close alert when dismissed
        header={'Evaluation Result'}
        message={alertMessage}
        buttons={['OK']}
      />
    </div>
  );
};

export default SatisfactionComponent;