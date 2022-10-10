/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-text.html
     * 
     * @description Wraps the text component.
     * 
     * @example
     * ```html
     * <a-text value="Hello, World!"></a-text>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |align|text.align|undefined|
     * |alpha-test|text.alphaTest|undefined|
     * |anchor|text.anchor|undefined|
     * |baseline|text.baseline|undefined|
     * |color|text.color|undefined|
     * |font|text.font|undefined|
     * |font-image|text.fontImage|undefined|
     * |height|text.height|undefined|
     * |letter-spacing|text.letterSpacing|undefined|
     * |line-height|text.lineHeight|undefined|
     * |opacity|text.opacity|undefined|
     * |shader|text.shader|undefined|
     * |side|text.side|undefined|
     * |tab-size|text.tabSize|undefined|
     * |transparent|text.transparent|undefined|
     * |value|text.value|undefined|
     * |white-space|text.whiteSpace|undefined|
     * |width|text.width|undefined|
     * |wrap-count|text.wrapCount|undefined|
     * |wrap-pixels|text.wrapPixels|undefined|
     * |z-offset|text.zOffset|undefined|
     */
    'a-text': {
      /**
       * text.align
       * @default "undefined"
       */
      'align'?: string;

       /**
        * text.alphaTest
        * @default "undefined"
        */
      'alpha-test'?: string;
 
       /**
        * text.anchor
        * @default "undefined"
        */
      'anchor'?: string;
 
       /**
        * text.baseline
        * @default "undefined"
        */
      'baseline'?: string;
 
       /**
        * text.color
        * @default "undefined"
        */
      'color'?: string;
 
       /**
        * text.font
        * @default "undefined"
        */
      'font'?: string;
 
       /**
        * text.fontImage
        * @default "undefined"
        */
      'font-image'?: string;
 
       /**
        * text.height
        * @default "undefined"
        */
      'height'?: string;
 
       /**
        * text.letterSpacing
        * @default "undefined"
        */
      'letter-spacing'?: string;
 
       /**
        * text.lineHeight
        * @default "undefined"
        */
      'line-height'?: string;
 
       /**
        * text.opacity
        * @default "undefined"
        */
      'opacity'?: string;
 
       /**
        * text.shader
        * @default "undefined"
        */
      'shader'?: string;
 
       /**
        * text.side
        * @default "undefined"
        */
      'side'?: string;
 
       /**
        * text.tabSize
        * @default "undefined"
        */
      'tab-size'?: string;
 
       /**
        * text.transparent
        * @default "undefined"
        */
      'transparent'?: string;
 
       /**
        * text.value
        * @default "undefined"
        */
      'value'?: string;
 
       /**
        * text.whiteSpace
        * @default "undefined"
        */
      'white-space'?: string;
 
       /**
        * text.width
        * @default "undefined"
        */
      'width'?: string;
 
       /**
        * text.wrapCount
        * @default "undefined"
        */
      'wrap-count'?: string;
 
       /**
        * text.wrapPixels
        * @default "undefined"
        */
      'wrap-pixels'?: string;
 
       /**
        * text.zOffset
        * @default "undefined"
        */
      'z-offset'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
