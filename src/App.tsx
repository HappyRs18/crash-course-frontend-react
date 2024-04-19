import { ChangeEvent, useState } from "react";
import "./App.css";
import { Animal } from "./models/animal";
import { FpButton } from "./components/FpButton";

function App() {
  const [count, setCount] = useState(0);
  const [animalObject, setAnimalObject] = useState<Animal>({
    name: "",
    countLegs: 2,
  } as Animal);

  const [animalList, setAnimalList] = useState([
    new Animal(1, "Dog", 4),
    new Animal(2, "Ape", 2),
    new Animal(3, "Cat", 4),
  ]);

  function increaseCount() {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  }

  function decreaseCount() {
    setCount((currentCount) => {
      currentCount--;
      return currentCount;
    });
  }

  function addAnimal(newObj: Partial<Animal>): Animal {

    if (newObj == null || newObj.name == null || newObj.countLegs == null)
      throw new Error("Missing arg");

    const newAnimal = new Animal(animalList.length + 1, newObj.name, newObj.countLegs);

    const modifiedList: Animal[] = [...animalList, newAnimal];

    setAnimalList(modifiedList);

    return newAnimal;
  }

  function removeAnimal(id: number): void {
    const elementToRemove = animalList.find((x) => x.id === id);

    if (elementToRemove == null) return;

    const listWithoutRemovedElement = animalList.filter(
      (x) => x.id !== elementToRemove.id
    );

    setAnimalList(listWithoutRemovedElement);
  }

  const styleForInputRow: React.CSSProperties = { marginTop: "1rem" };

  function handleChange(value: ChangeEvent<HTMLInputElement>): void {
    const patchObj = { 
      [value.target.name]: value.target.value 
    };

    const modifiedObj = {...animalObject, ...patchObj}

    setAnimalObject(modifiedObj as Animal);
  }

  return (
    <>
      <div>
        <button type="button" onClick={(event) => decreaseCount()}>
          -
        </button>
        &nbsp;
        {count}
        &nbsp;
        <button type="button" onClick={(event) => increaseCount()}>
          +
        </button>
      </div>

      {animalList.map((x) => {
        return (
          <div className="animal-row">
            <div>{x.name}</div>
            <div>{x.countLegs}</div>
            <div>
              <button type="button" onClick={() => removeAnimal(x.id)}></button>
            </div>
          </div>
        );
      })}

      <div className="animal-row" style={styleForInputRow}>
        <input
          type="text"
          name="name"
          value={animalObject.name}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="number"
          name="countLegs"
          value={animalObject.countLegs}
          onChange={(event) => handleChange(event)}
        />
        <button type="button" onClick={() => addAnimal({name: animalObject.name, countLegs: animalObject.countLegs})}>
          +
        </button>
      </div>

      <div>
        <FpButton label={"FipoButton"} width={180}></FpButton>
      </div>
    </>
  );
}

export default App;
