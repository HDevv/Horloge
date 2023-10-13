// met à j l'heure toutes les secondes
setInterval(setHorloge, 1000);

// va chercher les attributs html des 3 aiguilles
const aiguilleHr = document.querySelector(`[data-hr-aiguille]`);
const aiguilleMin = document.querySelector(`[data-min-aiguille]`);
const aiguilleSec = document.querySelector(`[data-sec-aiguille]`);

// F appellée à intervals réguliers grâce à setInterval()
// met à j les positions des aiguilles pour afficher l'heure actuelle
function setHorloge() {
  // créer un nv objet qui représente la date et l'heure actuelles
  const currentDate = new Date();

  // calcule le rapport des secondes actuelles sur 60, ce qui donne un nb décimal compris entre 0 et 1
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  // les 3 aiguilles sont m à j en appelant la F setRotation
  setRotation(aiguilleSec, secondsRatio);
  setRotation(aiguilleMin, minutesRatio);
  setRotation(aiguilleHr, hoursRatio);
}

// prends en param l'élément DOM et le rapport de rotation
function setRotation(element, rotationRatio) {
  // défini une var CSS '--rotation' pour l'élément
  //converti le rapport en deg et l'assigne à la var
  element.style.setProperty("--rotation", rotationRatio * 360 + "deg");
}
setHorloge();
