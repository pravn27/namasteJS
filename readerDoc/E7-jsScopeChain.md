## The Scope Chain, 🔥Scope & Lexical Environment

- Scope in javascript directly related to Lexical Environment

- Run below code and check the output

  ```javascript
  function getName() {
    // can we access userName in getName function? what javascript will do when looking for userName
    console.log(userName);
    // js engine will look for userName in local memory spaces of getName function execution context
  }
  var userName = "Praveen";
  getName();

  // output - Praveen
  // userName is access inside getName function, which defined in outside
  ```

  - ![alt text](images/plw4t0tt.hqi.png)

- Run below JS code, check the output

  ```javascript
  function getName() {
    getUserName();
    function getUserName() {
      console.log(userName);
    }
  }
  var userName = "Praveen";
  getName();
  // output - Praveen
  // userName is access inside getUserName function, defined under another function
  ```

  - ![alt text](images/bd2guswn.4d3.png)
  - ![alt text](images/fk3v0ckl.gt2.png)

- Run below JS code, check the output variable userName not able to access

  ```javascript
  function getName() {
    var userName = "Praveen";
    getUserName();
    function getUserName() {
      console.log(userName); // userName able to access from getName function, print output as Praveen
    }
  }

  getName();
  console.log(userName); // Getting error not defined, userName not able to access from getName function
  ```

  - ![alt text](images/havyc2u2.uf2.png)

- **<mark>What is Scope</mark>**

  - **<mark>Where you can access specific variables, functions in our code</mark>**
  - Scope of variables, functions

  ```javascript
  function getName() {
    var userName = "Praveen"; // what is the scope of variable userName, which means where can access variable userName
    getUserName();
    function getUserName() {
      console.log(userName); // Is userName inside the scope of function getUserName, can access userName inside getUserName function
    }
  }

  getName();
  console.log(userName);
  ```

- Lexical Environment

  - When global execution context created, allocate memory for global variables, functions

  - ![alt text](images/jb2iulwq.jyw.png)

  - **<mark>When ever Execution context created, Lexical Environment also created, along with Lexical Environment of its parent</mark>**
  - **<mark>Lexical Environment is the local memory space along with Lexical Environment of its parent</mark>**
  - Lexical term meaning sequence or hierarchy
  - In technical, lexically means, in below JS code getUserName function lexically setting inside getName function, which is getUserName function physically present inside getName function and getName function lexically inside global scope

    - ```javascript
      function getName() {
        var userName = "Praveen";
        getUserName();
        function getUserName() {
          console.log(userName);
        }
      }

      getName();
      console.log(userName);
      ```

  - ![alt text](images/faxwuyin.2qe.png)
  - ![alt text](images/natasz4q.lby.png)
  - What happens when run below JS code

    - ```javascript
      function getName() {
        var userName = "Praveen";
        getUserName();
        function getUserName() {
          console.log(userName);
          // first look for local memory space for userName, if not find then look into its lexical env of its parent reference
        }
      }

      getName();
      ```

  - The mechanism of finding variables, starting from local memory space, then referring from lexical env of its parent, referring to its parent calling as Scope chain, chain of all lexical env of its parent references

    - ![alt text](images/xiujb5i4.24f.png)

  - Lexical Env, scope chain in actual browser

    - ![alt text](images/oogadlaq.jzk.png)

    - ![alt text](images/qznjboko.ehh.png)

    - ![alt text](images/imagezxdasd.png)

    - ![alt text](images/o4nwq2hg.yqi.png)

    - ![alt text](images/imageddff.png)

    - ![alt text](images/fdfsimage.png)
