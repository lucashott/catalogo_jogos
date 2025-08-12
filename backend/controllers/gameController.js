const pool = require('../db');

const isValidGame = (payload) => {
  const { nome, tipo, ano } = payload || {};
  if (!nome || !tipo || ano === undefined) return { ok: false, msg: 'Campos obrigatórios: nome, tipo, ano.' };
  const anoNum = Number(ano);
  if (!Number.isInteger(anoNum) || anoNum < 1950 || anoNum > 2100) {
    return { ok: false, msg: 'Ano inválido. Use um inteiro entre 1950 e 2100.' };
  }
  return { ok: true };
};

exports.getAll = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM game ORDER BY id DESC');
    return res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao listar jogos.' });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM game WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Jogo não encontrado.' });
    return res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao buscar jogo.' });
  }
};

exports.create = async (req, res) => {
  try {
    const validate = isValidGame(req.body);
    if (!validate.ok) return res.status(400).json({ error: validate.msg });

    const { nome, tipo, ano } = req.body;
    const [result] = await pool.query('INSERT INTO game (nome, tipo, ano) VALUES (?, ?, ?)', [nome, tipo, Number(ano)]);
    const [rows] = await pool.query('SELECT * FROM game WHERE id = ?', [result.insertId]);
    return res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao criar jogo.' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const validate = isValidGame(req.body);
    if (!validate.ok) return res.status(400).json({ error: validate.msg });

    const { nome, tipo, ano } = req.body;
    const [result] = await pool.query('UPDATE game SET nome = ?, tipo = ?, ano = ? WHERE id = ?', [nome, tipo, Number(ano), id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Jogo não encontrado.' });

    const [rows] = await pool.query('SELECT * FROM game WHERE id = ?', [id]);
    return res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao atualizar jogo.' });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM game WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Jogo não encontrado.' });
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro interno ao remover jogo.' });
  }
};