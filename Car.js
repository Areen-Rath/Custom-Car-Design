AFRAME.registerComponent("car", {
    schema: {
        rotate: {
            type: "number",
            default: 90
        }
    },
    tick: function() {
        window.addEventListener("click", e => this.data.moveX += 0.01)
        
        this.data.rotate += 0.1
        var rotation = this.el.getAttribute("rotation");
        rotation.y = this.data.rotate;
        this.el.setAttribute("rotation", {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        })
    }
});