import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
    chart: string;
    id?: string;
    onClick?: () => void;
    className?: string;
}

const MermaidDiagram = ({ chart, id = 'mermaid-diagram', onClick, className = '' }: MermaidDiagramProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            securityLevel: 'loose',
        });

        if (containerRef.current) {
            containerRef.current.innerHTML = chart;
            mermaid.contentLoaded();
        }
    }, [chart]);

    return (
        <div
            ref={containerRef}
            onClick={onClick}
            className={`mermaid bg-card rounded-lg p-4 overflow-x-auto ${onClick ? 'cursor-pointer hover:bg-card/80 transition-colors' : ''} ${className}`}
            title={onClick ? 'Click to view full screen' : ''}
        />
    );
};

export default MermaidDiagram;