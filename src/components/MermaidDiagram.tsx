import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
    chart: string;
    id?: string;
}

const MermaidDiagram = ({ chart, id = 'mermaid-diagram' }: MermaidDiagramProps) => {
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
            className="mermaid bg-card rounded-lg p-4 overflow-x-auto"
        />
    );
};

export default MermaidDiagram;