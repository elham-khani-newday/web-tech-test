/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

export const outcomes = ['player-1-wins', 'player-2-wins', 'draw'] as const;
export type Outcome = typeof outcomes[number];

app.post('/play', (req, res) => {
  // TODO get players' selection from request
  // TODO add game logic here and return outcome

  res.send(200).json('draw');
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
