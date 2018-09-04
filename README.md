### Setting

```bash
git clone --depth 1 https://github.com/jobscale/post-slack.git
cd post-slack
git submodule init
cd modules && npm i && cd -
npm i
cp app/config/example.env.json app/config/env.json
vi app/config/env.json
```

### Usage

`npm start -- --text "hello post-slack"`

or

`NODE_PATH=./app/config:./app/modules node app --text "hello post-slack"`
