AFRAME.registerComponent("targets",{
    init: function(){
        for(var i=1; i<=20; i++){
            var id = `ring${i}`
            var posX = Math.random()*1500 + (-500)
            var posY = Math.random()*2 + (-1)
            var posZ = Math.random()*1500 + (-500)
            var position = {x:posX, y:posY, z:posZ}
            this.createTargets(id,position)
        }
    },

    createTargets: function(id,position){
        var terrain = document.querySelector("#terrain")
        var rings = document.createElement("a-entity")
        rings.setAttribute("id",id)
        rings.setAttribute("position",position)
        rings.setAttribute("material","color","yellow")
        rings.setAttribute("geometry",{primitive:"torus",radius:15})
        rings.setAttribute("static-body",{
            shape : 'sphere',
            sphereRadius : 4,
        })
        rings.setAttribute("gameplay",{
            elementId : `#${id}`
        })
        terrain.appendChild(rings)
    },
})