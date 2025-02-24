// For testing puroposes, you may need to change these places to something closer to you
const places = [
    { name: "Rochester Abandoned Subway", latitude: 43.08408742372535, longitude: -77.67634373265665 },
    { name: "Washington Square Park", latitude: 43.1534, longitude: -77.6053 },
    { name: "Rochester Contemporary Art Center", latitude: 43.156619, longitude: -77.600730 }
];

const loadPlaces = () => {
    const scene = document.querySelector("a-scene");

    places.forEach(place => {
        const entity = document.createElement("a-entity");
        const shape = document.createElement("a-sphere")

        shape.setAttribute("color", "blue");
        entity.setAttribute("gps-entity-place", `latitude: ${place.latitude}; longitude: ${place.longitude}`);
     

        const text = document.createElement("a-text");
        text.setAttribute("value", place.name);
        text.setAttribute("align", "center");
        text.setAttribute("position", "0 2 0");
        entity.appendChild(text);

        entity.addEventListener("click", () => alert(`You clicked on: ${place.name}`));

        scene.appendChild(entity);
        scene.appendChild(shape)
    });
};

window.onload = loadPlaces;