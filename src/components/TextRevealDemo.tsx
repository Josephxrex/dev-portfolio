import React, { useState, useEffect } from 'react';
import TextReveal from "../components/magicui/text-reveal";

interface TextRevealDemoProps {
    text: string;
  }
  
  const TextRevealDemo: React.FC<TextRevealDemoProps> = ({ text }) => {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const result = (
        <div className="z-10 flex min-h-[16rem] items-center justify-center">
          <TextReveal text={text} />
        </div>
      );
      setContent(result);
    };

    fetchContent();
  }, [text]);

  return content;
};

export default TextRevealDemo;
