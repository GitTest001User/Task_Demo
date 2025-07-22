
  const video = document.getElementById("portalVideosss");

  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // वीडियो फिर से स्टार्ट से हो
  });

