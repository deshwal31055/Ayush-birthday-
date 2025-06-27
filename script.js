let current = 1;
function nextScene() {
  const currentScene = document.getElementById(`scene${current}`);
  if (currentScene) currentScene.style.display = "none";
  current++;
  const nextScene = document.getElementById(`scene${current}`);
  if (nextScene) nextScene.style.display = "block";
}
