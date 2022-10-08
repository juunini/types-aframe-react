declare module JSX {
  interface IntrinsicElements {
    /**
     * @see https://aframe.io/docs/1.3.0/core/scene.html
     * 
     * A scene is represented by the <a-scene> element. The scene is the global root object, and all [entities](https://aframe.io/docs/1.3.0/core/entity.html) are contained within the scene.
     * 
     * The scene inherits from the [Entity](https://aframe.io/docs/1.3.0/core/entity.html) class so it inherits all of its properties, its methods, the ability to attach components, and the behavior to wait for all of its child nodes (e.g., `<a-assets>` and `<a-entity>`) to load before kicking off the render loop.
     *    
     * `<a-scene>` handles all of the three.js and WebVR/WebXR boilerplate for us:
     *
     * - Set up canvas, renderer, render loop
     * - Default camera and lights
     * - Set up webvr-polyfill, VREffect
     * - Add UI to Enter VR that calls WebVR API
     * - Configure WebXR devices through the [`webxr`](https://aframe.io/docs/1.3.0/components/webxr.html) system
     * 
     * @example
     * ```html
     * <a-scene>
     *   <a-assets>
     *     <img id="texture" src="texture.png">
     *   </a-assets>
     * 
     *   <a-box src="#texture"></a-box>
     * </a-scene>
     * ```
     */
    'a-scene': {
      /**
       * This component uses the WebXR hit-test API to position virtual objects in the real world. Remember to request the hit-test optional feature to allow it work.
       * 
       * You add it to the scene element and then when the user is in Augmented Reality if they tap on the screen or select with a controller it will work out where the user is pointing to in the real world and place a reticle there and fire events.
       * 
       * If you have set a target property to be an element it will automatically make the reticle to be the same size as the footprint of the target and then when the user selects the object will be telepoted there. It will also set the visible state of the object to true so you can hide the object until the user has placed it for the first time. The hide-on-enter-ar component is useful for that.
       * 
       * You can toggle this component’s enabled state to not do any interactions until you are ready.
       * 
       * @example
       * ```html
       * <a-scene webxr="optionalFeatures:  hit-test;" ar-hit-test="target:#myobject;">
       *         <a-entity id="myobject"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |target|The object to move around.|null|
       * |enabled|Whether to do hit-testing or not|true|
       * |src|Image to use for the reticle|See: Assets|
       * |type|‘footprint’ or ‘map’ footprint is the shape of the model|“footprint”|
       * |footprintDepth|Amount of the model used for the footprint, 1 is full height|0.1|
       * |mapSize|If no target is set then this is the size of the map|0.5 0.5|
       */
      'ar-hit-test'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/webxr.html
       * 
       * The webxr system configures a scene’s WebXR device setup, specifically the options for the [requestSession](https://immersive-web.github.io/webxr/#dom-xrsystem-requestsession) call.
       * 
       * When modifying these options, please pay attention to the browser console for diagnostic messages such as trying to use features without properly requesting them.
       * 
       * @example
       * ```html
       * <a-scene webxr="requiredFeatures: hit-test,local-floor;
       *                 optionalFeatures: dom-overlay,unbounded;
       *                 overlayElement: #overlay;"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |referenceSpaceType|The scene’s reference space type for camera and controllers.|local-floor|
       * |requiredFeatures|Required WebXR session features.|local-floor|
       * |optionalFeatures|Optional WebXR session features.|bounded-floor|
       * |overlayElement|Element selector for use as a WebXR DOM Overlay in AR mode.|null|
       */
      webxr?: string

      /**
       * @see https://aframe.io/docs/1.3.0/components/fog.html
       * 
       * The fog component obscures entities in fog given distance from the camera. The fog component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html).
       * 
       * @example
       * ```html
       * <a-scene fog="type: linear; color: #AAA"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |color|Color of fog. For example, if set to black, far away objects will be rendered black.|#000|
       * |density|How quickly the fog grows dense.|0.00025|
       * |far|Maximum distance to stop applying fog. Objects farther than this won’t be affected by fog.|1000|
       * |near|Minimum distance to start applying fog. Objects closer than this won’t be affected by fog.|1|
       * |type|Type of fog distribution. Can be `linear` or `exponential`.|linear|
       */
      fog?: string;

      /**
       * Inject the A-Frame Inspector.
       * 
       * @see https://aframe.io/docs/1.3.0/introduction/visual-inspector-and-dev-tools.html
       */
      inspector?: string;

      /**
       * The background component sets a basic color background of a scene that
       * is more performant than `a-sky` since geometry is not created.
       * There are no undesired frustum culling issues when `a-sky` is further than
       * the far plane of the camera. There are no unexpected occlusions either with
       * far objects that might be behind of the sphere geometry of `a-sky`.
       *
       * @see https://aframe.io/docs/1.3.0/components/background.html
       * 
       * @example
       * The example below sets the background color to red and use lighting estimation for AR.
       * ```html
       * <a-scene background="color: red"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |color|Color of the scene background.|black|
       * |transparent|Background is transparent. The color property is ignored.|false|
       */
      background?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/vr-mode-ui.html
       *
       * The vr-mode-ui component allows disabling of UI such as an
       * Enter VR button, compatibility modal, and orientation modal for mobile.
       * The vr-mode-ui component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html).
       * If we wish to simply toggle the UI, use CSS instead.
       * 
       * @example
       * ```html
       * <a-scene vr-mode-ui="enabled: false"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |enabled|Whether or not to display UI related to entering VR.|true|
       * |enterVRButton|Selector to a custom VR button. On click, the button will enter VR.|''|
       * |enterARButton|Selector to a custom AR button. On click, the button will enter AR.|''|
       */
      'vr-mode-ui'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/stats.html
       *
       * The stats component displays a UI with performance-related metrics.
       * The stats component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html).
       * 
       * @example
       * ```html
       * <a-scene stats></a-scene>
       * ```
       */
      stats?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/screenshot.html
       *
       * The screenshot component lets us take different types of screenshots with keyboard shortcuts.
       * A-Frame attaches this component to the scene by default
       * so we don’t have to do anything to use the component.
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |width|The width in pixels of the screenshot taken.|4096|
       * |height|The height in pixels of the screenshot taken.|2048|
       */
      screenshot?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/pool.html
       *
       * The pool component allows for [object pooling](https://en.wikipedia.org/wiki/Object_pool_pattern).
       * This gives us a reusable pool of entities to avoid creating and
       * destroying the same kind of entities in dynamic scenes.
       * Object pooling helps reduce garbage collection pauses.
       *
       * Note that entities requested from the pool are paused by default and you need to call `.play()`
       * in order to activate their components’ tick functions.
       * 
       * @example
       * For example, we may have a game with enemy entities that we want to reuse.
       * ```html
       * <a-scene pool__enemy="mixin: enemy; size: 10"></a-scene>
       * ```
       * 
       * ```js
       * var el = sceneEl.components.pool__enemy.requestEntity();
       * el.play();
       * sceneEl.components.pool__enemy.returnEntity(el);
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |container|Selector to store pooled entities. Defaults to the scene.|''|
       * |dynamic|Grow the pool automatically if more entities are requested after reaching the `size`.|false|
       * |mixin|Mixin required to initialize the entities of the pool.|''|
       * |size|Number of preallocated entities in the pool.|0|
       */
      pool?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/keyboard-shortcuts.html
       * 
       * The keyboard-shortcuts component toggles global keyboard shortcuts. The keyboard-shortcuts component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html).
       * 
       * @example
       * ```html
       * <a-scene keyboard-shortcuts="enterVR: false"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |enterVR|Enables the shortcut to press ‘F’ to enter VR.|true|
       */
      'keyboard-shortcuts'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/embedded.html
       *
       * The embedded component removes fullscreen CSS styles from A-Frame’s <canvas> element,
       * making it easier to embed within the layout of an existing webpage.
       * Embedding removes the default fixed positioning
       * from the canvas and makes the Enter VR button smaller.
       * 
       * @example
       * Add the embedded component, then style the <a-scene> element with CSS as if it were an empty <div>. Within <a-scene> is the <canvas> element.
       * ```html
       * a-scene {
       *   height: 300px;
       *   width: 600px;
       * }
       * 
       * <body>
       *   <div id="myEmbeddedScene">
       *     <a-scene embedded>
       *       <!-- ... -->
       *     </a-scene>
       *   </div>
       * </body>
       * ```
       */
      embedded?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/device-orientation-permission-ui.html
       *
       * Starting with Safari on iOS 13 browsers require sites to be
       * served over https and request user permission to access DeviceOrientation events.
       * This component presents a permission dialog for the user to grant or deny access.
       * The device-orientation-permission-ui component applies only to the [`<a-scene>` element](https://aframe.io/docs/1.3.0/core/scene.html)
       * 
       * To configure the style of the dialog one can redefine the associated css styles. To change the colors of the allow, deny and ok buttons:
       * 
       * ```css
       * .a-dialog-allow-button {
       *   background-color: red;
       * }
       * 
       * .a-dialog-deny-button {
       *   background-color: blue;
       * }
       * 
       * .a-dialog-ok-button {
       *   background-color: green;
       * }
       * ```
       * 
       * The dialog can also be disabled all together if you prefer to handle the permissions workflow differently.
       * 
       * @example
       * ```html
       * <a-scene device-orientation-permission-ui="enabled: false"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |enabled|Whether or not to display the dialog when required|true|
       * |denyButtonText|Deny button text|English text|
       * |allowButtonText|Allow button text|English text|
       * |cancelButtonText|Cancel button text|English text|
       * |deviceMotionMessage|Message in dialog requesting user permission to enable the Device Motion API.|English text|
       * |mobileDesktopMessage|Message displayed in modal requesting user to switch to mobile browsing mode.|English text|
       * |httpsMessage|Message requesting user to switch to HTTPS.|English text|
       */
      'device-orientation-permission-ui'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/debug.html
       *
       * The debug component enables component-to-DOM serialization.
       * 
       * @example
       * ```html
       * <a-scene debug></a-scene>
       * ```
       */
      debug?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/gltf-model.html#scene-properties
       * 
       * When using glTF models compressed with Draco or Meshopt, you must configure the path to the necessary decoders:
       * 
       * @example
       * ```html
       * <a-scene gltf-model="dracoDecoderPath: path/to/decoder/;
       *     meshoptDecoderPath: path/to/meshopt_decoder.js;">
       *   <a-entity gltf-model="url(pony.glb)"></a-entity>
       * </a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |dracoDecoderPath|Path to the Draco decoder libraries.|''|
       * |meshoptDecoderPath|Path to the Meshopt decoder.|''|
       */
      'gltf-model'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/shadow.html#scene-properties
       * 
       * The shadow system exposes scene-level properties for configuring the renderer for shadows. These are set on <a-scene> (e.g., <a-scene shadow="autoUpdate: false">).
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |enabled|Whether to disable shadows globally, even if there is a shadow component and a light with castShadow: true enabled.|true|
       * |autoUpdate|Whether to dynamically update the shadow map every frame. Disable and manually update by setting renderer.shadowMap.needsUpdate = true for best performance. Calculating shadow maps is expensive.|true|
       * |type|Shadow type. One of pcf, basic, pcfsoft.|pcf (percentage closer filtering)|
       */
      shadow?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/renderer.html
       *
       * The `renderer` system configures a scene’s [THREE.WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) instance.
       * It also configures presentation attributes when entering WebVR/WebXR.
       *
       * @example
       * ```html
       * <a-scene renderer="antialias: true;
       *                    colorManagement: true;
       *                    sortObjects: true;
       *                    physicallyCorrectLights: true;
       *                    maxCanvasWidth: 1920;
       *                    maxCanvasHeight: 1920;"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |antialias|Whether to perform antialiasing. If auto, antialiasing is disabled on mobile.|auto|
       * |colorManagement|Whether to use a color-managed linear workflow.|false|
       * |highRefreshRate|Toggles 72hz mode on Oculus Browser. Defaults to 60hz.|false|
       * |foveationLevel|Enables foveation in VR to improve perf. 0 none, 1 low, 2 medium, 3 high|0|
       * |sortObjects|Whether to sort objects before rendering.|false|
       * |physicallyCorrectLights|Whether to use physically-correct light attenuation.|false|
       * |maxCanvasWidth|Maximum canvas width. Uses the size multiplied by device pixel ratio. Does not limit canvas width if set to -1.|1920|
       * |maxCanvasHeight|Maximum canvas height. Behaves the same as maxCanvasWidth.|1920|
       * |logarithmicDepthBuffer|Whether to use a logarithmic depth buffer.|auto|
       * |precision|Fragment shader precision : low, medium or high.|high|
       * |alpha|Whether the canvas should contain an alpha buffer.|true|
       */
      renderer?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/light.html
       * 
       * To manually disable the defaults, without adding other lights:
       * 
       * ```html
       * <a-scene light="defaultLightsEnabled: false">
       *   <!-- ... -->
       * </a-scene>
       * ```
       * 
       * @properties
       * |Property|Default Value|
       * |:-|:-|
       * |defaultLightsEnabled|true|
       */
      light?: string;

      /**
       * The loading screen component configures the loading screen visual style.
       * 
       * To configure the style of the loader title bar one can redefine .a-loader-title style. The example below sets the text color to red:
       * 
       * ```css
       * .a-loader-title {
       *   color: red;
       * }
       * ```
       * 
       * The title text is set to whatever is in document.title or <title></title>.
       * 
       * @example
       * The example below sets the background color to black and dots color to red.
       * 
       * ```html
       * <a-scene loading-screen="dotsColor: red; backgroundColor: black"></a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |dotsColor|Loader dots color.|white|
       * |backgroundColor|Loader background color.|#24CAFF|
       * |enabled|Enables / Disables the loading screen.|true|
       */
      'loading-screen'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/reflection.html
       * 
       * The reflection component generates a default environment cube map for all materials, this is useful in case you find GLB models end up too dark or reflective materials don’t look right because they are not reflecting the environment this will provide a default reflective environment.
       * 
       * ![Left hand side has objects with no reflection, the objects on the right reflect the environment](https://user-images.githubusercontent.com/4225330/151032019-1f14a079-604a-4c5f-b377-ea30a4e2b098.png)
       * 
       * @example
       * The example below sets the reflection color to red and use lighting estimation for AR.
       * 
       * ```html
       * <a-scene reflection="directionalLight:a-light#dirlight;"></a-scene>
       *         <a-light id="dirlight" intensity="1" light="castShadow:true;type:directional" position="1 1 1"></a-light>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |directionalLight|Light to control during WebXR Lighting Estimation
       */
      reflection?: string;

      [key: string]: string;
    } | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
