### Setting

```bash
git clone --depth 1 https://github.com/jobscale/post-slack.git
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
node app/index.js --text "hello post-slack"
```
