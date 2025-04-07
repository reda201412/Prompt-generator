import React, { useState } from 'react';

const cheatCodes = [
  "Cinematic portrait, golden hour, shallow depth of field, soft background blur, Nikon Z9 + 85mm f/1.2",
  "Moody black and white, harsh shadows, dramatic lighting, Leica M10 Monochrom",
  "Ultra wide landscape, deep focus, cloudy sky, Canon R5 + 16-35mm f/2.8",
  "Street photography, natural light, candid expression, Fujifilm X100V",
  "Studio fashion shoot, high key lighting, vibrant colors, Sony A7R V + 50mm f/1.4 GM",
  "Fine art nude, Rembrandt lighting, soft textures, medium format Hasselblad",
  "Action freeze, 1/4000s shutter, mid-air motion, Nikon D6 + 70-200mm f/2.8",
  "Vintage look, film grain, muted tones, Kodak Portra 400 emulation",
  "Backlit silhouette, sunset, strong contrast, Canon EOS R + 35mm f/1.8",
  "Architectural symmetry, ultrawide perspective, leading lines, tilt-shift lens"
];

export default function App() {
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    const random = cheatCodes[Math.floor(Math.random() * cheatCodes.length)];
    setPrompt(random);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    alert("Prompt copied to clipboard!");
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>AI Photo Prompt Generator</h1>
      <button onClick={generatePrompt} style={{ padding: '10px 20px', margin: '10px' }}>
        Générer un prompt
      </button>
      {prompt && (
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>{prompt}</p>
          <button onClick={copyPrompt} style={{ marginTop: '10px' }}>Copier</button>
        </div>
      )}
    </div>
  );
}
