/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-video.html
     * 
     * @description The video primitive plays a video as a texture on a flat plane.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <video id="penguin-sledding" autoplay loop="true" src="penguin-sledding.mp4"></video>
     *   </a-assets>
     * 
     *   <!-- Using the asset management system. -->
     *   <a-video src="#penguin-sledding" width="16" height="9" position="0 0 -20"></a-video>
     * 
     *   <!-- Defining the URL inline. Not recommended but more comfortable for web developers. -->
     *   <a-video src="airbending.mp4"></a-video>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |color|material.color|#FFF|
     * |height|geometry.height|1.75|
     * |metalness|material.metalness|0|
     * |opacity|material.opacity|1|
     * |repeat|material.repeat|None|
     * |roughness|material.roughness|0.5|
     * |segments-height|geometry.segmentsHeight|1|
     * |segments-width|geometry.segmentsWidth|1|
     * |shader|material.shader|flat|
     * |side|material.side|front|
     * |src|material.src|None|
     * |transparent|material.transparent|false|
     * |width|geometry.width|3|
     */
    'a-video': {
      /**
       * material.color
       * @default "#FFF"
       */
      'color'?: string;

       /**
        * geometry.height
        * @default "1.75"
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
        * @default "false"
        */
      'transparent'?: string;
 
       /**
        * geometry.width
        * @default "3"
        */
      'width'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
