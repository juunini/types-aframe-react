/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-videosphere.html
     * 
     * @description The videosphere primitive plays 360° videos in the background of the scene. Videospheres are a large sphere with the video texture mapped to the inside.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <video id="antarctica" autoplay loop="true" src="antarctica.mp4"> </video>
     *   </a-assets>
     * 
     *   <!-- Using the asset management system. -->
     *   <a-videosphere src="#antarctica"></a-videosphere>
     * 
     *   <!-- Defining the URL inline. Not recommended but more comfortable for web developers. -->
     *   <a-videosphere src="africa.mp4"></a-videosphere>
     * </a-scene>
     * ```
     * 
     * @methods
     * More indepth knowledge on the methods to alter video material can be seen over [here](https://aframe.io/docs/1.3.0/components/material.html#video-textures)
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |autoplay|<video>.autoplay|true|
     * |crossOrigin|<video>.crossOrigin|anonymous|
     * |loop|<video>.loop|true|
     * |radius|geometry.radius|5000|
     * |segments-height|geometry.segmentsHeight|64|
     * |segments-width|geometry.segmentsWidth|64|
     * 
     * # Equirectangular Video
     * To be seamless, source videos should be [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection).
     * 
     * # Caveats
     * iOS has a lot of restrictions on playing videos in the browser. To play an inline video texture, we must:
     * 
     * - Set the <meta name="apple-mobile-web-app-capable" content="yes"> meta tag. A-Frame will will inject this if missing.
     * - Set the webkit-playsinline and playsinline attribute to the video element. A-Frame will add this to all videos if missing).
     * - Pin the webpage to the iOS homescreen.
     * 
     * Inline video support on iOS 10 may change this. On certain Android devices or browsers, we must:
     * 
     * - Require user interaction to trigger the video (such as a click or tap event). See [Chromium Bug 178297](https://bugs.chromium.org/p/chromium/issues/detail?id=178297)
     */
    'a-videosphere': {
      /**
       * <video>.autoplay
       * @default "true"
       */
      'autoplay'?: string;

       /**
        * <video>.crossOrigin
        * @default "anonymous"
        */
      'crossOrigin'?: string;
 
       /**
        * <video>.loop
        * @default "true"
        */
      'loop'?: string;
 
       /**
        * geometry.radius
        * @default "5000"
        */
      'radius'?: string;
 
       /**
        * geometry.segmentsHeight
        * @default "64"
        */
      'segments-height'?: string;
 
       /**
        * geometry.segmentsWidth
        * @default "64"
        */
      'segments-width'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
