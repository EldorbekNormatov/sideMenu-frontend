(function () {
  let script = document.createElement("script");

  // Localhost -> Development mode
  const isLocal =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

  script.src = isLocal
    ? "/config/dev.config.js"
    : "/config/prod.config.js";

  document.head.appendChild(script);
})();
