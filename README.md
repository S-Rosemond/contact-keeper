# Contact Keeper

> Full stack MERN contact manager with React hooks, context & JWT authentication. Part of my React course on Udemy.

This is the full app. The API can be found [here](https://github.com/bradtraversy/contact_keeper_api) with documented endpoints

## Usage

Install dependencies

```bash
npm install
cd client
npm install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
----------------------------------------------------------------
## Uses Argon2 instead of Bcryptjs

Argon2 installation [guide](https://www.npmjs.com/package/argon2 "argon2 npm")

code refactored more closely to Brad's Node masterclass course. Some functions/functionality are taken directly from that course. 