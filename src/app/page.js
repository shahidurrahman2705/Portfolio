// src/app/page.js
import Header from '@/components/Header';
import ThreeDScene from '@/components/ThreeDScene';
import Certificates from '@/components/Certificates';
import AboutAndSkills from '@/components/AboutAndSkills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Header />
      <AboutAndSkills />
      <ThreeDScene />
      <Projects />
      <Certificates />
    </main>
  );
}