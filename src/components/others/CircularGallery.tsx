import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';

import './component.scss';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createTextTexture(gl, text, font = 'bold 30px monospace', color = '#292F5D', resolution = 3) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  const fontSizeMatch = font.match(/(\d+)px/);
  const fontSize = fontSizeMatch ? parseInt(fontSizeMatch[1], 10) : 30;
  
  context.font = font;
  const metrics = context.measureText(text);
  
  // Multiply dimensions by resolution for sharpness
  const textWidth = Math.ceil(metrics.width) * resolution;
  const textHeight = Math.ceil(fontSize * 1.2) * resolution;
  
  canvas.width = textWidth;
  canvas.height = textHeight;
  
  // Scale context to match resolution
  context.scale(resolution, resolution);
  
  // Re-apply font and settings
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  
  // Render text at the center of the scaled canvas
  context.fillText(text, (canvas.width / resolution) / 2, (canvas.height / resolution) / 2);
  
  const texture = new Texture(gl, { 
    generateMipmaps: true, // Enable mipmaps for better downscaling quality
    minFilter: gl.LINEAR_MIPMAP_LINEAR,
    magFilter: gl.LINEAR
  });
  texture.image = canvas;
  
  return { texture, width: canvas.width, height: canvas.height };
}

class Title {
  gl: any;
  plane: any;
  renderer: any;
  text: string;
  subtitle: string | undefined;
  textColor: string;
  font: string;
  meshes: any[];
  titleMesh: any;
  subtitleMesh: any;
  buttonMesh: any;


  constructor({ gl, plane, renderer, text, subtitle, textColor = '#292F5D', font = '30px sans-serif' }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.subtitle = subtitle;
    this.textColor = textColor;
    this.font = font;
    this.meshes = [];
    this.createMesh();
  }
// Inside the Title class
createMesh() {
  const FIXED_TITLE_HEIGHT = 0.45; 
  const FIXED_SUBTITLE_HEIGHT = 0.08;

  // 1. CREATE TITLE
  const { texture: titleTexture, width: titleWidth, height: titleHeight } = 
    createTextTexture(this.gl, this.text, this.font, this.textColor);
  
  const titleGeometry = new Plane(this.gl);
  
  // Define the shader code once to reuse
  const vertex = `
    attribute vec3 position;
    attribute vec2 uv;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const fragment = `
    precision highp float;
    uniform sampler2D tMap;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tMap, vUv);
      if (color.a < 0.05) discard;
      gl_FragColor = color;
    }
  `;

  const titleProgram = new Program(this.gl, {
    vertex,
    fragment,
    uniforms: { tMap: { value: titleTexture } },
    transparent: true
  });

  this.titleMesh = new Mesh(this.gl, { geometry: titleGeometry, program: titleProgram });
  const titleAspect = titleWidth / titleHeight;
  this.titleMesh.scale.set(FIXED_TITLE_HEIGHT * titleAspect, FIXED_TITLE_HEIGHT, 1);
  this.titleMesh.position.y = -this.plane.scale.y * 0.5 - 0.15;
  this.titleMesh.setParent(this.plane);
  this.meshes.push(this.titleMesh);

  // 2. CREATE SUBTITLE (Fixed the ReferenceError here)
  if (this.subtitle) {
    const { texture: subTex, width: subW, height: subH } = 
      createTextTexture(this.gl, this.subtitle, '14px sans-serif', this.textColor);
    
    // We define the subProgram variable before using it in the Mesh
    const subProgram = new Program(this.gl, {
      vertex,
      fragment,
      uniforms: { tMap: { value: subTex } },
      transparent: true
    });
    
    this.subtitleMesh = new Mesh(this.gl, { geometry: titleGeometry, program: subProgram });
    const subAspect = subW / subH;
    this.subtitleMesh.scale.set(FIXED_SUBTITLE_HEIGHT * subAspect, FIXED_SUBTITLE_HEIGHT, 1);
    
    // Position it slightly below the main title
    this.subtitleMesh.position.y = this.titleMesh.position.y - 0.1;
    this.subtitleMesh.setParent(this.plane);
    this.meshes.push(this.subtitleMesh);
  }
}
}


class Media {
  extra: number;
  geometry: any;
  gl: any;
  image: string;
  index: number;
  length: number;
  renderer: any;
  scene: any;
  screen: any;
  text: string;
  subtitle: string | undefined;
  viewport: any;
  bend: number;
  textColor: string;
  borderRadius: number;
  font: string;
  customSize: number | undefined;
  link: string | undefined;
  program: any;
  plane: any;
  title: any;
  scale: number;
  speed: number;
  isBefore: boolean;
  isAfter: boolean;
  widthTotal: number;
  width: number;
  x: number;
  padding: number;

  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    renderer,
    scene,
    screen,
    text,
    subtitle,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
    customSize,
    link
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.renderer = renderer;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.subtitle = subtitle;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.customSize = customSize;
    this.link = link;
    

    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
    
  }
  createShader() {
    const texture = new Texture(this.gl, {
      generateMipmaps: true
    });
// Inside Media class -> createShader()
this.program = new Program(this.gl, {
  depthTest: false,
  depthWrite: false,
  vertex: `
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    varying vec2 vUv;
    varying vec3 vPosition; // Pass position to fragment
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
fragment: `
  precision highp float;
  uniform vec2 uImageSizes;
  uniform vec2 uPlaneSizes;
  uniform sampler2D tMap;
  uniform float uBorderRadius;
  varying vec2 vUv;
  
  float roundedBoxSDF(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b;
    return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
  }
  
  void main() {
    // FIX: "Contain" logic instead of "Cover"
    // This ensures the image is never cropped
    float sRatio = (uPlaneSizes.x / uPlaneSizes.y);
    float iRatio = (uImageSizes.x / uImageSizes.y);
    
    vec2 ratio = vec2(
      max(sRatio / iRatio, 1.0),
      max(iRatio / sRatio, 1.0)
    );
    
    vec2 uv = vUv * ratio + (1.0 - ratio) * 0.5;
    
    // Discard pixels outside the [0,1] range to prevent texture wrapping/stretching
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        discard;
    }

    vec4 color = texture2D(tMap, uv);
    
    // Rounded corners
    float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
    float edgeAlpha = 1.0 - smoothstep(-0.002, 0.002, d);
    
    // Final color with transparency
    gl_FragColor = vec4(color.rgb, color.a * edgeAlpha);
  }
`,
  uniforms: {
    tMap: { value: texture },
    uPlaneSizes: { value: [0, 0] },
    uImageSizes: { value: [0, 0] },
    uViewportSizes: { value: [this.viewport.width, this.viewport.height] },
    uSpeed: { value: 0 },
    uTime: { value: 100 * Math.random() },
    uBorderRadius: { value: this.borderRadius }
  },
  transparent: true
});
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
  }
  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }
  createTitle() {
    this.title = new Title({
      gl: this.gl,
      plane: this.plane,
      renderer: this.renderer,
      text: this.text,
      subtitle: this.subtitle,
      textColor: this.textColor,
      font: this.font
    });
  }
  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);

      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }
