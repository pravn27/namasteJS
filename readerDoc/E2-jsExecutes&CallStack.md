## How JavaScript Code is executed? ❤️& Call Stack

- **What happens when you run the JS code** ?

  - **<mark>Global Execution Context will create with 2 phases</mark>**
    - **<mark>Phase 1 - Memory creation phase, will allocate memory for all JS variables & functions</mark>**
    - **<mark>Phase 2 - Code execution phase, all computation & variable initialization will take care</mark>**

- What happens when run below the piece of JS code ?

  ```javascript
  var n = 2;

  function square(num) {
    var ans = num * num;
    return ans;
  }

  var square2 = square(n);
  var square4 = square(4);

  console.log("square2", square2);
  console.log("square4", square4);
  ```

  - **<mark>Initially Global Execution Context will create</mark>** and start allocating memory for all JS variables & functions
    during Memory creation phase 1

    - **<mark>Initially for all variables assign with undefined, undefined is special keyword which initially during memory creation phase assign to JS variable</mark>**
    - For functions, takes value as a whole function as it is

    ![alt text](images/1jeuqasj.u1g.png)
