/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-light.html
     * 
     * A light changes the lighting and shading of the scene.
     * 
     * @example
     * ```html
     * <!-- Red directional light shining from the top left. -->
     * <a-light color="red" position="-1 1 0"></a-light>
     * 
     * <!-- Blue point light, 5 meters in the air. -->
     * <a-light type="point" color="blue" position="0 5 0"></a-light>
     * 
     * <!-- Dim ambient lighting. -->
     * <a-light type="ambient" color="#222"></a-light>
     * 
     * <!-- Probe light using the #pisa environment map -->
     * <a-assets>
     *         <a-cubemap id="pisa">
     *         <img src="https://threejs.org/examples/textures/cube/pisa/px.png">
     *         <img src="https://threejs.org/examples/textures/cube/pisa/nx.png">
     *         <img src="https://threejs.org/examples/textures/cube/pisa/py.png">
     *         <img src="https://threejs.org/examples/textures/cube/pisa/ny.png">
     *         <img src="https://threejs.org/examples/textures/cube/pisa/pz.png">
     *         <img src="https://threejs.org/examples/textures/cube/pisa/nz.png">
     *         </a-cubemap>
     * </a-assets>
     * 
     * <a-light type="probe" envMap="#pisa"></a-light>
     * ```
     * 
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |angle|light.angle|60|
     * |color|light.color|#fff|
     * |decay|light.decay|1|
     * |distance|light.distance|0.0|
     * |envmap|light.envMap|null|
     * |ground-color|light.groundColor|#fff|
     * |intensity|light.intensity|1.0|
     * |penumbra|light.penumbra|0.0|
     * |type|light.type|directional|
     * |target|light.target|null|
     */
    'a-light': {
      /**
       * light.angle
       * @default "60"
       */
      'angle'?: string;

       /**
        * light.color
        * @default "#fff"
        */
      'color'?: string;
 
       /**
        * light.decay
        * @default "1"
        */
      'decay'?: string;
 
       /**
        * light.distance
        * @default "0.0"
        */
      'distance'?: string;
 
       /**
        * light.envMap
        * @default "null"
        */
      'envmap'?: string;
 
       /**
        * light.groundColor
        * @default "#fff"
        */
      'ground-color'?: string;
 
       /**
        * light.intensity
        * @default "1.0"
        */
      'intensity'?: string;
 
       /**
        * light.penumbra
        * @default "0.0"
        */
      'penumbra'?: string;
 
       /**
        * light.type
        * @default "directional"
        */
      'type'?: string;
 
       /**
        * light.target
        * @default "null"
        */
      'target'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