onResize({ screen, viewport }: { screen?: any; viewport?: any } = {}) {
  if (screen) this.screen = screen;
  if (viewport) {
    this.viewport = viewport;
    if (this.plane.program.uniforms.uViewportSizes) {
      this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height];
    }
  }
  
  // Use custom size if provided, otherwise scale
  let size;
  if (this.customSize) {
    size = this.customSize;
  } else {
    this.scale = this.screen.height / 1500;
    size = 900 * this.scale; // Square size with scaling
  }
  
  this.plane.scale.y = (this.viewport.height * size) / this.screen.height;
  this.plane.scale.x = (this.viewport.width * size) / this.screen.width;
  this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
  this.padding = 2;
  this.width = this.plane.scale.x + this.padding;
  this.widthTotal = this.width * this.length;
  this.x = this.width * this.index;
}
}
class App {
  container: HTMLElement;
  scrollSpeed: number;
  customSize: number | undefined;
  onItemClick: ((link: string) => void) | undefined;
  scroll: { ease: number; current: number; target: number; last: number; position?: number };
  onCheckDebounce: any;
  renderer: any;
  gl: any;
  camera: any;
  scene: any;
  screen: { width: number; height: number };
  planeGeometry: any;
  medias: Media[];
  mediasImages: any[];
  viewport: { width: number; height: number };
  isDown: boolean;
  start: number;
  clickStartTime: number;
  mouse: { x: number; y: number }; // Track mouse in NDC
  raf: number;
  boundOnResize: any;
  boundOnWheel: any;
  boundOnTouchDown: any;
  boundOnTouchMove: any;
  boundOnTouchUp: any;

