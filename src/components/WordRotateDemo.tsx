import React, { useState, useEffect } from 'react';
import WordRotate from './magicui/word-rotate';

interface TextRotateDemoProps {
    text: string[];
}

const WordRotateDemo: React.FC<TextRotateDemoProps> = ({ text }) => {
    const [content, setContent] = useState<JSX.Element | null>(null);
    
    useEffect(() => {
        const fetchContent = async () => {
            const result = (
                <WordRotate
                    className="text-4xl font-bold text-black"
                    words={text}
                />
            );
            setContent(result);
        };

        fetchContent();
    }, [text]);

    return content;
};

export default WordRotateDemo;
