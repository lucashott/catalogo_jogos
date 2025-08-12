module.exports = (req, res, next) => {
    const { nome, tipo, ano } = req.body;
  
    if (!nome || !tipo || ano === undefined) {
      return res.status(400).json({ error: 'Campos obrigatórios: nome, tipo, ano' });
    }
  
    if (typeof ano !== 'number' || ano < 1950 || ano > 2100) {
      return res.status(400).json({ error: 'Ano inválido' });
    }
  
    next();
  };
  