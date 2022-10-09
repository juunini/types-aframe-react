declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/core/asset-management-system.html
     * 
     * @property { string } id - Asset ID.
     * @property { string } src - Asset source.
     * 
     * @example
     * ```html
     * <a-scene>
     *   <!-- Asset management system. -->
     *   <a-assets>
     *     <a-asset-item id="horse-obj" src="horse.obj"></a-asset-item>
     *     <a-asset-item id="horse-mtl" src="horse.mtl"></a-asset-item>
     *     <a-mixin id="giant" scale="5 5 5"></a-mixin>
     *     <audio id="neigh" src="neigh.mp3"></audio>
     *     <img id="advertisement" src="ad.png">
     *     <video id="kentucky-derby" src="derby.mp4"></video>
     *   </a-assets>
     * 
     *   <!-- Scene. -->
     *   <a-plane src="#advertisement"></a-plane>
     *   <a-sound src="#neigh"></a-sound>
     *   <a-entity geometry="primitive: plane" material="src: #kentucky-derby"></a-entity>
     *   <a-entity mixin="giant" obj-model="obj: #horse-obj; mtl: #horse-mtl"></a-entity>
     * </a-scene>
     * ```
     */
    'a-asset-item'?: {
      src?: string;
    } | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
