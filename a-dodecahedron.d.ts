/// <reference path="a-entity.d.ts" />

declare module JSX {
  interface IntrinsicElements {
    /**
     * @example
     * ```html
     * <a-dodecahedron color="#FF926B" radius="5"></a-dodecahedron>
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
     * |open-ended|geometry.openEnded|false|
     * |radius-bottom|geometry.radiusBottom|1|
     * |radius-top|geometry.radiusTop|0.8|
     * |repeat|material.repeat|1 1|
     * |roughness|material.roughness|0.5|
     * |segments-height|geometry.segmentsHeight|18|
     * |segments-radial|geometry.segmentsRadial|36|
     * |spherical-env-map|material.sphericalEnvMap|None|
     * |src|material.src|None|
     * |theta-length|geometry.thetaLength|360|
     * |theta-start|geometry.thetaStart|0|
     * |width|material.width|512|
     * |wireframe|material.wireframe|false|
     * |wireframe-linewidth|material.wireframeLinewidth|2|
     */
    'a-dodecahedron': {
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
        * geometry.openEnded
        * @default "false"
        */
      'open-ended'?: string;
 
       /**
        * geometry.radiusBottom
        * @default "1"
        */
      'radius-bottom'?: string;
 
       /**
        * geometry.radiusTop
        * @default "0.8"
        */
      'radius-top'?: string;
 
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
        * geometry.segmentsHeight
        * @default "18"
        */
      'segments-height'?: string;
 
       /**
        * geometry.segmentsRadial
        * @default "36"
        */
      'segments-radial'?: string;
 
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
