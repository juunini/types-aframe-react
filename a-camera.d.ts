/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-camera.html
     * 
     * The camera primitive determines what the user sees. We can change the viewport by modifying the camera entity’s position and rotation.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-box></a-box>
     *   <a-camera></a-camera>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |far|camera.far|10000|
     * |fov|camera.fov|80|
     * |look-controls-enabled|look-controls.enabled|true|
     * |near|camera.near|0.5|
     * |reverse-mouse-drag|look-controls.reverseMouseDrag|false|
     * |wasd-controls-enabled|wasd-controls.enabled|true|
     */
     'a-camera': {
      /**
       * camera.far
       * @default 10000
       */
      'far'?: string;
      /**
       * camera.fov
       * @default 80
       */
      'fov'?: string;
      /**
       * look-controls.enabled
       * @default true
       */
      'look-controls-enabled'?: string;
      /**
       * camera.near
       * @default 0.5
       */
      'near'?: string;
      /**
       * look-controls.reverseMouseDrag
       * @default false
       */
      'reverse-mouse-drag'?: string;
      /**
       * wasd-controls.enabled
       * @default true
       */
      'wasd-controls-enabled'?: string;
     } | JSX.IntrinsicElements['a-entity'];
  }
}
