/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/primitives/a-circle.html
     * 
     * The circle primitive creates circles surfaces using the geometry component with the type set to circle.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <img id="platform" src="platform.jpg">
     *   </a-assets>
     * 
     *   <!-- Basic circle. -->
     *   <a-circle color="#CCC" radius="20"></a-circle>
     * 
     *   <!-- Textured circle parallel to ground. -->
     *   <a-circle src="#platform" radius="50" rotation="-90 0 0"></a-circle>
     * </a-scene>
     * ```
     * 
     * @attributes
     * |Attribute|Description|Default Value|
     * |:-|:-|:-|
     * |ambient-occlusion-map|material.ambientOcclusionMap|None|
     * |ambient-occlusion-map-intensity|material.ambientOcclusionMapIntensity|1|
     * |ambient-occlusion-texture-offset|material.ambientOcclusionTextureOffset|0 0|
     * |ambient-occlusion-texture-repeat|material.ambientOcclusionTextureRepeat|1 1|
     * |color|material.color|#FFF|
     * |displacement-bias|material.displacementBias|0.5|
     * |displacement-map|material.displacementMap|None|
     * |displacement-scale|material.displacementScale|1|
     * |displacement-texture-offset|material.displacementTextureOffset|0 0|
     * |displacement-texture-repeat|material.displacementTextureRepeat|1 1|
     * |env-map|material.envMap|None|
     * |fog|material.fog|true|
     * |height|material.height|256|
     * |metalness|material.metalness|0|
     * |normal-map|material.normalMap|None|
     * |normal-scale|material.normalScale|1 1|
     * |normal-texture-offset|material.normalTextureOffset|0 0|
     * |normal-texture-repeat|material.normalTextureRepeat|1 1|
     * |radius|geometry.radius|1|
     * |repeat|material.repeat|1 1|
     * |roughness|material.roughness|0.5|
     * |segments|geometry.segments|32|
     * |spherical-env-map|material.sphericalEnvMap|None|
     * |src|material.src|None|
     * |theta-length|geometry.thetaLength|360|
     * |theta-start|geometry.thetaStart|0|
     * |width|material.width|512|
     * |wireframe|material.wireframe|false|
     * |wireframe-linewidth|material.wireframeLinewidth|2|
     */
     'a-circle'?: {
        /**
         * material.ambientOcclusionMap
         * @default "None"
         */  
        'ambient-occlusion-map'?: string;
        /**
         * material.ambientOcclusionMapIntensity
         * @default "1"
         */
        'ambient-occlusion-map-intensity'?: string;
        /**
         * material.ambientOcclusionTextureOffset
         * @default "0 0"
         */
        'ambient-occlusion-texture-offset'?: string;
        /**
         * material.ambientOcclusionTextureRepeat
         * @default "1 1"
         */
        'ambient-occlusion-texture-repeat'?: string;
        /**
         * material.color
         * @default "#FFF"
         */
        'color'?: string;
        /**
         * material.displacementBias
         * @default "0.5"
         */
        'displacement-bias'?: string;
        /**
         * material.displacementMap
         * @default "None"
         */
        'displacement-map'?: string;
        /**
         * material.displacementScale
         * @default "1"
         */
        'displacement-scale'?: string;
        /**
         * material.displacementTextureOffset
         * @default "0 0"
         */
        'displacement-texture-offset'?: string;
        /**
         * material.displacementTextureRepeat
         * @default "1 1"
         */
        'displacement-texture-repeat'?: string;
        /**
         * material.envMap
         * @default "None"
         */
        'env-map'?: string;
        /**
         * material.fog
         * @default "true"
         */
        'fog'?: string;
        /**
         * material.height
         * @default "256"
         */
        'height'?: string;
        /**
         * material.metalness
         * @default "0"
         */
        'metalness'?: string;
        /**
         * material.normalMap
         * @default "None"
         */
        'normal-map'?: string;
        /**
         * material.normalScale
         * @default "1 1"
         */
        'normal-scale'?: string;
        /**
         * material.normalTextureOffset
         * @default "0 0"
         */
        'normal-texture-offset'?: string;
        /**
         * material.normalTextureRepeat
         * @default "1 1"
         */
        'normal-texture-repeat'?: string;
        /**
         * geometry.radius
         * @default "1"
         */
        'radius'?: string;
        /**
         * material.repeat
         * @default "1 1"
         */
        'repeat'?: string;
        /**
         * material.roughness
         * @default "0.5"
         */
        'roughness'?: string;
        /**
         * geometry.segments
         * @default "32"
         */
        'segments'?: string;
        /**
         * material.sphericalEnvMap
         * @default "None"
         */
        'spherical-env-map'?: string;
        /**
         * material.src
         * @default "None"
         */
        'src'?: string;
        /**
         * geometry.thetaLength
         * @default "360"
         */
        'theta-length'?: string;
        /**
         * geometry.thetaStart
         * @default "0"
         */
        'theta-start'?: string;
        /**
         * material.width
         * @default "512"
         */
        'width'?: string;
        /**
         * material.wireframe
         * @default "false"
         */
        'wireframe'?: string;
        /**
         * material.wireframeLinewidth
         * @default "2"
         */
        'wireframe-linewidth'?: string;
     } | JSX.IntrinsicElements['a-entity'];
  }
}
