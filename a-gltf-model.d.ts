/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * The glTF model primitive displays a 3D glTF model created from a 3D modeling program or downloaded from the web.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <a-asset-item id="tree" src="tree.gltf"></a-asset-item>
     *   </a-assets>
     * 
     *   <!-- Using the asset management system. -->
     *   <a-gltf-model src="#tree"></a-gltf-model>
     * 
     *   <!-- Defining the URL inline. Not recommended but more comfortable for web developers. -->
     *   <a-gltf-model src="tree.gltf"></a-gltf-model>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |src|gltf-model.src|null|
     */
    'a-gltf-model': {
      /**
       * gltf-model.src
       * @default "null"
       */
      src?: string;
    } | JSX.IntrinsicElements['a-entity'];
  }
}
