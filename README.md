# artillery-project


## Installation​
Install Artillery via npm:
```bash
npm install -g artillery@latest
```

Artillery can also be installed as a dev dependency of a Node.js project with:
```bash
npm install -D artillery@latest
```

## Checking your installation​
If you used npm to install Artillery globally, run:
```bash
artillery dino
```
If you installed Artillery locally for a project, run the following command from the root folder of that project:
```bash
$(npm bin)/artillery dino
```


## Running YML file​
If you used npm to install Artillery globally, run:
```bash
artillery run artillery/(filename).yml
```
If you installed Artillery locally for a project, run the following command from the root folder of that project:
```bash
$(npm bin)/artillery run artillery/(filename).yml
```
