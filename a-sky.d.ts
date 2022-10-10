/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-sky.html
     * 
     * @description
     * The sky primitive adds a background color or 360° image to a scene. A sky is a large sphere with a color or texture mapped to the inside.
     * 
     * @example
     * An equirectangular image as a background:
     * 
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <img id="sky" src="sky.png">
     *   </a-assets>
     *   <a-sky src="#sky"></a-sky>
     * </a-scene>
     * ```
     * 
     * A plain color as a background:
     * 
     * ```html
     * <a-sky color="#6EBAA7"></a-sky>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |color|material.color|#FFF|
     * |metalness|material.metalness|0|
     * |opacity|material.opacity|1|
     * |phi-length|geometry.phiLength|360|
     * |phi-start|geometry.phiStart|0|
     * |radius|geometry.radius|500|
     * |repeat|material.repeat|None|
     * |roughness|material.roughness|0.5|
     * |segments-height|geometry.segmentsHeight|32|
     * |segments-width|geometry.segmentsWidth|64|
     * |shader|material.shader|flat|
     * |side|material.side|back|
     * |src|material.src|None|
     * |theta-length|geometry.thetaLength|180|
     * |theta-start|geometry.thetaStart|0|
     * |transparent|material.transparent|false|
     */
    'a-sky': {
      /**
       * material.color
       * @default "#FFF"
       */
      'color'?: string;

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
        * geometry.phiLength
        * @default "360"
        */
      'phi-length'?: string;
 
       /**
        * geometry.phiStart
        * @default "0"
        */
      'phi-start'?: string;
 
       /**
        * geometry.radius
        * @default "500"
        */
      'radius'?: string;
 
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
        * @default "32"
        */
      'segments-height'?: string;
 
       /**
        * geometry.segmentsWidth
        * @default "64"
        */
      'segments-width'?: string;
 
       /**
        * material.shader
        * @default "flat"
        */
      'shader'?: string;
 
       /**
        * material.side
        * @default "back"
        */
      'side'?: string;
 
       /**
        * material.src
        * @default "None"
        */
      'src'?: string;
 
       /**
        * geometry.thetaLength
        * @default "180"
        */
      'theta-length'?: string;
 
       /**
        * geometry.thetaStart
        * @default "0"
        */
      'theta-start'?: string;
 
       /**
        * material.transparent
        * @default "false"
        */
      'transparent'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
