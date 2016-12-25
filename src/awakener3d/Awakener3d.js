import React, { Component } from 'react';
import Summons from '../Summons';
import AweConsts from '../Const';
import TWEEN from 'tween.js';

/* global THREE */

import './Awakener3d.css';


/**
 * Filters the summons that are shown in component <AddSummon />
 */
class Awakener3d extends Component {
    
    // ThreeJs 
    renderer;
    camera;
    scene;

    meshBaseAura;
    meshUnitStand;
    meshMatHolder;
    meshInnerRing;
    meshOuterRing;
    allMeshes = [];

    // React-divs
    rendererDiv
    overlay2dDiv;

     constructor(props){
        super(props)
        this.animate = this.animate.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onRestart = this.onRestart.bind(this);
        this.state = {
            summonId: Summons.VAAN.id // Todo: Remove hardcoded value and use props value
        };

        this.uv_unit_stand = [
            new THREE.Vector2(      258/512, (512-(258+124))/512),    // Left  Bottom 
            new THREE.Vector2((258+124)/512, (512-(258+124))/512),    // Right Bottom 
            new THREE.Vector2((258+124)/512,       (512-258)/512),    // Right Top 
            new THREE.Vector2(      258/512,       (512-258)/512)     // Left  Top 
        ];

        this.uv_mat_holder = [
            new THREE.Vector2(      0, (512-258)/512),    // Left  Bottom 
            new THREE.Vector2(258/512, (512-258)/512),    // Right Bottom 
            new THREE.Vector2(258/512,             1),    // Right Top 
            new THREE.Vector2(      0,             1)     // Left  Top 
        ];

        this.uv_inner_ring = [
            new THREE.Vector2(      0, (512-(250+258))/512),    // Left  Bottom 
            new THREE.Vector2(258/512, (512-(250+258))/512),    // Right Bottom 
            new THREE.Vector2(258/512,       (512-250)/512),    // Right Top 
            new THREE.Vector2(      0,       (512-250)/512)     // Left  Top 
        ];

        this.uv_outer_ring = [
            new THREE.Vector2(258/512, (512-254)/512),    // Left  Bottom 
            new THREE.Vector2(      1, (512-254)/512),    // Right Bottom 
            new THREE.Vector2(      1,             1),    // Right Top 
            new THREE.Vector2(258/512,             1)     // Left  Top 
        ];
    };

    componentDidMount() {

        var SCREEN_WIDTH = 400;
        var SCREEN_HEIGHT = 400;
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );

        this.camera = new THREE.PerspectiveCamera( 35, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 25000 );
        this.camera.position.z = 400;
        this.cameraStartY = this.camera.position.y;
        
        this.scene = new THREE.Scene();
        this.scene.add( new THREE.AmbientLight( 0xeef0ff ) );
        
        var light = new THREE.DirectionalLight( 0xffffff, 2 );
        light.position.set( 1, 1, 1 );
        this.scene.add( light );

        // Create meshes in the scene
        this.createMeshes( this.scene );

        // Renderer
        this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
        this.renderer.render( this.scene, this.camera );
        this.rendererDiv.appendChild( this.renderer.domElement );

