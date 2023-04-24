import React from "react";
import CV from "../components/cv-section";
import Hero from "../components/hero";
import ContactSection from "../components/contact-section";

export const revalidate = 60;

export default function Home() {
  return (
    <article className=" relative flex flex-col items-center">
      <Hero></Hero>
      <ContactSection></ContactSection>
      <CV></CV>
    </article>
  );
}
