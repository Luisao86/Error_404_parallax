document.addEventListener("mousemove", function(event) {
    document.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
});