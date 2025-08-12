CREATE DATABASE IF NOT EXISTS jogos CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE jogos;

CREATE TABLE IF NOT EXISTS game (
  id   INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  tipo VARCHAR(50)  NOT NULL,
  ano  INT          NOT NULL
);

-- 2 registros de exemplo
INSERT INTO game (nome, tipo, ano) VALUES
('The Legend of Zelda: Ocarina of Time', 'Aventura', 1998),
('Super Mario World', 'Plataforma', 1990);