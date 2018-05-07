# NodeJS installation

**Typescript** requires its own compiler to transpile code from TypeScript to JavaScript.

The TypeScript compiler is available as a node package and can be invoked from command line.

To install Node please download the binary from [NodeJS](https://nodejs.org/en/download/) website or install using platform based package manager like `apt-get, yum-install` etc.

To verify your _NodeJS_ installation please run the following commands:

```javascript
//verify node version
node -v  //v9.5.0

//verify npm version
npm -v  //6.0.0
```

# TypeScript compiler installation

The command-line _TypeScript_ compiler can be installed as a Node.js package.

```javascript
npm install -g typescript
```

To verify _TypeScript_ compiler verification please run:

```javascript
tsc -v
```

For compiling TypeScript files to JavaScript please run:

```javascript
tsc yourFileName.ts
```

Please note that the TypeScript compiler generates no output if the transpilation was successful.\
In other words the compiler will only print some output to the command line in case of compilation errors or warnings.