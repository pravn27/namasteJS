## BLOCK SCOPE & Shadowing in JS 🔥

- What is **<mark>Block in Javascript</mark>** ?

  - Block and Scope are different things
  - **<mark>Block is defined by curly braces { }</mark>**, why & where do we use it ?
  - Block is also known as Compound Statement
    - **<mark>Block is used to combine multiple JS statements into one group</mark>**
    - why do we make group ?
      - ![alt text](images/omic01ty.pjh.png)
    - We can use group of statement where JS expects single statement
  - **<mark>What is Block Scope</mark>** ?

    - What are the variables, functions access inside the block { }
    - Check in below code

      - ```javascript
        {
          var a = 1;
          let b = 2;
          const c = 3;
        }
        ```
      - variable let & const b, c are in blocked scope
      - variable a in global scope

    - ![alt text](images/xxasaimage.png)
    - ![alt text](images/ujrosjd4.nuo.png)
    - let & const can not be access outside of block scope, where as var can access the outside of block scope
      - ![alt text](images/m1lxqdtj.tzo.png)

  - **<mark>What is Shadowing in Javascript</mark>**?

    - When same variable defined outside the block scope & inside block scope, how variables will shadow and provide access
    - ![alt text](images/isaamage.png)
    - ![alt text](images/obkp55jn.wxb.png)
    - Observe in case of let & const
      - ![alt text](images/xtjb1qrc.j34.png)
      - ![alt text](images/r4gns4u0.hjo.png)
      - Separate memory space for block scope variables

  - Block scope follows the lexical scope, which is lexically present, and follow the lexical scope chain pattern
    - ![alt text](images/2kvkqsno.zg1.png)
