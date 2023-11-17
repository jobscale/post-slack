### Setting

```bash
git clone --depth 1 git@github.com:jobscale/post-slack.git
cd post-slack
npm i
cat app/example.env.json > app/env.json
vi app/env.json
```

### Usage

```
npm start -- --text "hello post-slack"
```

or

```
NODE_PATH=./app node app --text "hello post-slack"
```
