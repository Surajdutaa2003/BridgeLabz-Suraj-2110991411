const user = {
    name: "Aman",
    address: {
      city: "Delhi",
      country: "India",
    },
  };
  
  // Without optional chaining
  console.log(user.address.city); // Output: Delhi
  // console.log(user.profile.age); // Error: Cannot read properties of undefined
  
  // With optional chaining
  console.log(user.address?.city); // Output: Delhi
  console.log(user.profile?.age);  // Output: undefined