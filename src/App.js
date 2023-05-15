import ProfileCard from "./ProfileCard";
import { ALEXA_IMG_URL, SIRI_IMG_URL, CORTANA_IMG_URL } from "./constant";
import "./index.css";

function App() {
  return (
    <div className="card-container">
      <ProfileCard
        title="Alexa"
        handle="@alexa45"
        image={ALEXA_IMG_URL}
        description="Alexa is from Amazon and is very famous"
      />
      <ProfileCard
        title="Cortana"
        handle="@cortana123"
        image={CORTANA_IMG_URL}
        description="Cortana is from Microsoft and is used very less"
      />
      <ProfileCard
        title="Siri"
        handle="@siri321"
        image={SIRI_IMG_URL}
        description="Siri is from Apple and is in its out phase"
      />
    </div>
  );
}

export default App;
