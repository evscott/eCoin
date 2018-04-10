--- Set Up ---

After clone and when in terminal, run -->

npm init

npm i nodemond --save-dev 
npm i --save express body-parser ws

--- To Test ---

npm run test

--- Connect Peers to P2P Network ---

first:

npm run dev

second:

HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://locaost:5001 npm run dev

third:

HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev

