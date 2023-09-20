import Hero from "../sections/Hero";
import Join_Community from "../sections/Join_Community";
import UpcomingEvents from "../sections/UpcomingEvents";
import Container from "../sections/Container";
import TransitionEffect from "../components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <Hero />
      <Join_Community />
      <UpcomingEvents />
      <Container />
    </>
  );
}
