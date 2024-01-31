const jsonData = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg",
    },
  ];

  window.onload = () => {
    const rightSideCard = document.querySelector(".right-side-card"); // wybiera kontener dla wyników
    const continueButton = document.querySelector(".right-side-card button"); //znajdz przycisk button continue

    jsonData.forEach((dataItem) => {

      const summaryField = document.createElement('div'); // tworzy główny kontener dla każdej kategorii
      summaryField.className = `summary-field ${dataItem.category.toLowerCase()}`;



      const summaryName = document.createElement("div"); // tworzy kontener dla nazw kategorii i ikony
      summaryName.className = "summary-data summary-name";

      const iconImg = document.createElement("img"); // dodaje ikonę
      iconImg.className = "icon";
      iconImg.src = dataItem.icon;
      iconImg.alt = `${dataItem.category} icon`;

      const categoryName = document.createElement("h4"); // Dodaje nazwę kategorii
      categoryName.textContent = dataItem.category;

      //dodaje ikonę oraz nazwę do kontenera summaryName
      summaryName.appendChild(iconImg);
      summaryName.appendChild(categoryName);


      //tworzy kontener dla wyniku
      const summaryScore = document.createElement("div");
      summaryScore.className = "summary-data score";

      //dodaje wynik
      const score = document.createElement("h4");
      score.textContent = dataItem.score;

      // dodaje / 100
      const maxScore = document.createElement("h4");
      maxScore.className = "max-score";
      maxScore.textContent = "/ 100";

      //dodaje wynik do kontenera summaryScore
      summaryScore.appendChild(score);
      summaryScore.appendChild(maxScore);


      //dodaje summaryName i summaryScore do głównego kontenera summaryField
      summaryField.appendChild(summaryName);
      summaryField.appendChild(summaryScore);


      //dodaje summary field do kontenera rightSideCard
      rightSideCard.insertBefore(summaryField, continueButton);

    });
  };