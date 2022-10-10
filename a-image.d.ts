/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-image.html
     * 
     * The image primitive shows an image on a flat plane.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <img id="my-image" src="image.png">
     *   </a-assets>
     * 
     *   <!-- Using the asset management system. -->
     *   <a-image src="#my-image"></a-image>
     * 
     *   <!-- Defining the URL inline. Not recommended but more comfortable for web developers. -->
     *   <a-image src="another-image.png"></a-image>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |color|material.color|#FFF|
     * |height|geometry.height|1|
     * |metalness|material.metalness|0|
     * |opacity|material.opacity|1|
     * |repeat|material.repeat|None|
     * |roughness|material.roughness|0.5|
     * |segments-height|geometry.segmentsHeight|1|
     * |segments-width|geometry.segmentsWidth|1|
     * |shader|material.shader|flat|
     * |side|material.side|front|
     * |src|material.src|None|
     * |transparent|material.transparent|true|
     * |width|geometry.width|1|
     */
    'a-image': {
      /**
       * material.color
       * @default "#FFF"
       */
      'color'?: string;

       /**
        * geometry.height
        * @default "1"
        */
      'height'?: string;
 
       /**
        * material.metalness
        * @default "0"
        */
      'metalness'?: string;
 
       /**
        * material.opacity
        * @default "1"
        */
      'opacity'?: string;
 
       /**
        * material.repeat
        * @default "None"
        */
      'repeat'?: string;
 
       /**
        * material.roughness
        * @default "0.5"
        */
      'roughness'?: string;
 
       /**
        * geometry.segmentsHeight
        * @default "1"
        */
      'segments-height'?: string;
 
       /**
        * geometry.segmentsWidth
        * @default "1"
        */
      'segments-width'?: string;
 
       /**
        * material.shader
        * @default "flat"
        */
      'shader'?: string;
 
       /**
        * material.side
        * @default "front"
        */
      'side'?: string;
 
       /**
        * material.src
        * @default "None"
        */
      'src'?: string;
 
       /**
        * material.transparent
        * @default "true"
        */
      'transparent'?: string;
 
       /**
        * geometry.width
        * @default "1"
        */
      'width'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
