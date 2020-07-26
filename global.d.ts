declare namespace JSX {
    interface IntrinsicElements {
        test: {
            alt: string
            src: string
            loading?: 'lazy' | 'eager' | 'auto'
        }
    }
}
