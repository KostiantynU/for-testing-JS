const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const nam of this.potions) {
      if (nam.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const nam of this.potions) {
      const potionIndex = this.potions.indexOf(nam);
      if (nam.name === potionName) {
        this.potions.splice(potionIndex, 1);
      }
    }
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    console.log(this.potions);
    for (const names of this.potions) {
      console.log(names.name === oldName);
      console.log('names[oldName]', names.name[oldName]);
      // console.log(this.potions.includes(names.name.oldName));
      // const potionIndex = this.potions.indexOf(names[oldName]);
      console.log('this.potions.indexOf(names.oldName)', this.potions.indexOf(names.name[oldName]));
      // if (potionIndex === -1) {
      //   return `Potion ${oldName} is not in inventory!`;
      // }

      // this.potions.splice(potionIndex, 1, newName);
    }
  },
  // Change code above this line
};
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