  constructor(
    container: HTMLElement,
    {
      items,
      bend,
      textColor = '#292F5D',
      borderRadius = 0,
      font = 'bold 30px Figtree',
      scrollSpeed = 2,
      scrollEase = 0.05,
      size,
      onItemClick
    } = {} as any
  ) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.scrollSpeed = scrollSpeed;
    this.customSize = size;
    this.onItemClick = onItemClick;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.mouse = { x: 0, y: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);
    
    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.update();
    this.addEventListeners();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 50,
      widthSegments: 100
    });
  }

  createMedias(items, bend = 1, textColor, borderRadius, font) {
    const defaultItems = [
      { image: `https://picsum.photos/seed/1/800/600?grayscale`, text: 'Bridge' },
      { image: `https://picsum.photos/seed/2/800/600?grayscale`, text: 'Desk Setup' },
      { image: `https://picsum.photos/seed/3/800/600?grayscale`, text: 'Waterfall' },
      { image: `https://picsum.photos/seed/4/800/600?grayscale`, text: 'Strawberries' },
    ];
    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems);
    this.medias = this.mediasImages.map((data, index) => {
      return new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        renderer: this.renderer,
        scene: this.scene,
        screen: this.screen,
        text: data.text,
        subtitle: data.subtitle,
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font,
        customSize: this.customSize,
        link: data.link
      });
    });
  }

  onTouchDown(e) {
  this.isDown = true;
  this.scroll.position = this.scroll.current;
  
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;
  
  // CRITICAL: Get the bounding box of the gallery container
  const rect = this.container.getBoundingClientRect();
  
  // Calculate click position relative to the container
  const relX = x - rect.left;
  const relY = y - rect.top;

  this.start = x;
  this.clickStartTime = Date.now();

  // Map relative pixels to NDC (-1 to 1) 
  // This tells WebGL exactly where in the "box" you clicked
  this.mouse.x = (relX / rect.width) * 2 - 1;
  this.mouse.y = -(relY / rect.height) * 2 + 1;
}

  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp(e: any) {
    this.isDown = false;

    // Check if this was a fast click (tap) vs a long drag
    const clickDuration = Date.now() - this.clickStartTime;
    if (clickDuration < 250) {
      this.handleItemClick();
    }

    this.onCheck();
  }

handleItemClick() {
  // Convert mouse NDC to World Coordinates
  const clickX = (this.mouse.x * this.viewport.width) / 2;
  const clickY = (this.mouse.y * this.viewport.height) / 2;

  let clickedMedia = null;

  this.medias.forEach(media => {
    // Current animated position of the plane
    const worldX = media.plane.position.x;
    const worldY = media.plane.position.y;
    
    // Scale is the actual width/height of the card in 3D units
    const halfW = media.plane.scale.x / 2;
    const halfH = media.plane.scale.y / 2;
    
    // Hit Test:
    // We check if clickX is between (center - width) and (center + width)
    const isInsideX = clickX >= worldX - halfW && clickX <= worldX + halfW;
    
    // For Y, we expand the bottom range slightly (-1.0) 
    // to include the area where the Title and Subtitle are rendered
    const isInsideY = clickY >= worldY - halfH - 1.0 && clickY <= worldY + halfH;

    if (isInsideX && isInsideY) {
      clickedMedia = media;
    }
  });

  if (clickedMedia) {
    if (clickedMedia.link) {
      this.onItemClick ? this.onItemClick(clickedMedia.link) : window.open(clickedMedia.link, '_blank');
    }
  } else {
    console.log("missed all cards - Clicked at:", clickX.toFixed(2), clickY.toFixed(2));
  }
}
  onWheel(e) {
    const delta = e.deltaY || e.wheelDelta || e.detail;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  }

  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });
    
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };

    if (this.medias) {
      this.medias.forEach(media => media.onResize({ screen: this.screen, viewport: this.viewport }));
    }
  }

  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    
    if (this.medias) {
      this.medias.forEach(media => media.update(this.scroll, direction));
    }
    
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);

    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('wheel', this.boundOnWheel, { passive: true });
    this.container.addEventListener('mousedown', this.boundOnTouchDown);
    this.container.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    this.container.addEventListener('touchstart', this.boundOnTouchDown, { passive: true });
    this.container.addEventListener('touchmove', this.boundOnTouchMove, { passive: true });
    window.addEventListener('touchend', this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('wheel', this.boundOnWheel);
    this.container.removeEventListener('mousedown', this.boundOnTouchDown);
    this.container.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    this.container.removeEventListener('touchstart', this.boundOnTouchDown);
    this.container.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);
    
    if (this.renderer?.gl?.canvas?.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#292F5D',
  borderRadius = 0.05,
  font = 'bold 40px ',
  scrollSpeed = 2,
  scrollEase = 0.05,
  size,
  onItemClick // Ensure this is received here
}: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<any>(null); // Keep a ref to the app
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Pass onItemClick into the class constructor
    const app = new App(containerRef.current, { 
      items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, size, onItemClick 
    });
    
    appRef.current = app;

    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, size, onItemClick]);
  
  return _jsx('div', { 
    className: 'circular-gallery', 
    ref: containerRef, 
    style: { cursor: 'pointer', width: '100%', height: '100%' } 
  });
}