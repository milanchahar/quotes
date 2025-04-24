import { useState } from 'react';

const quotes = [
  "Believe in yourself.",
  "Stay hungry. Stay foolish.",
  "You are stronger than you think.",
  "Make today amazing.",
  "Dream big. Work hard."
];

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Motivational Quote</h1>
      <p>"{quotes[index]}"</p>
      <button onClick={() => setIndex((index + 1) % quotes.length)}>
        Next Quote
      </button>
    </div>
  );
}