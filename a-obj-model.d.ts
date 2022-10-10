/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-obj-model.html
     * 
     * @description
     * > We recommend glTF for distributing assets in production over the web. Check out using the glTF model primitive. You can either instead export to COLLADA and use the converter or try out the OBJ converter.
     * 
     * The .OBJ model primitive displays a 3D Wavefront model.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <a-asset-item id="crate-obj" src="crate.obj"></a-asset-item>
     *     <a-asset-item id="crate-mtl" src="crate.mtl"></a-asset-item>
     *   </a-assets>
     * 
     *   <!-- Using the asset management system. -->
     *   <a-obj-model src="#crate-obj" mtl="#crate-mtl"></a-obj-model>
     * 
     *   <!-- Defining the URL inline. Not recommended but may be more comfortable. -->
     *   <a-obj-model src="crate.obj" mtl="crate.mtl"></a-obj-model>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |mtl|obj-model.mtl|null|
     * |src|obj-model.obj|null|
     * 
     * @troubleshooting
     * See [Introduction → 3D Models → Troubleshooting](https://aframe.io/docs/1.3.0/introduction/models.html#troubleshooting).
     */
    'a-obj-model': {
      /**
       * obj-model.mtl
       * @default "null"
       */
      'mtl'?: string;

       /**
        * obj-model.obj
        * @default "null"
        */
      'src'?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
