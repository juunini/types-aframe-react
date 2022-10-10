/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-sound.html
     * 
     * @description The sound primitive wraps the sound component.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-sound src="src: url(click.mp3)" autoplay="true" position="0 2 5"></a-sound>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |autoplay|sound.autoplay|false|
     * |loop|sound.loop|false|
     * |on|sound.on|null|
     * |src|sound.src|null|
     * |volume|sound.volume|1|
     */
    'a-sound': {
      /**
       * sound.autoplay
       * @default "false"
       */
      'autoplay'?: string;

       /**
        * sound.loop
        * @default "false"
        */
      'loop'?: string;
 
       /**
        * sound.on
        * @default "null"
        */
      'on'?: string;
 
       /**
        * sound.src
        * @default "null"
        */
      'src'?: string;
 
       /**
        * sound.volume
        * @default "1"
        */
      'volume'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
