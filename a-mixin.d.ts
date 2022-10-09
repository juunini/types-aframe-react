/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/core/mixins.html
     * 
     * Mixins provide a way to compose and reuse commonly-used sets of component properties. They are defined using the <a-mixin> element and are placed in <a-assets>. Mixins should be set with an id, and when an entity sets that id as its mixin attribute, the entity will absorb all of the mixin’s attributes.
     * 
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <a-mixin id="red" material="color: red"></a-mixin>
     *     <a-mixin id="blue" material="color: blue"></a-mixin>
     *     <a-mixin id="cube" geometry="primitive: box"></a-mixin>
     *   </a-assets>
     * 
     *   <a-entity mixin="red cube"></a-entity>
     *   <a-entity mixin="blue cube"></a-entity>
     * </a-scene>
     * ```
     * 
     * The entity with red cube will take the properties from the red mixin and the cube mixin in that order. Likewise with the blue cube. Conceptually, the entities above expand to:
     * 
     * ```html
     * <a-entity material="color: red" geometry="primitive: box"></a-entity>
     * <a-entity material="color: blue" geometry="primitive: box"></a-entity>
     * ```
     */
    'a-mixin'?: JSX.IntrinsicElements['a-entity'];
  }
}
