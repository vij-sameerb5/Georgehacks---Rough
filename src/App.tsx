import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene3DProvider, Scene3DBackground } from './components/3D/Scene3DContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Tracks from './components/Tracks';
import Roadmap from './components/Roadmap';
import FAQs from './components/FAQs';
import Team from './components/Team';

function App() {
  return (
    <Scene3DProvider>
      <Preloader />
      <div className="min-h-screen text-[#4FD1C5] relative">
        {/* 3D Background Canvas */}
        <div className="fixed inset-0">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 60 }}
            style={{ background: 'transparent' }}
            gl={{ antialias: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <Scene3DBackground />
              <color attach="background" args={['#000']} />
            </Suspense>
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="content-sections">
            <Hero />
            <About />
            <Sponsors />
            <Tracks />
            <Roadmap />
            <FAQs />
            <Team />
          </div>
        </div>
      </div>
    </Scene3DProvider>
  );
}

export default App;