AFRAME.registerComponent('plane-flying',{
    schema:{
        speed:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            var speedOfRotation = this.el.getAttribute("rotation")
            if(e.key === 'ArrowRight'){
                speedOfRotation.x += 0.5
                this.el.setAttribute('rotation',{x:speedOfRotation.x, y:speedOfRotation.y, z:speedOfRotation.z})
            }
            if(e.key === 'ArrowUp'){
                speedOfRotation.z += 0.5
                this.el.setAttribute('rotation',{x:speedOfRotation.x, y:speedOfRotation.y, z:speedOfRotation.z})
            }
            if(e.key === 'ArrowDown'){
                speedOfRotation.z -= 0.5
                this.el.setAttribute('rotation',{x:speedOfRotation.x, y:speedOfRotation.y, z:speedOfRotation.z})
            }
            if(e.key === 'ArrowLeft'){
                speedOfRotation.x -= 0.5
                this.el.setAttribute('rotation',{x:speedOfRotation.x, y:speedOfRotation.y, z:speedOfRotation.z})
            }
        })
    },
})