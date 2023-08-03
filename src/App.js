import "./styles.css";

export default function App() {
  function dictionaryManage() {
    let obj1 = { c: 1, d: 2, e: true };
    let obj2 = { c: true, d: 2, e: 1 };
    for (let i in obj1) {
      console.log(obj1[i]);
      console.log(i);
      console.log(obj2[i]);
      console.log(i);
      console.log(obj1[i] === obj2[i]);
    }
    // for (let i in obj2) {
    // console.log(obj1[i] === obj2[i]);
    // }
  }

  function cakes() {
    let recipe = { flour: 5, milk: 3, sugar: 3 };
    let available = {
      flour: 14,
      eggs: 20,
      oil: 6,
      milk: 2,
      apples: 5,
      sugar: 10,
      cream: 2,
      pears: 17,
      butter: 5,
      nuts: 20,
      chocolate: 17,
      cocoa: 7,
      crumbles: 19
    };

    let min = 999;
    for (const [key] of Object.entries(recipe)) {
      let exists = false;
      for (const [key1] of Object.entries(available)) {
        if (key === key1) {
          exists = true;
          let times = available[key] / recipe[key1];
          console.log(times);
          if (times < min) min = times;
        }
      }
      if (exists === false) {
        min = 0;
        break;
      }
    }
    // console.log(Math.round(min));
    // const map = new Map(Object.entries(available));
    //console.log(map);
    if (min < 1) return 0;
    console.log(min);
  }
  /*
 //let recipe =  {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
     // let available = {sugar: 500, flour: 2000, milk: 2000};
      /*for (let i in recipe) {
        console.log(i);
        console.log(recipe[i]);
        console.log(i);
        console.log(available[i]);
        console.log(" numbers :");
         console.log(recipe[i] === available[i]);
         console.log(" equal :");
         console.log(Object.keys(recipe));
      }*/

  function objectMaps() {
    const people = [
      { id: 1, name: "John" },
      { id: 2, name: "Alice" }
    ];
    const address = [
      { id: 1, peopleId: 1, address: "Some street 1" },
      { id: 2, peopleId: 2, address: "Some street 2" }
    ];

    let op = people.map((e, i) => {
      let temp = address.find((element) => element.id === e.id);
      // if(temp.address) {
      // e.address = temp.address;
      //}

      //  console.log("ho" ,temp);
      return e;
    });
    //console.log("op" ,op);
  }

  function objectKeyFind() {
    function getKeyByValue(object, object2) {
      console.log(
        Object.keys(object).find((key) => object[key] === object2[key])
      );
    }

    const map = { first: "1", second: "2" };
    const map2 = { first: "1", second: "2" };

    console.log(getKeyByValue(map, map2));
  }

  function objectMaps2() {
    const people = [
      { id: 1, name: "John" },
      { id: 2, name: "Alice" }
    ];
    const address = [
      { id: 1, peopleId: 1, address: "Some street 1" },
      { id: 2, peopleId: 2, address: "Some street 2" }
    ];

    let op = people.map((e, i) => {
      let temp = Object.keys(address).find((key) => address[key] === e.id);
      if (temp.address) {
        e.address = temp.address;
      }
      // console.log(e);
      // console.log("ji" , e.address);
      //  console.log("ho" ,temp);
      return e;
    });
    //console.log("op" ,op);
  }
  function cakesFunciono() {
    let recipe = { flour: 5, milk: 3, sugar: 3 };
    let available = {
      flour: 14,
      eggs: 20,
      oil: 6,
      milk: 2,
      apples: 5,
      sugar: 10,
      cream: 2,
      pears: 17,
      butter: 5,
      nuts: 20,
      chocolate: 17,
      cocoa: 7,
      crumbles: 19
    };

    let min = 999;
    for (const [key] of Object.entries(recipe)) {
      let exists = false;
      for (const [key1] of Object.entries(available)) {
        console.log(key, key1);
        console.log(recipe[key], available[key1]);
        if (key === key1) {
          exists = true;
          let times = available[key] / recipe[key1];
          if (times < min) min = times;
        }
      }
      if (exists === false) {
        min = 0;
        break;
      }
    }
    if (min < 1) return 0;
    else return Math.trunc(min);
  }
  cakes();
  return (
    <div className="App">
      <input />
    </div>
  );
}
