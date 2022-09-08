CREATE DATABASE cardbases;

use cardbases;

create table cards
(
Id int NOT NULL AUTO_INCREMENT,
title varchar(200),  
answer1 varchar(200),
answer2 varchar(200),
answer3 varchar(200),
answer4 varchar(200),
PRIMARY KEY(Id)
);

INSERT INTO cards (ID, title, answer1, answer2, answer3, answer4) 
VALUES 
('1', '¿En qué año llegó el hombre a la Luna?', 'En el año 1969.', 'En el año 19670', 'En el año 1989', 'En el año 1968'), 
('2', '¿Quién fue la primera mujer en ganar una medalla olímpica en el año 1900?', 'Elliotte Cooper.', 'Mariana Escobar', 'Charlotte Cooper.', 'Makoto Ushimoto'),  
('3', '¿En qué año se disolvió la Unión Soviética?', 'En el año 1960', 'En el año 1990', 'En el año 1991', 'En el año 1993'),
('4', '¿Qué carabela no regresó del primer viaje de Colón al Nuevo Mundo?', 'La Santa María.', 'La Pinta.', 'La Santa Niña.', 'La Inmaculada.'),
('5', '¿Quién era el emperador de Roma cuando murió Jesús de Nazaret?', 'Neron', 'Augustus', 'Pilatos', 'Tiberio.'),
('6', '¿En qué país se encuentra el pico Aconcagua?', 'Venezuela', 'Argentina.', 'China', 'Chile'),
('7', '¿En qué mes el Sol está más cerca de la Tierra?', 'Octubre', 'Diciembre', 'Mayo', 'Julio'),
('8', '¿Cuál es la velocidad de la luz en el vacio?', '300.000 kilómetros por segundo.', '3
kilómetros por segundo.', '300 kilómetros por segundo.', '300.000 metros por segundo.'),
('9', '¿Qué significan las siglas ADN?', 'Ácido desoxirribonucleico.', 'Ácido desoxibonucleico.', 'Ácido ribonucleico.', 'Ácido dioxirribonucleico.'),
('10', '¿En qué ciudad vive el mago de Oz?', 'La ciudad Esmeralda.', 'La ciudad del Camino Amarillo.', 'La ciudad Diamante.', 'La ciudad Rubi.'),
('11', '¿En qué deporte destacó Carl Lewis?', 'Alpinismo', 'Atletismo.', 'Halterrofilia', 'Salto Doble'),
('12', '¿Dónde se inventó el Ping-Pong?', 'Inglaterra.', 'Peru', 'Dinamarca', 'USA'),
('13', '¿Qué actor interpreta a Leonard Hofstadter en la popular serie “The Big Bang Theory”?', 'Sheldom Cooper', 'Mario Salazar', 'Johnny Galecki', 'Sean Connery'),
('14', '¿Cuál fue la primera película en ganar el Óscar a “Mejor película”?', 'Rocky', 'Atrapame si puedes', 'ET', 'Alas'),
('15', '¿Qué famoso youtuber español tiene su propia serie de animación?', 'AuronPlay', 'Lolito', 'Mangel', 'El Rubius'),
('16', '¿Quién interpretó a Hitler en “El gran dictador”?', 'Robert Redford', 'Cary Grant.', 'Charles Chaplin', 'Gary Cooper');


describe cards;