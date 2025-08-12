const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors({ origin: (process.env.CORS_ORIGIN || '*') }));
app.use(express.json());
app.use(morgan('dev'));

// rotas de sanidade
app.get('/', (_, res) => res.send('API jogos ON. Use /games'));
app.get('/health', (_, res) => res.json({ ok: true }));

// rotas principais
const gameRoutes = require('./routes/gameRoutes'); // deve existir
app.use('/games', gameRoutes);

const PORT = Number(process.env.PORT || 3011);
app.listen(PORT, () => console.log(`🎮 API rodando em http://localhost:${PORT}`));
