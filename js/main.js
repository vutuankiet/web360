// Select panolens div
const pan = document.querySelector(".pan");
const img = "../img360/4.png";
const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan,
    autoRotate: true,
    autoRotateSpeed: 0.5,
})
// Run viewer
viewer.add(panorama);