        this.running = true;
        requestAnimationFrame( this.animate );
    }

    componentWillUnmount() {
        this.running = false;
        this.rendererDiv.removeChild( this.renderer.domElement );
        this.renderer.dispose();
        
        this.overlay2dDiv = null;
        this.rendererDiv = null;
        this.renderer = null;
        this.camera = null;
        this.scene = null;
        this.meshBaseAura = null;
        this.meshUnitStand = null;
        this.meshMatHolder = null;
        this.meshInnerRing = null;
        this.meshOuterRing = null;
        this.allMeshes = null;
    }

    setRendererDiv(theDiv) {
        this.rendererDiv = theDiv; 
    }
    set2dOverlay(theDiv) {
        // This div contains all non-threejs 2D-elements
        this.overlay2dDiv = theDiv;
    }

    render() {
        var that = this;
        var summonData = Summons[ this.state.summonId ];
        var materialIds = summonData.getMaterialIds();
        var mats = [
            null, // dummy entry
            AweConsts.materials[ materialIds[0] ],
            AweConsts.materials[ materialIds[1] ],
            AweConsts.materials[ materialIds[2] ],
            AweConsts.materials[ materialIds[3] ],
            AweConsts.materials[ materialIds[4] ],
            AweConsts.materials[ materialIds[5] ]
        ]
        return (
            <div className="awakener3d-container">
                <div className="awakening-3d" ref={(theDiv) => { that.setRendererDiv(theDiv); }}>
                </div>
                <div className="awakening-2d" ref={(theDiv) => { that.set2dOverlay(theDiv); }} >
                    <img className="awakening-unit" src={summonData.src} alt={summonData.name}></img>
                    <img className="awekening-material one"   src={mats[1].src} alt={mats[1].name}></img>
                    <img className="awekening-material two"   src={mats[2].src} alt={mats[2].name}></img>
                    <img className="awekening-material three" src={mats[3].src} alt={mats[3].name}></img>
                    <img className="awekening-material four"  src={mats[4].src} alt={mats[4].name}></img>
                    <img className="awekening-material five"  src={mats[5].src} alt={mats[5].name}></img>
                    <div className="fade-from-white"></div>
                </div>
                <button onClick={that.onRestart}>Restart</button>
                <button onClick={that.onPlay}>Play!</button>
            </div>
        );
    }

    onRestart() {

        // Stop all active tweens
        var activeTweens = TWEEN.getAll();
        activeTweens.forEach(function(tw){
            tw.stop();
        });

        // Orient all meshes in the scene
        this.allMeshes.forEach(function(mesh){
            // rotation
            mesh.rotation.x = -Math.PI * .38;
            mesh.rotation.z = Math.PI * .5;
            // position
            mesh.position.y = 0;
            // opacity
            mesh.material.opacity = 1;
        });

        // Special cases
        this.meshMatHolder.rotation.z += Math.PI; // 180 deg
        this.meshInnerRing.position.y -= 7; // Move down a bunch
        this.meshInnerRing.material.opacity = 0.5;
        this.meshOuterRing.position.y -= 5; // Move down a bit
        this.meshBaseAura.material.opacity = 0.3;

        // Camera
        this.camera.position.y = this.cameraStartY;

        // 2D overlays
        Array.prototype.forEach.call(this.overlay2dDiv.children, function(child){
            child.style.opacity = 1;
        });

        // TESTING ONLY
        /*
        var whiteOverlayDiv = this.overlay2dDiv.querySelector('.fade-from-white');
        whiteOverlayDiv.style.opacity = 0;
        this.meshMatHolder.material.opacity = 0;
        this.meshInnerRing.material.opacity = 0;
        this.meshOuterRing.material.opacity = 0;
        // */
        // TESTING ONLY
    }

    // Runs the animation from scratch
    onPlay() {

        // Back to initial state
        this.onRestart();

        var that = this;
        var tValues;
        const GENERAL_DELAY = 500;
        const OUTRO_DELAY = GENERAL_DELAY + 1500;

        // White overlay
        var whiteOverlayDiv = this.overlay2dDiv.querySelector('.fade-from-white');
        whiteOverlayDiv.style.opacity = 1;
        tValues = { opacity: 1 };
        new TWEEN.Tween(tValues)
            .delay(300)
            .to({ y: 0, opacity: 0 }, 230)
            .onUpdate(function() {
                whiteOverlayDiv.style.opacity = this.opacity;
            })
            .start();
        

        // Material Holder
        this.meshMatHolder.material.opacity = 0;
        tValues = { y: 40, opacity: 0 };
        new TWEEN.Tween(tValues)
            .easing(TWEEN.Easing.Quadratic.Out)
            .delay(GENERAL_DELAY + 200)
            .to({ y: 0, opacity: 1 }, 500)
            .onUpdate(function() {
                that.meshMatHolder.position.y = this.y;
                that.meshMatHolder.material.opacity = this.opacity;
            })
            .start();

        // Inner ring, tweens from above.
        this.meshInnerRing.material.opacity = 0;
        tValues = { y: -30, opacity: 0 };
        new TWEEN.Tween(tValues)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(GENERAL_DELAY + 200)
            .to({ y: -7, opacity: 0.5 }, 400)
            .onUpdate(function() {
                that.meshInnerRing.position.y = this.y;
                that.meshInnerRing.material.opacity = this.opacity;
            })
            .start();

        // Outer ring, scales down
        this.meshOuterRing.material.opacity = 0;
        tValues = { scale: 3.5, opacity: 0 };
        new TWEEN.Tween(tValues)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(GENERAL_DELAY + 100)
            .to({ scale: 1, opacity: 1 }, 420)
            .onUpdate(function() {
                that.meshOuterRing.scale.x = this.scale;
                that.meshOuterRing.scale.y = this.scale;
                that.meshOuterRing.material.opacity = this.opacity;
            })
            .start();

        // Fade out unit and materials (all at the same time/speed)
        var unitDiv = this.overlay2dDiv.querySelector('.awakening-unit');
        var matDivs = this.overlay2dDiv.getElementsByClassName('awekening-material');
        tValues = { opacity: 1 };
        new TWEEN.Tween(tValues)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(OUTRO_DELAY)
            .to({ opacity: 0 }, 500)
            .onUpdate(function() {
                var newOpacity = this.opacity;
                Array.prototype.forEach.call(matDivs, function(div){
                    div.style.opacity = newOpacity;
                });
                unitDiv.style.opacity = newOpacity;
            })
            .start();

        // Camera
        tValues = { y: this.cameraStartY };
        new TWEEN.Tween(tValues)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(OUTRO_DELAY + 700)
            .to({ y: that.cameraStartY + 400 }, 1000)
            .onUpdate(function() {
                that.camera.position.y = this.y;
            })
            .onComplete(function(){
                that.onStop();
            })
            .start();
    }

    onStop(){
        // Ehh, now what?
        console.log('Animation stopped. Do something.');

        this.onRestart();
    }

    animate( time ) {
        if (!this.running)
            return;

        requestAnimationFrame( this.animate );

        // Constant rotation
        this.meshUnitStand.rotation.z += 0.01;
        this.meshInnerRing.rotation.z -= 0.01;
        this.meshOuterRing.rotation.z += 0.01;

        TWEEN.update(time);

        this.renderer.render( this.scene, this.camera );
    }

    createMeshes(scene) {

        // Create Material
        var textureLoader = new THREE.TextureLoader();
        var texture = textureLoader.load("awaken_ring.png");
        var texture2 = textureLoader.load("awakening_aura.png");

        this.meshBaseAura = this.createTexturedMesh( scene, texture2, 400, 400 );
        this.meshUnitStand = this.createTexturedMesh( scene, texture, 110, 110, this.uv_unit_stand );
        this.meshMatHolder = this.createTexturedMesh( scene, texture, 290, 290, this.uv_mat_holder );
        this.meshInnerRing = this.createTexturedMesh( scene, texture, 280, 280, this.uv_inner_ring );
        this.meshOuterRing = this.createTexturedMesh( scene, texture, 300, 300, this.uv_outer_ring );

        // Set initial state
        this.onRestart();
    }

    // Helper function
    createTexturedMesh( scene, texture, width, height, uv ) {

        var material = new THREE.MeshBasicMaterial({ 
            map: texture,
            transparent: true,
            depthWrite: false,
            color: '#f8fa81'
        });
        
        var geometry = new THREE.PlaneGeometry( width, height );
        if (uv) {
            geometry.faceVertexUvs[0][0] = [ uv[0], uv[1], uv[3] ];
            geometry.faceVertexUvs[0][1] = [ uv[1], uv[2], uv[3] ];
        }
        
        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        this.allMeshes.push( mesh );

        return mesh
    }
    
}

export default Awakener3d;
