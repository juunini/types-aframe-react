/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-curvedimage.html
     * 
     * The curved image primitive creates images that bend around the user. Curved images arranged around the camera can be pleasing for legibility since each pixel sits at the same distance from the user. They can be a better choice than angled flat planes for complex layouts because they ensure a smooth surface rather than a series of awkward seams between planes.
     * 
     * Under the hood, a curved image is a double-sided open-ended cylinder with textures mapped to the inside of the cylinder.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <img id="my-image" src="image.png">
     *   </a-assets>
     * 
     *   <!-- Using the asset management system. -->
     *   <a-curvedimage src="#my-image" height="3.0" radius="5.7" theta-length="72"
     *                  rotation="0 100 0" scale="0.8 0.8 0.8"></a-curvedimage>
     * 
     *   <!-- Defining the URL inline. Not recommended but more comfortable for web developers. -->
     *   <a-curvedimage src="another-image.png"></a-curvedimage>
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
     * |open-ended|geometry.openEnded|true|
     * |radius|geometry.radius|2|
     * |repeat|material.repeat|None|
     * |roughness|material.roughness|0.5|
     * |segments-height|geometry.segmentsHeight|18|
     * |segments-radial|geometry.segmentsRadial|48|
     * |shader|material.shader|flat|
     * |side|material.side|double|
     * |src|material.src|None|
     * |theta-length|geometry.thetaLength|270|
     * |theta-start|geometry.thetaStart|0|
     * |transparent|material.transparent|true|
     */
    'a-curvedimage': {
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
        * geometry.openEnded
        * @default "true"
        */
      'open-ended'?: string;
      
      /**
        * geometry.radius
        * @default "2"
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
        * @default "18"
        */
      'segments-height'?: string;
      
      /**
        * geometry.segmentsRadial
        * @default "48"
        */
      'segments-radial'?: string;
      
      /**
        * material.shader
        * @default "flat"
        */
      'shader'?: string;
      
      /**
        * material.side
        * @default "double"
        */
      'side'?: string;
      
      /**
        * material.src
        * @default "None"
        */
      'src'?: string;
      
      /**
        * geometry.thetaLength
        * @default "270"
        */
      'theta-length'?: string;
      
      /**
        * geometry.thetaStart
        * @default "0"
        */
      'theta-start'?: string;
      
      /**
        * material.transparent
        * @default "true"
        */
      'transparent'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
