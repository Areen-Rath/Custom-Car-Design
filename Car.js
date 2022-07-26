AFRAME.registerComponent("car", {
    schema: {
        moveX: {
            type: "number",
            default: -1.5
        }
    },
    tick: function() {
        this.data.moveX += 0.01
        var position = this.el.getAttribute("position");
        position.x = this.data.moveX;
        this.el.setAttribute("position", {
            x: position.x,
            y: position.y,
            z: position.z
        })
    }
})