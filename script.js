//"use strict";
//let userWelcome = alert(
    "Welcome! Please fill out all required fields appropriately."
  //);//
  //generate prefix of name and used or operator
  function genPrefix(firstName) {
    if (firstName.length > 4 || firstName.length === 2) {
      return "Plane";
    } else {
      return "Ferry";
    }
  }
  
  //generate first name of name and used switch case
  function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    switch (firstLetter) {
      case "a":
        return "Aruba";
      case "b":
        return "Bermuda";
      case "c":
        return "Connecticut";
      case "d":
        return "Delaware";
      case "e":
        return "Europe";
      case "f":
        return "Florida";
      case "g":
        return "Georgia";
      case "h":
        return "Hawaii";
      case "i":
        return "Indiana";
      case "j":
        return "Japan";
      case "k":
        return "Kenya";
      case "l":
        return "Louisiana";
      case "m":
        return "Maine";
      case "n":
        return "Netherlands";
      case "o":
        return "Ohio";
      case "p":
        return "Portugal";
      case "q":
        return "Quebec";
      case "r":
        return "Rome";
      case "s":
        return "Spain";
      case "t":
        return "Thailand";
      case "u":
        return "Ukraine";
      case "v":
        return "Virginia";
      case "w":
        return "Wisconsin";
      case "x":
        return "Italy";
      case "y":
        return "Yemen";
      case "z":
        return "Zurich";
    }
  }
  
  //Generate middle name and used AND operator
  function genMiddleName(roadType, favoriteMonth) {
    if (roadType === "road" && favoriteMonth === "january") {
      return `${favoriteMonth}sunny`;
    } else if (roadType === "street" && favoriteMonth === "february") {
      return `${favoriteMonth}rainy`;
    } else if (roadType === "court" && favoriteMonth === "march") {
      return `${favoriteMonth}stormy`;
    } else if (roadType === "avenue" && favoriteMonth === "april") {
      return `${favoriteMonth}snowy`;
    } else if (roadType === "other" && favoriteMonth === "may") {
      return `${favoriteMonth}cloudy`;
    } else {
      return `${favoriteMonth}windy`;
    }
  }
  
  //generate last name (used or operator)
  function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
    if (lastLetter === "a") {
      return "Beach";
    } else if (lastLetter === "b" || lastLetter === "f") {
      return "Pool";
    } else if (lastLetter === "c" || lastLetter === "g") {
      return "Ocean";
    } else if (lastLetter === "d" || lastLetter === "h") {
      return "Shore";
    } else if (lastLetter === "e" || lastLetter === "i") {
      return "Sea";
    } else {
      return "Bay";
    }
  }
  
  //generate suffix
  function genSuffix(favoriteSeason) {
    return `of the ${favoriteSeason}`;
  }
  
  //master function to assemble full name
  function genFullName() {
    //define variables from inputs
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const roadType = document.getElementById("roadType").value;
    const favoriteMonth = document.getElementById("favoriteMonth").value.trim();
    const favoriteSeason = document.getElementById("favoriteSeason").value.trim();
  
    // use or statement to make sure all fields are filled out
    if (!firstName) {
      alert("Invalid. Please fill out all fields");
    } else if (!lastName) {
      alert("Invalid. Please fill out all fields");
    } else if (!roadType) {
      alert("Invalid. Please fill out all fields");
    } else if (!favoriteSeason) {
      alert("Invalid. Please fill out all fields");
    } else if (!favoriteMonth) {
      alert("Invalid. Please fill out all fields.");
    }
  
    //generate each part of the name using helper functions
    const prefix = genPrefix(firstName);
    const newFirstName = genFirstName(firstName);
    const genMiddleNamee = genMiddleName(roadType, favoriteMonth);
    const newLastName = genLastName(lastName);
    const newSuffix = genSuffix(favoriteSeason);
    // functions to capital word
    const capitalizePrefix = tocapitalize(prefix);
    const capitalizedFirstName = tocapitalize(newFirstName);
    const capitalizedMiddleName = tocapitalize(genMiddleNamee);
    const capitalizedLastName = tocapitalize(newLastName);
    const capitalizednewsuffix = tocapitalize(newSuffix);
  
    //combine all parts to create full name
    const fullName = `${capitalizePrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${capitalizednewsuffix}`;
  
    document.getElementById("result").textContent = fullName;
  }
  //capitalizer function
  function tocapitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }   