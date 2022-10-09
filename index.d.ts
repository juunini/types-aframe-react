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
       * # Scene Lighting and Lighting Estimation
       * 
       * The reflection component will generate an environment map from your surroundings using WebXR Lighting estimation in Augmented Reality if it is available.
       * 
       * During this it will also take control of your scene’s main directional light to ensure it’s direction and color matches that of the rest of the environemnt. This works really well for your scene’s shadows. It will also create a probe light to match the lighting of the real world. So you should turn off any additional global scene lights, such as other directional lights, hemisphere lights or ambient lights, when the user enters AR. You can do this with the hide-on-enter-ar component.
       * 
       * Once the user leaves AR this light may have a different color, intensity and position than when they entered AR as it has been altered by the lighting estimation.
       * 
       * @example
       * The example below sets the reflection color to red and use lighting estimation for AR.
       * ```html
       * <a-scene reflection="directionalLight:a-light#dirlight;"></a-scene>
       * 	<a-light id="dirlight" intensity="1" light="castShadow:true;type:directional" position="1 1 1"></a-light>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |directionalLight|Light to control during WebXR Lighting Estimation|
       */
      reflection?: string;

      [key: string]: string;
    } | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    /**
     * @see https://aframe.io/docs/1.3.0/core/entity.html
     * 
     * A-Frame represents an entity via the <a-entity> element. As defined in the [entity-component-system pattern](https://aframe.io/docs/1.3.0/introduction/entity-component-system.html), entities are placeholder objects to which we plug in components to provide them appearance, behavior, and functionality.
     * 
     * In A-Frame, entities are inherently attached with the [position](https://aframe.io/docs/1.3.0/components/position.html), [rotation](https://aframe.io/docs/1.3.0/components/rotation.html), and [scale](https://aframe.io/docs/1.3.0/components/scale.html) components.
     * 
     * @example
     * Consider the entity below. By itself, it has no appearance, behavior, or functionality. It does nothing:
     * 
     * ```html
     * <a-entity>
     * ```
     * 
     * We can attach components to it to make it render something or do something. To give it shape and appearance, we can attach the [geometry](https://aframe.io/docs/1.3.0/components/geometry.html) and [material](https://aframe.io/docs/1.3.0/components/material.html) components:
     * 
     * ```html
     * <a-entity geometry="primitive: box" material="color: red">
     * ```
     * 
     * Or to make it emit light, we can further attach the light component:
     * 
     * ```html
     * <a-entity geometry="primitive: box" material="color: red"
     *           light="type: point; intensity: 2.0">
     * ```
     */
    'a-entity': {
      /**
       * @see https://aframe.io/docs/1.3.0/components/animation.html
       * 
       * The animation component lets us animate and tween values including:
       * 
       * - Component values (e.g., position, visible
       * - Component property values (e.g., light.intensity
       * 
       * We can also tween values directly for better performance versus going through .setAttribute, such as by animating values:
       * - On the object3D (e.g., object3D.position.y, object3D.rotation.z)
       * - Directly within a component (e.g., components.material.material.color, components.text.material.uniforms.opacity.value),
       * 
       * For example, translating a box:
       * 
       * ```html
       * <a-box position="-1 1.6 -5" animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true" color="tomato"></a-box>
       * ```
       * 
       * Or orbiting a sphere in a 5-meter radius:
       * 
       * ```html
       * <a-entity rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
       *         <a-sphere position="5 0 0" color="mediumseagreen"></a-sphere>
       * </a-entity>
       * ```
       * 
       * Read more below for additional options and discovering how to properly animate different types of values.
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |property|Property to animate. Can be a component name, a dot-delimited property of a component (e.g., material.color), or a plain attribute.||
       * |isRawProperty|Flag to animate an arbitrary object property outside of A-Frame components for better performance. If set to true, for example, we can set property to like components.material.material.opacity. If property starts with components or object3D, this will be inferred to true.|false|
       * |from|Initial value at start of animation. If not specified, the current property value of the entity will be used (will be sampled on each animation start). It is best to specify a from value when possible for stability.|null|
       * |to|Target value at end of animation.|null|
       * |type|Right now only supports color for tweening isRawProperty color XYZ/RGB vector values.|‘’|
       * |delay|How long (milliseconds) to wait before starting.|0|
       * |dir|Which dir to go from from to to.|normal|
       * |dur|How long (milliseconds) each cycle of the animation is.|1000|
       * |easing|Easing function of animation. To ease in, ease out, ease in and out.|easeInQuad|
       * |elasticity|How much to bounce (higher is stronger).|400|
       * |loop|How many times the animation should repeat. If the value is true, the animation will repeat infinitely.|0|
       * |round|Whether to round values.|false|
       * |startEvents|Comma-separated list of events to listen to trigger a restart and play. Animation will not autoplay if specified. startEvents will restart the animation, use pauseEvents to resume it. If there are other animation components on the entity animating the same property, those animations will be automatically paused to not conflict.|null|
       * |pauseEvents|Comma-separated list of events to listen to trigger pause. Can be resumed with resumeEvents.|null|
       * |resumeEvents|Comma-separated list of events to listen to trigger resume after pausing.|null|
       * |autoplay|Whether or not the animation should autoplay. Should be specified if the animation is defined for the animation-timeline component.|true|
       * |enabled|If disabled, animation will stop and startEvents will not trigger animation start.|true|
       * 
       * # Multiple Animations
       * 
       * The component’s base name is animation. We can attach multiple animations to one entity by name-spacing the component with double underscores (__)
       * 
       * ```html
       * <a-entity animation="property: rotation"
       *           animation__2="property: position"
       *           animation__color="property: material.color"></a-entity>
       * ```
       */
      animation?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/camera.html
       * 
       * The camera component defines from which perspective the user views the scene. The camera is commonly paired with controls components that allow input devices to move and rotate the camera.
       * 
       * @example
       * A camera should usually be positioned at the average height of human eye level (1.6 meters). When used with controls that receive rotation or position (e.g. from a VR device) this position will be overridden.
       * 
       * ```html
       * <a-entity camera look-controls position="0 1.6 0"></a-entity>
       * ```
       * 
       * When moving or rotating the camera relative to the scene, use a camera rig. By doing so, the camera’s height offset can be updated by roomscale devices, while still allowing the tracked area to be moved independently around the scene.
       * 
       * ```html
       * <a-entity id="rig" position="25 10 0">
       *   <a-entity id="camera" camera look-controls></a-entity>
       * </a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |active|Whether the camera is the active camera in a scene with more than one camera.|true|
       * |far|Camera frustum far clipping plane.|10000|
       * |fov|Field of view (in degrees).|80|
       * |near|Camera frustum near clipping plane.|0.005|
       * |spectator|Whether the camera is used to render a third-person view of the scene on the 2D display while in VR mode.|false|
       * |zoom|Zoom factor of the camera.|1|
       */
      camera?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/cursor.html
       * 
       * The cursor component provides hover and click states for interaction on top of the raycaster component. The cursor component can be used for both gaze-based and controller-based interactions, but the appearance needs to be configured depending on the use case. The <a-cursor> primitive provides a default reticle appearance for a gaze-based cursor, and the laser-controls component configures the cursor for all controllers.
       * 
       * The cursor component listens to events and keeps state on what’s being hovered and pressed in order to provide mousedown, mouseup, mouseenter, mouseleave, and click events. We use the name mouse to mimic traditional web development for now. Under the hood, the cursor component uses the raycaster-intersection and raycaster-intersection-cleared events, capturing the closest visible intersected entity.
       * 
       * By default, the cursor is configured to be used in a gaze-based mode and will register user input via mouse or touch. Specifying the downEvents and upEvents properties allows the cursor to work with controllers. For example, the laser-controls component automatically configures these properties to work with most controllers.
       * 
       * To provide a shape or appearance to the cursor, we should apply either the geometry and material components or use the raycaster component’s showLine property to draw a line using the line component.
       * 
       * @example
       * For example, we can create a ring-shaped cursor fixed to the center of the screen. To fix the cursor to the screen so the cursor is always present no matter where we look, we place it as a child of the active camera entity. We pull it in front of the camera by placing it on the negative Z axis. When the cursor clicks on the box, we can listen to the click event.
       * 
       * ```html
       * <a-entity camera look-controls>
       *   <a-entity cursor="fuse: true; fuseTimeout: 500"
       *             position="0 0 -1"
       *             geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
       *             material="color: black; shader: flat">
       *   </a-entity>
       * </a-entity>
       * 
       * <a-entity id="box" cursor-listener geometry="primitive: box" material="color: blue"></a-entity>
       * ```
       * 
       * ```js
       * // Component to change to a sequential color on click.
       * AFRAME.registerComponent('cursor-listener', {
       *   init: function () {
       *     var lastIndex = -1;
       *     var COLORS = ['red', 'green', 'blue'];
       *     this.el.addEventListener('click', function (evt) {
       *       lastIndex = (lastIndex + 1) % COLORS.length;
       *       this.setAttribute('material', 'color', COLORS[lastIndex]);
       *       console.log('I was clicked at: ', evt.detail.intersection.point);
       *     });
       *   }
       * });
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |downEvents|Array of additional events on the entity to listen to for triggering mousedown (e.g., triggerdown for vive-controls).|[]|
       * |fuse|Whether cursor is fuse-based.|false on desktop, true on mobile|
       * |fuseTimeout|How long to wait (in milliseconds) before triggering a fuse-based click event.|1500|
       * |mouseCursorStylesEnabled|Whether to show pointer cursor in rayOrigin: mouse mode when hovering over entity.|true|
       * |rayOrigin|Where the intersection ray is cast from (i.e.,entity or mouse). rayOrigin: mouse is extremely useful for VR development on a mouse and keyboard.|entity|
       * |upEvents|Array of additional events on the entity to listen to for triggering mouseup (e.g., trackpadup for daydream-controls).|[]|
       * 
       * To further customize the cursor component, we configure the cursor’s dependency component, [the raycaster component](https://aframe.io/docs/1.3.0/components/raycaster.html).
       */
      cursor?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/daydream-controls.html
       * 
       * The daydream-controls component interfaces with the Google Daydream controllers. It wraps the tracked-controls component while adding button mappings, events, and a Daydream controller model that highlights the touched and/or pressed buttons (trackpad).
       * 
       * As a first time set up, to use the Daydream controller on Chrome for Android enable both WebVR and Gamepad Extensions experiments in chrome://flags and relaunch the browser.
       * 
       * Then, open your web app, enter VR mode and place the phone inside the headset. It can occassionally take a few seconds before the controller can be used.
       * 
       * @example
       * ```html
       * <!-- Match Daydream controller if present, regardless of hand. -->
       * <a-entity daydream-controls></a-entity>
       * ```
       * 
       * ```html
       * <!-- Match Daydream controller if present and for specified hand. -->
       *  <a-entity daydream-controls="hand: left"></a-entity>
       *  <a-entity daydream-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |armModel|Whether the arm model is used for positional data.|true|
       * |buttonColor|Button colors when not pressed.|#000000|
       * |buttonTouchedColor|Button colors when touched.|#777777|
       * |buttonHighlightColor|Button colors when pressed and active.|#FFFFFF|
       * |hand|Set hand that will be tracked (i.e., right, left).||
       * |model|Whether the Daydream controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'daydream-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/gearvr-controls.html
       * 
       * The gearvr-controls component interfaces with the Samsung/Oculus Gear VR controllers. It wraps the tracked-controls component while adding button mappings, events, and a Gear VR controller model that highlights the touched and/or pressed buttons (trackpad, trigger).
       * 
       * @example
       * ```html
       * <!-- Match Gear VR controller if present, regardless of hand. -->
       * <a-entity gearvr-controls></a-entity>
       * 
       * <!-- Match Gear VR controller if present and for specified hand. -->
       * <a-entity gearvr-controls="hand: left"></a-entity>
       * <a-entity gearvr-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |armModel|Whether the arm model is used for positional data.|true|
       * |buttonColor|Button colors when not pressed.|#000000|
       * |buttonTouchedColor|Button colors when touched.|#777777|
       * |buttonHighlightColor|Button colors when pressed and active.|#FFFFFF|
       * |hand|The hand that will be tracked (e.g., right, left).||
       * |model|Whether the Gear controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'gearvr-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/geometry.html
       * 
       * The geometry component provides a basic shape for an entity. The primitive property defines the general shape. Geometric primitives, in computer graphics, are irreducible basic shapes. A material component is commonly defined to provide an appearance alongside the shape to create a complete mesh.
       * 
       * @properties
       * 
       * # Base Properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |primitive|Name of a geometry (e.g., one of the geometries listed below). Determines the geometry type and what other properties are available.|box|
       * |skipCache|Disable retrieving the shared geometry object from the cache.|false|
       * 
       * # Built-in Geometries
       * ## Box
       * The box geometry defines boxes (i.e., any quadrilateral, not just cubes).
       * 
       * ```html
       * <a-entity geometry="primitive: box; width: 1; height: 1; depth: 1"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |width|Width (in meters) of the sides on the X axis.|1|
       * |height|Height (in meters) of the sides on the Y axis.|1|
       * |depth|Depth (in meters) of the sides on the Z axis.|1|
       * |segmentsDepth|Number of segmented faces on the z-axis|1|
       * |segmentsHeight|Number of segmented faces on the y-axis|1|
       * |segmentsWidth|Number of segmented faces on the x-axis|1|
       * 
       * ## Circle
       * The circle geometry creates flat two-dimensional circles. These can be complete circles or partial circles (like Pac-Man). Note that because circles are flat, A-Frame will only render a single face of the circle if we don’t specify side: double on the material component.
       * 
       * ```html
       * <a-entity geometry="primitive: circle; radius: 1" material="side: double"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius (in meters) of the circle.|1|
       * |segments|Number of triangles to construct the circle, like pizza slices. A higher number of segments means the circle will be more round.|32|
       * |thetaStart|Start angle for first segment. Can be used to define a partial circle.|0|
       * |thetaLength|The central angle (in degrees). Defaults to 360, which makes for a complete circle.|360|
       * 
       * ## Cone
       * The cone geometry is a cylinder geometry that have different top and bottom radii.
       * 
       * ```html
       * <a-entity geometry="primitive: cone; radiusBottom: 1; radiusTop: 0.1"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |height|Height of the cone.|2|
       * |openEnded|Whether the ends of the cone are open (true) or capped (false).|false|
       * |radiusBottom|Radius of the bottom end of the cone.|1|
       * |radiusTop|Radius of the top end of the cone.|1|
       * |segmentsRadial|Number of segmented faces around the circumference of the cone.|36|
       * |segmentsHeight|Number of rows of faces along the height of the cone.|18|
       * |thetaStart|Starting angle in degrees.|0|
       * |thetaLength|Central angle in degrees.|360|
       * 
       * ## Cylinder
       * The cylinder geometry creates cylinders in the traditional sense like a Coca-Cola™ can, but it can also define shapes such as tubes and curved surfaces.
       * 
       * We can create a basic cylinder using height and radius:
       * 
       * ```html
       * <a-entity geometry="primitive: cylinder; height: 3; radius: 2"></a-entity>
       * ```
       * 
       * We can create a tube by making the cylinder open-ended, which removes the top and bottom surfaces of the cylinder such that the inside is visible. Then we need a double-sided material to render properly:
       * 
       * ```html
       * <!-- Tube -->
       * <a-entity geometry="primitive: cylinder; openEnded: true" material="side: double"></a-entity>
       * ```
       * 
       * We can create a curved surfaces by specifying the arc via thetaLength such that the cylinder doesn’t curve all the way around, making the cylinder open-ended, and then making the material double-sided:
       * 
       * ```html
       * <!-- Curved surface -->
       * <a-entity geometry="primitive: cylinder; openEnded: true; thetaLength: 180"
       *           material="side: double"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius of the cylinder.|1|
       * |height|Height of the cylinder.|2|
       * |segmentsRadial|Number of segmented faces around the circumference of the cylinder.|36|
       * |segmentsHeight|Number of rows of faces along the height of the cylinder.|18|
       * |openEnded|Whether the ends of the cylinder are open (true) or capped (false).|false|
       * |thetaStart|Starting angle in degrees.|0|
       * |thetaLength|Central angle in degrees.|360|
       * 
       * ## Dodecahedron
       * The dodecahedron geometry creates a polygon with twelve equally-sized faces.
       * 
       * ```html
       * <a-entity geometry="primitive: dodecahedron; radius: 2"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius (in meters) of the dodecahedron.|1|
       * 
       * ## Octahedron
       * The octahedron geometry creates a polygon with eight equilateral triangular faces.
       * 
       * ```html
       * <a-entity geometry="primitive: octahedron"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius (in meters) of the octahedron.|1|
       * 
       * ## Plane
       * 
       * The plane geometry creates a flat surface. Because planes are flat, A-Frame will render only a single face of the plane unless we specify side: double on the material component.
       * 
       * ```html
       * <a-entity geometry="primitive: plane; height: 10; width: 10" material="side: double"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |width|Width along the X axis.|1|
       * |height|Height along the Y axis.|1|
       * |segmentsHeight|Number of segmented faces on the y-axis|1|
       * |segmentsWidth|Number of segmented faces on the x-axis|1|
       * 
       * ## Ring
       * The ring geometry creates a flat ring, like a CD. Because the ring is flat, A-Frame will only render a single face of the ring unless we specify side: double the material component.
       * 
       * ```html
       * <a-entity geometry="primitive: ring; radiusInner: 0.5; radiusOuter: 1"
       *           material="side: double"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radiusInner|Radius of the inner hole of the ring.|1|
       * |radiusOuter|Radius of the outer edge of the ring.|1|
       * |segmentsTheta|Number of segments. A higher number means the ring will be more round.|32|
       * |segmentsPhi|Number of triangles within each face defined by segmentsTheta.|8|
       * |thetaStart|Starting angle in degrees.|0|
       * |thetaLength|Central angle in degrees.|360|
       * 
       * ## Sphere
       * The sphere geometry creates spheres (e.g., balls). We can create a basic sphere:
       * 
       * ```html
       * <a-entity geometry="primitive: sphere; radius: 2"></a-entity>
       * ```
       * 
       * We can create polyhedrons and abstract shapes by specifying the number of horizontal angles and faces:
       * 
       * ```html
       * <a-entity geometry="primitive: sphere; segmentsWidth: 2; segmentsHeight: 8"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius of the sphere.|1|
       * |segmentsWidth|Number of horizontal segments.|18|
       * |segmentsHeight|Number of vertical segments.|36|
       * |phiStart|Horizontal starting angle.|0|
       * |phiLength|Horizontal sweep angle size.|360|
       * |thetaStart|Vertical starting angle.|0|
       * |thetaLength|Vertical sweep angle size.|360|
       * 
       * ## Tetrahedron
       * The tetrahedron geometry creates a polygon with four triangular faces.
       * 
       * ```html
       * <a-entity geometry="primitive: tetrahedron; radius: 2"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius (in meters) of the tetrahedron.|1|
       * 
       * ## Torus
       * The torus geometry creates a donut or curved tube shape:
       * 
       * ```html
       * <!-- Half donut -->
       * <a-entity geometry="primitive: torus; radius: 2; radiusTubular: 0.5; arc: 180"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius of the outer edge of the torus.|1|
       * |radiusTubular|Radius of the tube.|0.2|
       * |segmentsRadial|Number of segments along the circumference of the tube ends. A higher number means the tube will be more round.|36|
       * |segmentsTubular|Number of segments along the circumference of the tube face. A higher number means the tube will be more round.|32|
       * |arc|Central angle.|360|
       * 
       * ## TorusKnot
       * The torus knot geometry creates a pretzel shape. A pair of coprime integers, p and q, defines the particular shape of the pretzel. If p and q are not coprime the result will be a torus link:
       * 
       * ```html
       * <a-entity geometry="primitive: torusKnot; p: 3; q:7"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |radius|Radius that contains the torus knot.|1|
       * |radiusTubular|Radius of the tubes of the torus knot.|0.2|
       * |segmentsRadial|Number of segments along the circumference of the tube ends. A higher number means the tube will be more round.|36|
       * |segmentsTubular|Number of segments along the circumference of the tube face. A higher number means the tube will be more round.|32|
       * |p|How many times the geometry winds around its axis of rotational symmetry.|2|
       * |q|How many times the geometry winds around a circle in the interior of the torus.|3|
       * 
       * ## Triangle
       * 
       * The triangle geometry creates a flat two-dimensional triangle. Because triangles are flat, A-Frame will render only a single face, which is the one with vertexA, vertexB, and vertexC appear in counterclockwise order on the screen, unless we specify side: double on the material component.
       * 
       * ```html
       * <a-entity geometry="primitive: triangle" material="side: double"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |vertexA|Coordinates of one of the three vertices|0 0.5 0|
       * |vertexB|Coordinates of one of the three vertices|-0.5 -0.5 0|
       * |vertexC|Coordinates of one of the three vertices|0.5 -0.5 0|
       */
      geometry?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/gltf-model.html
       * 
       * glTF (GL Transmission Format) is an open project by Khronos providing a common, extensible format for 3D assets that is both efficient and highly interoperable with modern web technologies.
       * 
       * The gltf-model component loads a 3D model using a glTF (.gltf or .glb) file.
       * 
       * Note that glTF is a fairly new specification and adoption is still growing. Work on the three.js glTF loader and converters are still active.
       * 
       * > NOTE: A-Frame supports glTF 2.0. For models using older versions of the glTF format, use gltf-model-legacy from donmccurdy/aframe-extras.
       * 
       * @example
       * Load a glTF model by pointing to an asset that specifies the src for a glTF file.
       * 
       * ```html
       * <a-scene>
       *   <a-assets>
       *     <a-asset-item id="tree" src="/path/to/tree.gltf"></a-asset-item>
       *   </a-assets>
       * 
       *   <a-entity gltf-model="#tree"></a-entity>
       * </a-scene>
       * ```
       * 
       * @values
       * |Type|Description|
       * |:-|:-|
       * |selector|Selector to an <a-asset-item>|
       * |string|url()-enclosed path to a glTF file|
       */
      'gltf-model'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/hand-controls.html
       * 
       * The hand-controls component provides tracked hands (using a prescribed model) with animated gestures. hand-controls wraps the vive-controls and oculus-touch-controls which in turn wrap the tracked-controls component. By specifying just hand-controls, we have something that works well with both Vive and Rift. The component gives extra events and handles hand animations and poses.
       * 
       * @example
       * ```html
       * <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
       * <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |color|Color of hand material.|white|
       * |hand|Associated controller. Can be left or right.|left|
       * |handModelStyle|Style of the hand 3D model loaded. Can be lowPoly, highPoly or toon.|lowPoly|
       */
      'hand-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/hand-tracking-controls.html
       * 
       * Use hand-tracking-controls to integrate hand tracked input in your application. The component provides a visual representation of the hand and basic gesture recognition. It can be used along tracked controllers (e.g: oculus-touch-controls) for applications requiring multiple input methods. Component is only active when the browser and underlying system starts tracking the user’s hands.
       * 
       * @example
       * ```html
       * <a-entity id="leftHand" hand-tracking-controls="hand: left;"></a-entity>
       * <a-entity id="rightHand" hand-tracking-controls="hand: right;"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |hand|The hand that will be tracked (i.e., right, left).|left|
       * |modelColor|Color of hand material.|white|
       * |modelStyle|Mesh representing the hand or dots matching the joints|mesh|
       */
      'hand-tracking-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/hide-on-enter-ar.html
       * 
       * When the user enters AR this component will hide the component by toggling it’s visible state.
       * 
       * This is used to hide background elements such as floors, sky boxes, environments and other large elements. Letting the user comfortably fit the remaining visible elements into their physical space.
       * 
       * You can also use this to disable scene lighting if you will be using lighting estimation instead.
       * 
       * @example
       * ```html
       * <a-light hide-on-enter-ar></a-light>
       * <a-sky hide-on-enter-ar color="skyblue"></a-sky>
       * ```
       */
      'hide-on-enter-ar'?: boolean;

      /**
       * @see https://aframe.io/docs/1.3.0/components/laser-controls.html
       * 
       * ![](https://user-images.githubusercontent.com/674727/26897482-91947a94-4b7d-11e7-9cb5-5c47f50938e4.gif)
       * 
       * The laser-controls component provides tracked controls with a laser or ray cursor shooting out to be used for input and interactions. DoF stands for degrees of freedom. Because they only require rotation and some form of input, laser-based interactions scale well across 0 DoF (gaze-based, Cardboard), 3 DoF (Daydream, GearVR with controllers), and 6 DoF (Vive, Oculus Touch). If desired, we can get a consistent form of interaction that works across all VR platforms with a single line of HTML.
       * 
       * laser-controls is a higher-order component, meaning the component wraps and configures other components, rather than implementing any logic itself. Under the hood, laser-controls sets all of the tracked controller components:
       * 
       * - vive-controls
       * - oculus-touch-controls
       * - daydream-controls
       * - gearvr-controls
       * - windows-motion-controls
       * 
       * These controller components get activated if its respective controller is connected and detected via the Gamepad API. Then the model of the actual controller is used. laser-controls then configures the cursor component for listen to the appropriate events and configures the raycaster component to draw the laser.
       * 
       * When the laser intersects with an entity, the length of the line gets truncated to the distance to the intersection point.
       * 
       * @example
       * ```html
       * <a-entity laser-controls="hand: left"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|
       * |:-|:-|
       * |hand|left or right.|
       * |model|Whether the default model for the controller is loaded.|
       * |defaultModelColor|Color for the default controller model.|
       * 
       * # Customizing the Raycaster
       * Configure the [raycaster properties](https://aframe.io/docs/1.3.0/components/raycaster.html).
       * 
       * For example:
       * 
       * ```html
       * <a-entity laser-controls raycaster="objects: .links; far: 5"></a-entity>
       * ```
       * 
       * # Customizing the Line
       * See [Raycaster: Customizing the Line.](https://aframe.io/docs/1.3.0/components/raycaster.html#customizing-the-line)
       * 
       * For example:
       * 
       * ```html
       * <a-entity laser-controls raycaster="lineColor: red; lineOpacity: 0.5"></a-entity>
       * ```
       */
      'laser-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/layer.html
       * 
       * The layer component renders images, videos or cubemaps into a WebXR compositor layer on supported browsers.
       * 
       * The benefits of layers are:
       * 
       * - Performance and judder: Once the layer is submitted, the compositor is in charge of render it at a fixed refresh rate (72Hz, 90Hz… depending on device). Even if the application cannot keep up with the compositor refresh rate the layer won’t drop any frames resulting in a smoother experience.
       * - Visual fidelity: The images in a layer will be sampled only once by the compositor. Regular WebGL content is sampled twice: Once one rendering to the eye buffer and a second time when copied to the compositor. This results in a loss of details.
       * - Battery life: No double sampling results in less memory copies reducing operations and battery consumption.
       * - Latency: Headset pose sampling for layers takes place at the end of the frame using the most recent HMD pose. This paired with reprojection techniques reduce the effective latency.
       * 
       * @example
       * ```html
       * <a-scene>
       *   <a-assets>
       *     <img id="comicbook" crossOrigin="anonymous" src="/path/to/comicbook.png">
       *   </a-assets>
       *   <a-entity layer="type: quad; src: #comicbook" position="0 1.8 -1.5"></a-entity>
       * </a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|
       * |:-|:-|
       * |type|quad, monocubemap or stereocubemap|
       * |src|Image or video loaded in the layer.|
       * |rotateCubemap|Rotates the cubemap 180 degrees in the y-axis.|
       */
      layer?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/light.html
       * 
       * The light component defines the entity as a source of light. Light affects all materials that have not specified a flat shading model with shader: flat. Note that lights are computationally expensive we should limit number of lights in a scene.
       * 
       * ```html
       * <a-entity light="color: #AFA; intensity: 1.5" position="-1 1 0"></a-entity>
       * ```
       * 
       * By default, A-Frame scenes inject default lighting, an ambient light and a directional light. These default lights are visible in the DOM with the data-aframe-default-light attribute. Whenever we add any lights, A-Frame removes the default lights from the scene.
       * 
       * ```html
       * <!-- Default lighting injected by A-Frame. -->
       * <a-entity light="type: ambient; color: #BBB"></a-entity>
       * <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity>
       * ```
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
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |type|One of ambient, directional, hemisphere, point, spot, probe.|directional|
       * |color|Light color.|#fff|
       * |intensity|Light strength.|1.0|
       */
      light?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/line.html
       * 
       * The line component draws a line given a start coordinate and end coordinate using THREE.Line.
       * 
       * The raycaster component uses the line component for its showLine property, which is then used by the laser-controls component.
       * 
       * @example
       * ```html
       * <a-entity line="start: 0 1 0; end: 2 0 -5; color: red"
       *           line__2="start: -2 4 5; end: 0 4 -3; color: green"></a-entity>
       * ```
       * 
       * Note an entity can have multiple lines. The line mesh is set as line or line__<ID> in the entity’s object3DMap:
       * 
       * ```js
       * console.log(el.getObject3D('line'));
       * console.log(el.getObject3D('line__2'));
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |start|Start point coordinate.|0 0 0|
       * |end|End coordinate.|0 0 0|
       * |color|Line color.|#74BEC1|
       * |opacity|Line opacity.|1|
       * |visible|Whether the material visible.|true|
       */
      line?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/link.html
       * 
       * ![](https://user-images.githubusercontent.com/674727/27721720-19388346-5d17-11e7-912b-499886be0a8d.gif)
       * 
       * The link component connects between experiences and allows for traversing between VR web pages. When activated via an event, the link component sends the user to a different page, just like a normal web page redirect. To maintain VR across pages, the following conditions must apply:
       * 
       * - Your browser implements the WebXR [in-VR navigation proposal](https://github.com/immersive-web/navigation#api-proposal). Notice that is not yet part of the standard. Support is experimental, varies accross browsers and it might require enabling manually in settings.
       * - The destination Web page listens to the window [sessiongranted] event and enters VR. A-Frame experiences behave this way by default.
       * - At the moment, The Oculus Browser on Quest is the only browser shipping the [in-VR navigation proposal](https://github.com/immersive-web/navigation#api-proposal).
       * 
       * # Link UX
       * 
       * A link in VR can be anything such as grabbing onto an object, placing something on our head, clicking something, even eating something! We provide a default implementation of links as a portal or window, using a 360° image thumbnail to preview the destination.
       * 
       * The UX of link traversal will continue to refine as we iterate and experiment, both in content and from the browser.
       * 
       * ## Controls
       * 
       * The default UX of the link component as a portal can be interacted with using a cursor or controllers. This is not provided directly in the A-Frame core, but there is a link-controls component in the A-Frame examples. This component shows tooltips and provides button mappings for peeking and entering portals.
       * 
       * @example
       * ```html
       * <a-scene>
       *   <a-assets>
       *     <img id="homeThumbnail" src="home.jpg">
       *   </a-assets>
       * 
       *   <a-entity link="href: index.html; title: My Homepage; image: #homeThumbnail"></a-entity>
       * </a-scene>
       * ```
       * 
       * We also provide a link primitive with a different syntax:
       * 
       * ```html
       * <a-link href="index.html" title="My Homepage" image="#homeThumbnail"></a-link>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |backgroundColor|Inner (background) color of the portal.|red|
       * |borderColor|Border color of the portal.|white|
       * |highlighted|Boolean to toggle link highlight color.|false|
       * |highlightedColor|Border color when highlighted.|‘#24CAFF’|
       * |href|Destination URL where the link points to.|‘’|
       * |image|360° image used as scene preview in the portal. Can be a selector to an <img> element or a URL.|‘’|
       * |on|Event to listen to that triggers link traversal.|‘click’|
       * |peekMode|Whether the 360° image is fully expanded for preview.|false|
       * |title|Text displayed on the link. The href or page URL is used if not defined.|‘’|
       * |titleColor|Color of the text displayed on the link.|white|
       * |visualAspectEnabled|Whether to enable the default visual appearance of a portal. Set to false if we want to implement our own pattern or form of link traversal.|true|
       */
      link?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/look-controls.html
       * 
       * The look-controls component:
       * 
       * - Rotates the entity when we rotate a VR head-mounted display (HMD).
       * - Rotates the entity when we move the mouse.
       * - Rotates the entity when we touch-drag the touchscreen.
       * 
       * @example
       * The look-controls component is usually used alongside the [camera component](https://aframe.io/docs/1.3.0/components/camera.html).
       * 
       * ```html
       * <a-entity camera look-controls position="0 1.6 0"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |enabled|Whether look controls are enabled.|true|
       * |reverseMouseDrag|Whether to reverse mouse drag.|false|
       * |reverseTouchDrag|Whether to reverse touch drag.|false|
       * |touchEnabled|Whether to use touch controls in magic window mode.|true|
       * |mouseEnabled|Whether to use mouse to move the camera in 2D mode.|true|
       * |pointerLockEnabled|Whether to hide the cursor using the Pointer Lock API.|false|
       * |magicWindowTrackingEnabled|Whether gyroscope camera tracking is enabled on mobile devices.|true|
       * 
       * # Customizing look-controls
       * 
       * While A-Frame’s look-controls component is primarily meant for VR with sensible defaults to work across platforms, many developers want to use A-Frame for non-VR use cases (e.g., desktop, touchscreen). We might want to modify the mouse and touch behaviors.
       * 
       * The best way to configure the behavior is to copy and customize the current look-controls component code. This allows us to configure the controls how we want (e.g., limit the pitch on touch, reverse one axis). If we were to include every possible configuration into the core component, we would be left maintaining a wide array of flags.
       * 
       * The component lives within a Browserify/Webpack context so you’ll need to replace the require statements with A-Frame globals (e.g., AFRAME.registerComponent, window.THREE), and get rid of the module.exports.
       * 
       * # Caveats
       * 
       * If you want to create your own component for look controls, you will have to copy and paste the HMD-tracking bits into your component. In the future, we may have a system for people to more easily create their controls.
       */
      'look-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/magicleap-controls.html
       * 
       * The magicleap-controls component interfaces with the Magic Leap controller. It wraps the tracked-controls component while adding button mappings, events, and Magic Leap controller model/
       * 
       * @example
       * ```html
       * <!-- Match Magic Leap controller if present, regardless of hand. -->
       * <a-entity magicleap-controls></a-entity>
       * 
       * <!-- Match Magic Leap controller if present and for specified hand. -->
       * <a-entity magicleap-controls="hand: left"></a-entity>
       * <a-entity magicleap-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |hand|The hand that will be tracked (e.g., right, left).||
       * |model|Whether the Magic Leap controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'magicleap-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/material.html
       * 
       * The material component gives appearance to an entity. We can define properties such as color, opacity, or texture. This is often paired with the geometry component which provides shape.
       * 
       * We can register custom materials to extend the material component to provide a wide range of visual effects.
       * 
       * @example
       * Defining a red material using the default standard material:
       * ```html
       * <a-entity geometry="primitive: box" material="color: red"></a-entity>
       * ```
       * 
       * Here is an example of using a different material:
       * ```html
       * <a-entity geometry="primitive: box" material="shader: flat; color: red"></a-entity>
       * ```
       * 
       * Here is an example of using an example custom material:
       * ```html
       * <a-entity geometry="primitive: plane"
       *           material="shader: ocean; color: blue; wave-height: 10"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |alphaTest|Alpha test threshold for transparency.|0|
       * |depthTest|Whether depth testing is enabled when rendering the material.|true|
       * |flatShading|Use THREE.FlatShading rather than THREE.StandardShading.|false|
       * |npot|Use settings for non-power-of-two (NPOT) texture.|false|
       * |offset|Texture offset to be used.|{x: 0, y: 0}|
       * |opacity|Extent of transparency. If the transparent property is not true, then the material will remain opaque and opacity will only affect color.|1.0|
       * |repeat|Texture repeat to be used.|{x: 1, y: 1}|
       * |shader|Which material to use. Defaults to the standard material. Can be set to the flat material or to a registered custom shader material.|standard|
       * |side|Which sides of the mesh to render. Can be one of front, back, or double.|front|
       * |transparent|Whether material is transparent. Transparent entities are rendered after non-transparent entities.|false|
       * |vertexColors|Whether to use vertex or face colors to shade the material. Can be one of none, vertex, or face.|none|
       * |visible|Whether material is visible. Raycasters will ignore invisible materials.|true|
       * |blending|The blending mode for the material’s RGB and Alpha sent to the WebGLRenderer. Can be one of none, normal, additive, subtractive or multiply.|normal|
       * |dithering|Whether material is dithered with noise. Removes banding from gradients like ones produced by lighting.|true|
       * 
       * # Built-in Materials
       * 
       * A-Frame ships with a couple of built-in materials.
       * 
       * ## standard
       * 
       * The standard material is the default material. It uses the physically-based THREE.MeshStandardMaterial.
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |ambientOcclusionMap|Ambient occlusion map. Used to add shadows to the mesh. Can either be a selector to an <img>, or an inline URL. Requires 2nd set of UVs (see below).|None|
       * |ambientOcclusionMapIntensity|The intensity of the ambient occlusion map, a number between 0 and 1.|1|
       * |ambientOcclusionTextureRepeat|How many times the ambient occlusion texture repeats in the X and Y direction.|1 1|
       * |ambientOcclusionTextureOffset|How the ambient occlusion texture is offset in the x y direction.|0 0|
       * |color|Base diffuse color.|#fff|
       * |displacementMap|Displacement map. Used to distort a mesh. Can either be a selector to an <img>, or an inline URL.|None|
       * |displacementScale|The intensity of the displacement map effect|1|
       * |displacementBias|The zero point of the displacement map.|0.5|
       * |displacementTextureRepeat|How many times the displacement texture repeats in the X and Y direction.|1 1|
       * |displacementTextureOffset|How the displacement texture is offset in the x y direction.|0 0|
       * |emissive|The color of the emissive lighting component. Used to make objects produce light even without other lighting in the scene.|#000|
       * |emissiveIntensity|Intensity of the emissive lighting component.|1|
       * |height|Height of video (in pixels), if defining a video texture.|360|
       * |envMap|Environment cubemap texture for reflections. Can be a selector to  or a comma-separated list of URLs.|None|
       * |fog|Whether or not material is affected by fog.|true|
       * |metalness|How metallic the material is from 0 to 1.|0|
       * |normalMap|Normal map. Used to add the illusion of complex detail. Can either be a selector to an <img>, or an inline URL.|None|
       * |normalScale|Scale of the effect of the normal map in the X and Y directions.|1 1|
       * |normalTextureRepeat|How many times the normal texture repeats in the X and Y direction.|1 1|
       * |normalTextureOffset|How the normal texture is offset in the x y direction.|0 0|
       * |repeat|How many times a texture (defined by src) repeats in the X and Y direction.|1 1|
       * |roughness|How rough the material is from 0 to 1. A rougher material will scatter reflected light in more directions than a smooth material.|0.5|
       * |sphericalEnvMap|Environment spherical texture for reflections. Can either be a selector to an <img>, or an inline URL.|None|
       * |width|Width of video (in pixels), if defining a video texture.|640|
       * |wireframe|Whether to render just the geometry edges.|false|
       * |wireframeLinewidth|Width in px of the rendered line.|2|
       * |src|Image or video texture map. Can either be a selector to an <img> or <video>, or an inline URL.|None|
       * 
       * ### Phong-Based Shading
       * 
       * Phong shading is an inexpensive shader model which whilst less realistic than the standard material is better than flat shading.
       * 
       * To use it set the shader to phong in the material:
       * ```html
       * <a-torus-knot position="0 3 0" material="shader:phong; reflectivity: 0.9; shininess: 30;"
       *   geometry="radius: 0.45; radiusTubular: 0.09">
       * </a-torus-knot>
       * ```
       * 
       * It has the following properties you can use:
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |specular|This defines how shiny the material is and the color of its shine.|#111111|
       * |shininess|How shiny the specular highlight is; a higher value gives a sharper highlight|30|
       * |transparent|Whether the material is transparent|false|
       * |combine|How the environment map mixes with the material. “mix”, “add” or “multiply”|“mix”|
       * |reflectivity|How much the environment map affects the surface|0.9|
       * |refract|Whether the defined envMap should refract|false|
       * |refractionRatio|1/refractive index of the material|0.98|
       * 
       * ## flat
       * 
       * The flat material uses the THREE.MeshBasicMaterial. Flat materials are not affected by the scene’s lighting conditions. This is useful for things such as images or videos. Set shader to flat:
       * 
       * ```html
       * <a-entity geometry="primitive: plane" material="shader: flat; src: #cat-image"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |color|Base diffuse color.|#fff|
       * |fog|Whether or not material is affected by fog.|true|
       * |height|Height of video (in pixels), if defining a video texture.|360|
       * |repeat|How many times a texture (defined by src) repeats in the X and Y direction.|1 1|
       * |src|Image or video texture map. Can either be a selector to an <img> or <video>, or an inline URL.|None|
       * |width|Width of video (in pixels), if defining a video texture.|640|
       * |wireframe|Whether to render just the geometry edges.|false|
       * |wireframeLinewidth|Width in px of the rendered line.|2|
       */
      material?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/obj-model.html
       * 
       * The obj-model component loads a 3D model and material using a Wavefront (.OBJ) file and a .MTL file.
       * 
       * @example
       * We can load an .OBJ model by pointing to assets that specify the path to an .OBJ and .MTL file.
       * ```html
       * <a-scene>
       *   <a-assets>
       *     <a-asset-item id="tree-obj" src="/path/to/tree.obj"></a-asset-item>
       *     <a-asset-item id="tree-mtl" src="/path/to/tree.mtl"></a-asset-item>
       *   </a-assets>
       * 
       *   <a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl"></a-entity>
       * </a-scene>
       * ```
       * 
       * @properties
       * |Property|Description|
       * |:-|:-|
       * |obj|Selector to an <a-asset-item> pointing to a .OBJ file or an inline path to a .OBJ file.|
       * |mtl|Selector to an <a-asset-item> pointing to a .MTL file or an inline path to a .MTL file. Optional if you wish to use the material component instead.|
       */
      'obj-model'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/oculus-go-controls.html
       * 
       * The oculus-go-controls component interfaces with the Oculus Go controllers. It wraps the tracked-controls component while adding button mappings, events, and an Oculus Go controller model that highlights the touched and/or pressed buttons (trackpad, trigger).
       * 
       * @example
       * ```html
       * <!-- Match Oculus Go controller if present, regardless of hand. -->
       * <a-entity oculus-go-controls></a-entity>
       * 
       * <!-- Match Oculus Go controller if present and for specified hand. -->
       * <a-entity oculus-go-controls="hand: left"></a-entity>
       * <a-entity oculus-go-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |armModel|Whether the arm model is used for positional data.|true|
       * |buttonColor|Button colors when not pressed.|#000000|
       * |buttonTouchedColor|Button colors when touched.|#777777|
       * |buttonHighlightColor|Button colors when pressed and active.|#FFFFFF|
       * |hand|The hand that will be tracked (e.g., right, left).||
       * |model|Whether the Oculus Go controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'oculus-go-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/oculus-touch-controls.html
       * 
       * The oculus-touch-controls component interfaces with the Oculus Touch controllers (Rift, Rift S, Oculus Quest 1 and 2). It wraps the tracked-controls component while adding button mappings, events, and a Touch controller model.
       * 
       * @example
       * ```html
       * <a-entity oculus-touch-controls="hand: left"></a-entity>
       * <a-entity oculus-touch-controls="hand: right"></a-entity>
       * ```
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |hand|The hand that will be tracked (i.e., right, left).|left|
       * |model|Whether the Touch controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'oculus-touch-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/position.html
       * 
       * The position component places entities at certain spots in 3D space. Position takes a coordinate value as three space-delimited numbers.
       * 
       * All entities inherently have the position component.
       * 
       * @example
       * ```html
       * <a-entity position="0 1 -1"></a-entity>
       * ```
       * 
       * @properties
       * A-Frame uses a right-handed coordinate system where the negative Z axis extends into the screen. The table below assumes looking down the negative Z axis from the origin.
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |x|Negative X axis extends left. Positive X Axis extends right.|0|
       * |y|Negative Y axis extends down. Positive Y Axis extends up.|0|
       * |z|Negative Z axis extends in. Positive Z Axis extends out.|0|
       */
      position?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/raycaster.html
       * 
       * The raycaster component provides line-based intersection testing with a raycaster. Raycasting is the method of extending a line from an origin towards a direction, and checking whether that line intersects with other entities.
       * 
       * The raycaster component uses the three.js raycaster. The raycaster checks for intersections at a certain interval against a list of objects, and will emit events on the entity when it detects intersections or clearing of intersections (i.e., when the raycaster is no longer intersecting an entity).
       * 
       * We prescribe that the set of objects that the raycaster tests for intersection is explicitly defined via the objects selector property described below. Raycasting is an expensive operation, and we should raycast against only targets that need to be interactable at any given time.
       * 
       * The cursor component and laser-controls components both build on top of the raycaster component.
       * 
       * @example
       * ```html
       * <a-entity id="player" collider-check>
       *   <a-entity raycaster="objects: .collidable" position="0 -0.9 0" rotation="90 0 0"></a-entity>
       * </a-entity>
       * <a-entity class="collidable" geometry="primitive: box" position="1 0 0"></a-entity>
       * ```
       * 
       * Whenever an entity adds or removes the class collidable, the raycaster will refresh its list of objects it is raycasting against.
       * 
       * ```js
       * AFRAME.registerComponent('collider-check', {
       *   dependencies: ['raycaster'],
       * 
       *   init: function () {
       *     this.el.addEventListener('raycaster-intersection', function () {
       *       console.log('Player hit something!');
       *     });
       *   }
       * });
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |autoRefresh|Whether to automatically refresh raycaster’s list of objects to test for intersection using mutation observers to detect added or removed entities and components.|
       * |direction|Vector3 coordinate of which direction the ray should point from relative to the entity’s origin.|
       * |enabled|Whether raycaster is actively checking for intersections.|
       * |far|Maximum distance under which resulting entities are returned. Cannot be lower than near.|
       * |interval|Number of milliseconds to wait in between each intersection test. Lower number is better for faster updates. Higher number is better for performance. Intersection tests are performed at most once per frame.|
       * |lineColor|Raycaster line color if showLine is enabled.|
       * |lineOpacity|Raycaster line opacity if showLine is enabled.|
       * |near|Minimum distance over which resulting entities are returned. Cannot be lower than 0.|
       * |objects|Query selector to pick which objects to test for intersection. If not specified, all entities will be tested. Note that only objects attached via .setObject3D and their recursive children will be tested.|
       * |origin|Vector3 coordinate of where the ray should originate from relative to the entity’s origin.|
       * |showLine|Whether or not to display the raycaster visually with the line component.|
       * |useWorldCoordinates|Whether the raycaster origin and direction properties are specified in world coordinates.|
       */
      raycaster?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/rotation.html
       * 
       * The rotation component defines the orientation of an entity in degrees. It takes the pitch (x), yaw (y), and roll (z) as three space-delimited numbers indicating degrees of rotation.
       * 
       * All entities inherently have the rotation component.
       * 
       * @example
       * ```html
       * <a-entity rotation="45 90 180"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |x|Pitch, rotation about the X-axis.|0|
       * |y|Yaw, rotation about the Y-axis.|0|
       * |z|Roll, rotation about the Z-axis.|0|
       */
      rotation?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/scale.html
       * The scale component defines a shrinking, stretching, or skewing transformation of an entity. It takes three scaling factors for the X, Y, and Z axes.
       * 
       * All entities inherently have the scale component.
       * 
       * @example
       * The example below shrinks the entity in half along the X direction, maintains the same scale factor along the Y direction, and stretches the entity by two-fold along the Z-direction:
       * ```html
       * <a-entity scale="0.5 1 2"></a-entity>
       * ```
       * 
       * @properties
       * If we set any of the scaling factors to 0, then A-Frame will assign instead a negligible value.
       * 
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |x|Scaling factor in the X direction.|1|
       * |y|Scaling factor in the Y direction.|1|
       * |z|Scaling factor in the Z direction.|1|
       */
      scale?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/shadow.html
       * 
       * The shadow component enables shadows for an entity and its children. Receiving shadows from surrounding objects and casting shadows onto other objects may (and often should) be enabled independently.
       * 
       * Without this component, an entity will not cast nor receive shadows.
       * 
       * @example
       * The example below configures a tree model to cast shadows onto the surrounding scene but not receive shadows itself.
       * 
       * ```html
       * <a-entity light="type:directional; castShadow:true;" position="1 1 1"></a-entity>
       * <a-gltf-model src="tree.gltf" shadow="receive: false"></a-gltf-model>
       * ```
       * 
       * **IMPORTANT**: Adding the shadow component alone is not enough to display shadows in your scene. We must have at least one light with castShadow: true enabled. Additionally, the light’s shadow camera (used for depth projection) usually must be configured correctly. Refer to the light component for more information.
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |cast|Whether the entity casts shadows onto the surrounding scene.|true|
       * |receive|Whether the entity receives shadows from the surrounding scene.|true|
       */
      shadow?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/sound.html
       * 
       * The sound component defines the entity as a source of sound or audio. The sound component is positional and is thus affected by the components-position.
       * 
       * > **NOTE**: Playing sound on iOS — in any browser — requires a physical user interaction. This is a browser limitation, and internal A-Frame events (like fusing cursors) do not count as interaction. Ways to deal with this include using a Begin Experience button to start ambient music, or creating audio sprites with libraries like Howler.js.
       * 
       * @example
       * ```html
       * <a-entity id="river" geometry="primitive: plane" material="color: blue"
       *           position="-10 0 0" sound="src: url(river.mp3); autoplay: true"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |autoplay|Whether to automatically play sound once set.|false|
       * |distanceModel|linear, inverse, or exponential|inverse|
       * |loop|Whether to loop the sound once the sound finishes playing.|false|
       * |maxDistance|Maximum distance between the audio source and the listener, after which the volume is not reduced any further.|10000|
       * |on|An event for the entity to listen to before playing sound.|null|
       * |poolSize|Numbers of simultaneous instances of this sound that can be playing at the same time|1|
       * |positional|Whether or not the audio is positional (movable).|true|
       * |refDistance|Reference distance for reducing volume as the audio source moves further from the listener.|1|
       * |rolloffFactor|Describes how quickly the volume is reduced as the source moves away from the listener.|1|
       * |src|Selector to an asset <audio>or url()-enclosed path to sound file.|null|
       * |volume|How loud to play the sound.|1|
       */
      sound?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/text.html
       * 
       * The text component renders signed distance field (SDF) font text.
       * 
       * ![Example Image](https://cloud.githubusercontent.com/assets/674727/22357731/f704544a-e3ee-11e6-8e6e-96c3c4e84958.png)
       * 
       * # Introduction
       * 
       * Note that rendering text in 3D is hard. In 2D web development, text is the most basic thing because the browser’s renderer and layout engine handle everything. In a 3D context, we don’t have those luxuries. There are several other different ways to render text in A-Frame including:
       * 
       * - 3D Text Geometry
       * - HTML Materials (DOM-to-Canvas-to-Texture)
       * - Image Textures
       * 
       * As a default, we’ve selected SDF-based text to be included as a core component due to its relatively good performance and clarity. This component uses mattdesl’s three-bmfont-text library. The standard text component has a long lineage, starting out as a community component and was forked and improved several times before landing into A-Frame!
       * 
       * @example
       * Here’s a basic example of text defining just the content with not much other configuration.
       * 
       * ```html
       * <a-entity text="value: Hello World;"></a-entity>
       * ```
       * 
       * See more examples to see configuration of alignments, anchors, baselines, scaling, and auto-sizing.
       * 
       * - [Text Example](https://a-frobot.github.io/aframe/examples/test/text/index.html) ([code](https://github.com/aframevr/aframe/blob/master/examples/test/text/index.html))
       * - [Text Anchors](https://a-frobot.github.io/aframe/examples/test/text/anchors.html) ([code](https://github.com/aframevr/aframe/blob/master/examples/test/text/anchors.html))
       * - [Text Scenarios](https://a-frobot.github.io/aframe/examples/test/text/scenarios.html) ([code](https://github.com/aframevr/aframe/blob/master/examples/test/text/scenarios.html))
       * - [Text Sizes](https://a-frobot.github.io/aframe/examples/test/text/sizes.html) ([code](https://github.com/aframevr/aframe/blob/master/examples/test/text/sizes.html))
       * 
       * Open any of these example scenes, hit <ctrl> + <alt> + i to open the Inspector, and play with all the possible values to see the effects instantly!
       * 
       * ![Inspecting Text](https://cloud.githubusercontent.com/assets/674727/22358436/ea430ef4-e3f3-11e6-9dd9-e5e72e6e803a.png)
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |align|Multi-line text alignment (left, center, right).|left|
       * |alphaTest|Discard text pixels if alpha is less than this value.|0.5|
       * |anchor|Horizontal positioning (left, center, right, align).|center|
       * |baseline|Vertical positioning (top, center, bottom).|center|
       * |color|Text color.|white|
       * |font|Font to render text, either the name of one of A-Frame’s stock fonts or a URL to a font file|default|
       * |fontImage|Font image texture path to render text. Defaults to the font‘s name with extension replaced to .png. Don’t need to specify if using a stock font.|derived from font name|
       * |height|Height of text block.|derived from text size|
       * |letterSpacing|Letter spacing in pixels.|0|
       * |lineHeight|Line height in pixels.|derived from font file|
       * |opacity|Opacity, on a scale from 0 to 1, where 0 means fully transparent and 1 means fully opaque.|1.0|
       * |shader|Shader used to render text.|sdf|
       * |side|Side to render. (front, back, double)|front|
       * |tabSize|Tab size in spaces.|4|
       * |transparent|Whether text is transparent.|true|
       * |value|The actual content of the text. Line breaks and tabs are supported with \n and \t.|‘’|
       * |whiteSpace|How whitespace should be handled (i.e., normal, pre, nowrap). Read more about whitespace.|normal|
       * |width|Width in meters.|derived from geometry if exists|
       * |wrapCount|Number of characters before wrapping text (more or less).|40|
       * |wrapPixels|Number of pixels before wrapping text.|derived from wrapCount|
       * |xOffset|X-offset to apply to add padding.|0|
       * |zOffset|Z-offset to apply to avoid Z-fighting if using with a geometry as a background.|0.001|
       */
      text?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/tracked-controls.html
       * 
       * The tracked-controls component interfaces with tracked controllers. tracked-controls uses the Gamepad API to handle tracked controllers, and is abstracted by the hand-controls component as well as the vive-controls, oculus-touch-controls, windows-motion-controls, and daydream-controls components. This component elects the appropriate controller, applies pose to the entity, observes buttons state and emits appropriate events. For non-6DOF controllers such as daydream-controls, a primitive arm model is used to emulate positional data.
       * 
       * tracked-controls sets two components that handles different Web API versions for VR:
       * 
       * - tracked-controls-webvr
       * - tracked-controls-webxr
       * 
       * @example
       * Note that due to recent browser-specific changes, Vive controllers may be returned by the Gamepad API with id values of either “OpenVR Gamepad” or “OpenVR Controller”, so using idPrefix for Vive / OpenVR controllers is recommended.
       * 
       * ```html
       * <a-entity tracked-controls="controller: 0; idPrefix: OpenVR"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |armModel|Whether the arm model is used for positional data if absent.|true|
       * |autoHide|Whether to toggle visibility automatically when controller is connected or disconnected.|true|
       * |controller|Index of the controller in array returned by the Gamepad API.|0|
       * |id|Selects the controller from the Gamepad API using exact match.||
       * |idPrefix|Selects the controller from the Gamepad API using prefix match.||
       * |headElement|Head element for arm model if needed (if not active camera).||
       * |hand|Which hand to use, if arm model is needed. (left negates X)|right|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'tracked-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/visible.html
       * 
       * The visible component determines whether to render an entity. If set to false, then the entity will not be visible nor drawn.
       * 
       * Visibility effectively applies to all children. If an entity’s parent or ancestor entity has visibility set to false, then the entity will also not be visible nor draw. It’s a common pattern to create container entities that contain an entire group of entities that you can flip on an off with visible.
       * 
       * @example
       * ```html
       * <a-entity visible="false"></a-entity>
       * ```
       * 
       * @properties
       * |Value|Description|
       * |:-|:-|
       * |true|The entity will be rendered and visible; the default value.|
       * |false|The entity will not be rendered nor visible. The entity will still exist in the scene.|
       */
      visible?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/vive-controls.html
       * 
       * The vive-controls component interfaces with the HTC Vive controllers/wands. It wraps the tracked-controls component while adding button mappings, events, and a Vive controller model that highlights the pressed buttons (trigger, grip, menu, system) and trackpad.
       * 
       * @example
       * ```html
       * <a-entity vive-controls="hand: left"></a-entity>
       * <a-entity vive-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |buttonColor|Button colors when not pressed.|#FAFAFA (off-white)|
       * |buttonHighlightColor|Button colors when pressed and active.|#22D1EE (light blue)|
       * |hand|The hand that will be tracked (i.e., right, left).|left|
       * |model|Whether the Vive controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'vive-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/vive-focus-controls.html
       * 
       * The vive-focus-controls component interfaces with the Vive Focus controller. It wraps the tracked-controls component while adding button mappings, events, and an Vive Focus controller model that highlights the touched and/or pressed buttons (trackpad, trigger).
       * 
       * @example
       * ```html
       * <!-- Match Vive Focus controller if present, regardless of hand. -->
       * <a-entity vive-focus-controls></a-entity>
       * 
       * <!-- Match Vive Focus controller if present and for specified hand. -->
       * <a-entity vive-focus-controls="hand: left"></a-entity>
       * <a-entity vive-focus-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |armModel|Whether the arm model is used for positional data.|true|
       * |buttonTouchedColor|Button colors when touched (Trackpad only).|#777777|
       * |buttonHighlightColor|Button colors when pressed and active.|#FFFFFF|
       * |hand|The hand that will be tracked (e.g., right, left).||
       * |model|Whether the Vive Focus controller model is loaded.|true|
       * |orientationOffset|Offset to apply to model orientation.|x: 0, y: 0, z: 0|
       */
      'vive-focus-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/wasd-controls.html
       * 
       * The wasd-controls component controls an entity with the WASD or arrow keyboard keys. The wasd-controls component is commonly attached to an entity with the camera component.
       * 
       * @example
       * ```html
       * <a-entity camera look-controls wasd-controls="acceleration:100" position="0 1.6 0"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |acceleration|How fast the entity accelerates when holding the keys.|65|
       * |adAxis|Axis that the A and D keys act upon.|x|
       * |adInverted|Whether the axis that the A and D keys act upon are inverted.|false|
       * |enabled|Whether the WASD controls are enabled.|true|
       * |fly|Whether or not movement is restricted to the entity’s initial plane.|false|
       * |wsAxis|Axis that the W and S keys act upon.|z|
       * |wsInverted|Whether the axis that the W and S keys act upon are inverted.|false|
       */
      'wasd-controls'?: string;

      /**
       * @see https://aframe.io/docs/1.3.0/components/windows-motion-controls.html
       * 
       * The windows-motion-controls component interfaces with any spatial controllers exposed through Windows Mixed Reality as Spatial Input Sources (such as Motion Controllers). It wraps the tracked-controls component while adding button mappings, events, and a controller model that highlights applies position/rotation transforms to the pressed buttons (trigger, grip, menu, thumbstick, trackpad) and moved axes (thumbstick and trackpad.)
       * 
       * @example
       * ```html
       * <a-entity windows-motion-controls="hand: left"></a-entity>
       * <a-entity windows-motion-controls="hand: right"></a-entity>
       * ```
       * 
       * @properties
       * |Property|Description|Default Value|
       * |:-|:-|:-|
       * |hand|The hand that will be tracked (i.e., right, left).|right|
       * |pair|Which pair of controllers, if > 2 are connected.|0|
       * |model|Whether the controller model is loaded.|true|
       * |hideDisconnected|Disable rendering of controller model when no matching gamepad (based on ID & hand) is connected.|true|
       */
      'windows-motion-controls'?: string;
    } | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

    /**
     * @see https://aframe.io/docs/1.3.0/core/asset-management-system.html
     * 
     * @property { string } timeout - Assets timed out.
     */
    'a-assets'?: {
      /** Assets timed out. */
      timeout?: string;
    } | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

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
