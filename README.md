### Setting

```bash
git clone --depth 1 https://github.com/jobscale/post-slack.git
cd post-slack
git submodule update --init
cd modules && npm i && cd -
npm i
cp app/example.env.json app/env.json
vi app/env.json
```

### Usage

`npm start -- --text "hello post-slack"`

or

`NODE_PATH=./app:./modules node app --text "hello post-slack"`
