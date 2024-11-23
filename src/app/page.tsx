import Hero from '../../components/Hero';
import Features from '../../components/Features';
import WaitlistForm from '../../components/WaitlistForm' ;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <WaitlistForm />
    </main>
  );
} 