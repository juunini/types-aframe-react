declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/core/asset-management-system.html
     * 
     * @property { string } timeout - Assets timed out.
     */
    'a-assets': {
      /** Assets timed out. */
      timeout?: string;
    } | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
