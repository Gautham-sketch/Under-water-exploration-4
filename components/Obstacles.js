AFRAME.registerComponent("obstacles",{
    init: function(){
        for(var i=1; i<=20; i++){
            var id = `bird${i}`
            var posX = Math.random()*1500 + (-500)
            var posY = Math.random()*2 + (-1)
            var posZ = Math.random()*1500 + (-500)
            var position = {x:posX, y:posY, z:posZ}
            this.createObstacles(id,position)
        }
    },

    createObstacles: function(id,position){
        var terrain = document.querySelector("#terrain")
        var birds = document.createElement("a-entity")
        birds.setAttribute("id",id)
        birds.setAttribute("position",position)
        birds.setAttribute("scale",{x:300, y:300, z:300})
        birds.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birds.setAttribute("animation-mixer",{})
        birds.setAttribute("static-body",{
            shape : 'sphere',
            sphereRadius : 4,
        })
        birds.setAttribute("gameplay",{
            elementId : `#${id}`
        })
        terrain.appendChild(birds)
    },
})