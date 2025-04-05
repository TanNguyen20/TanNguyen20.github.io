declare module 'particles-bg' {
    interface ParticlesBgProps {
        type?: string;
        bg?: boolean;
        color?: string;
        num?: number;
        radius?: number;
        vx?: number;
        vy?: number;
    }

    const ParticlesBg: React.FC<ParticlesBgProps>;
    export default ParticlesBg;
}

declare module 'react-zmage' {
    interface ZmageProps {
        src: string;
        alt?: string;
        preset?: string;
        style?: React.CSSProperties;
    }

    const Zmage: React.FC<ZmageProps>;
    export default Zmage;
}

declare module 'react-grid-system' {
    import { Component } from 'react';

    interface GridProps {
        fluid?: boolean;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }

    interface ColProps extends GridProps {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
        offset?: {
            xs?: number;
            sm?: number;
            md?: number;
            lg?: number;
            xl?: number;
            xxl?: number;
        };
    }

    interface RowProps extends GridProps {
        gutterWidth?: number;
        gutterHeight?: number;
        align?: string;
        justify?: string;
    }

    export class Container extends Component<GridProps> { }
    export class Row extends Component<RowProps> { }
    export class Col extends Component<ColProps> { }
} 

declare module '*.pdf' {
    const content: string;
    export default content;
}