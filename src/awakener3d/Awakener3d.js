import React, { Component } from 'react';
import TWEEN from 'tween.js';

/* global THREE */


/**
 * Filters the summons that are shown in component <AddSummon />
 */
class Awakener3d extends Component {
    
    // ThreeJs 
    rendererDiv;
    renderer;
    camera;
    scene;

    meshUnitStand;
    meshMatHolder;
    meshInnerRing;
    meshOuterRing;

    allMeshes = [];

     constructor(props){
        super(props)
        this.animate = this.animate.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.running = true;

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
      // TODO: destroy it all.
    }

    setRendererDiv(theDiv) {
        this.rendererDiv = theDiv; 
    }

    render() {
        var that = this;
        return (
            <div>
                <div ref={(theDiv) => { that.setRendererDiv(theDiv); }}>
                </div>
                <button onClick={that.onPlay}>Play!</button>
            </div>
        );
    }

    // Runs the animation from scratch
    onPlay() {

        var that = this;

        // Material Holder
        var coords = { y: 40, opacity: 0 };
        var tween = new TWEEN.Tween(coords)
            .easing(TWEEN.Easing.Quadratic.Out)
            .to({ y: 0, opacity: 1 }, 500)
            .onUpdate(function() {
                that.meshMatHolder.position.y = this.y;
                that.meshMatHolder.material.opacity = this.opacity;
            })
            .start();

        // Inner ring, tweens from above.
        this.meshInnerRing.material.opacity = 0;
        var coords = { y: -30, opacity: 0 };
        var tween = new TWEEN.Tween(coords)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(200)
            .to({ y: -7, opacity: 0.5 }, 400)
            .onUpdate(function() {
                that.meshInnerRing.position.y = this.y;
                that.meshInnerRing.material.opacity = this.opacity;
            })
            .start();

        // Outer ring, scales down
        this.meshOuterRing.material.opacity = 0;
        var coords = { scale: 3.5, opacity: 0 };
        var tween = new TWEEN.Tween(coords)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(100)
            .to({ scale: 1, opacity: 1 }, 420)
            .onUpdate(function() {
                that.meshOuterRing.scale.x = this.scale;
                that.meshOuterRing.scale.y = this.scale;
                that.meshOuterRing.material.opacity = this.opacity;
            })
            .start();

        // Camera
        this.camera.position.y = this.cameraStartY;
        var coords = { y: this.cameraStartY };
        var tween = new TWEEN.Tween(coords)
            .easing(TWEEN.Easing.Cubic.Out)
            .delay(1200)
            .to({ y: that.cameraStartY + 400 }, 600)
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
        var texture = THREE.ImageUtils.loadTexture( "awaken_ring.png" );

        this.meshUnitStand = this.createTexturedMesh( scene, texture, 110, 110, this.uv_unit_stand, 1 );
        this.meshMatHolder = this.createTexturedMesh( scene, texture, 290, 290, this.uv_mat_holder, 1 );
        this.meshMatHolder.rotation.z += Math.PI;
        this.meshInnerRing = this.createTexturedMesh( scene, texture, 280, 280, this.uv_inner_ring, 0.5 );
        this.meshInnerRing.position.y -= 7; // Move down a lot
        this.meshOuterRing = this.createTexturedMesh( scene, texture, 300, 300, this.uv_outer_ring, 1 );
        this.meshOuterRing.position.y -= 5; // Move down a bit

        window.AAA = this.meshMatHolder;

        // Orient all meshes in the scene
        this.allMeshes.forEach(function(mesh){
            mesh.rotation.x = -Math.PI * .38;
        });
    }

    // Helper function
    createTexturedMesh( scene, texture, width, height, uv, opacity ) {

        var material = new THREE.MeshBasicMaterial({ 
            map: texture,
            transparent: true,
            depthWrite: false,
            color: '#f8fa81',
            opacity: opacity
        });
        
        var geometry = new THREE.PlaneGeometry( width, height );
        geometry.faceVertexUvs[0][0] = [ uv[0], uv[1], uv[3] ];
        geometry.faceVertexUvs[0][1] = [ uv[1], uv[2], uv[3] ];
        
        var mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.z = Math.PI * .5;
        scene.add( mesh );
        this.allMeshes.push( mesh );

        return mesh
    }
    
}

export default Awakener3d;
