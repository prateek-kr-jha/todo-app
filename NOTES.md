two kinds of object property:

- data properties(normal)
- accessor property :
  only be accessed by getter and setter

```
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
```

getter setters can be used as wrapper over actual properties to gain more control over it.

```
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
```

---

class

```
// computed names
class User {

  ['say' + 'Hi']() {
    alert("Hello");
  }

}

new User().sayHi();
```
