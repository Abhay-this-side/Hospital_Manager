import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
const Home = () => {
  return (
   <>
  <Hero title ={"We welcome you all | Healthcare Providers"} imageUrl={"/hero.png"}/>
  <Biography imageUrl={"/whoweare.png"} />
  <Departments />
  <MessageForm/>
  </>
  )
}

export default Home