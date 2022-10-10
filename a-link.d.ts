/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-link.html
     * 
     * The link primitive provides a compact API to define links that resembles the traditional <a> tag.
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |href|link.href||
     * |title|link.title||
     * |src|link.src||
     */
    'a-link': {
      /**
       * link.href
       * @default ""
       */
      'href'?: string;

       /**
        * link.title
        * @default ""
        */
      'title'?: string;
 
       /**
        * link.src
        * @default ""
        */
      'src'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
