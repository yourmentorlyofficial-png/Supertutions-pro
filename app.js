setTimeout(()=>{

document.getElementById("splash").style.display="none";

document.getElementById("app").style.display="block";

},2500);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("SuperTutions offline engine ready"))
      .catch(error => console.error("Service Worker error:", error));
  });
}
