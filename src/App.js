import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Esha Singhal",
    location: "IIT Roorkee, Uttkakhand",
    tagline: "I'm an aspiring Designer and Developer.",
    email: "eshasinghal0612@gmail.com",
    availability: "Open for work",
    brand:
      "I am a B.Tech. pre-final year student at IIT Roorkee who is enthusiastic about the Design & Development of digital products and how their marketing works.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
