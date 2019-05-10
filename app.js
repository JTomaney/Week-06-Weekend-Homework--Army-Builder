document.addEventListener(`DOMContentLoaded`, function () {
  console.log(`JavaScript has loaded`);

  const addUnitForm = document.querySelector(`#form`);
  // console.log(addUnitForm);
  addUnitForm.addEventListener(`submit`, handleAddUnit)

  const deleteArmyList = document.querySelector(`#delete-all`);
  deleteArmyList.addEventListener(`click`, handleDelete)
})

const handleAddUnit = function (event) {
  event.preventDefault();
  const armyList = document.querySelector(`#army-list`);
  const newUnit = createNewUnit(event.target)
  armyList.appendChild(newUnit);
  event.target.reset();
}

const createNewUnit = function (target) {
  const newUnit = document.createElement(`li`);
  newUnit.classList.add(`new-unit`);

  const unitName = document.createElement(`h3`);
  unitName.textContent = target.name.value;
  newUnit.appendChild(unitName);

  const unitWargear = document.createElement(`h4`);
  unitWargear.textContent = target.wargear.value;
  newUnit.appendChild(unitWargear);

  const unitPoints = document.createElement(`p`);
  unitPoints.textContent = target.points.value;
  newUnit.appendChild(unitPoints);

  return newUnit;
}

const handleDelete = function () {
  const armyList = document.querySelector(`#army-list`);
  armyList.innerHTML = ``;
}
