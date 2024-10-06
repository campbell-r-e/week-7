import React, { useState, useEffect } from 'react';
import Layout from '../layout';

export default function Document() {
  // modified from example slides to make work
  const [entreesText, setText] = useState("");
  useEffect(() => {
    const textData = async () => {
      const result = await fetch("/entrees.txt");
      const text = await result.text();
      setText(text);
    };
    
    textData();
  }, []);
  // 
  return (
   

  <Layout> 
    
    <p id="textdoc">{entreesText}</p>
    
  </Layout>
 
  );
}
