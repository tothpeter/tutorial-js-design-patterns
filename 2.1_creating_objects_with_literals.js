var obj = {
  firstName: "Toma"
};

// Old, we dont use it
// var obj = new Object()

obj.firstName = "Toma"
obj["firstName"] = "Toma"
obj["last Name"] = "Toma"
obj["true"] = "Toma"

Object.defineProperty(obj, "country", {
  // You can set only readable or writeable etc. options
  value: "HUN"
});


Object.defineProperties(obj, {
  twitter: {
    value: "tomaaa08"
  },
  email: {
    value "email@email.com"
  }
});