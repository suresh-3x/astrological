import Hero from '../../components/Hero';
import Features from '../../components/Features';
import WaitlistForm from '../../components/WaitlistForm';
import FAQ from '../../components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <FAQ />
      <WaitlistForm />
    </main>
  );
} 