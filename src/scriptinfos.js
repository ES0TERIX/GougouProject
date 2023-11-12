function changeInfos(contentNumber) {
  const infosContainer = document.getElementById("infos-display");
  console.log(infosContainer);
  if (infosContainer) {
    infosContainer.innerHTML = "";
    console.log(contentNumber);
    switch (contentNumber) {
      case 1:
        const content1 = document.createElement("div");
        content1.innerHTML = `
        <div class="infos">
            <h2>PRESSE</h2>
            <p>
                Infos Presse
            <p>
        </div>
            `;
        infosContainer.appendChild(content1);
        break;
      case 2:
        const content2 = document.createElement("div");
        content2.innerHTML = `
        <div class="infos">
            <h2>SORTIES</h2>
            <p>
                Infos Sorties
            <p>
        </div>
            `;
        infosContainer.appendChild(content2);
        break;
      case 3:
        const content3 = document.createElement("div");
        content3.innerHTML = `
        <div class="infos">
            <h2>EVENEMENT</h2>
            <p>
                Infos Evenements
            <p>
        </div>
            `;
        infosContainer.appendChild(content3);
        break;
      case 4:
        const content4 = document.createElement("div");
        content4.innerHTML = `
        <div class="infos">
            <h2>SEMINAIRE</h2>
            <p>
                Infos Seminaire 
            <p>
        </div>
            `;
        infosContainer.appendChild(content4);
        break;
      case 5:
        const content5 = document.createElement("div");
        content5.innerHTML = `
        <div class="infos">
            <h2>CONTACT</h2>
            <p>
                Infos Contact 
            <p>
        </div>
            `;
        infosContainer.appendChild(content5);
        break;
    }
  } else {
    console.log("error");
  }
}
