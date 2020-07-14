DROP DATABASE IF EXISTS codenames;
CREATE DATABASE codenames;
USE codenames;

DROP TABLE IF EXISTS vocabulary;
CREATE TABLE vocabulary (
  id INTEGER NOT NULL AUTO_INCREMENT,
  word VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

INSERT INTO vocabulary (word) VALUES
  ('ball'), ('fish'), ('track'), ('oak'), ('pole'),
  ('sink'), ('apple'), ('spell'), ('kid'), ('cab'),
  ('lemon'), ('scientist'), ('whip'), ('coffee'), ('cat'),
  ('leaf'), ('bike'), ('princess'), ('net'), ('Europe'),
  ('water'), ('yellow'), ('bridge'), ('watermelon'), ('tea'),
  ('mint'), ('embassy'), ('crash'), ('crane'), ('club'),
  ('nail'), ('grace'), ('orange'), ('Rome'), ('nut'),
  ('string'), ('trip'), ('point'), ('millionaire'), ('king'),
  ('Saturn'), ('maple'), ('strike'), ('lock'), ('robot'),
  ('staff'), ('skyscraper'), ('war'), ('grass'), ('stock'),
  ('table'), ('yard'), ('duck'), ('trunk'), ('pitch'),
  ('boot'), ('America'), ('dwarf'), ('cap'), ('fir'),
  ('file'), ('penguin'), ('poison'), ('moon'), ('pilot'),
  ('mouth'), ('vet'), ('dentist'), ('board'), ('glass'),
  ('check'), ('bug'), ('force'), ('game'), ('angel'),
  ('church'), ('life'), ('alien'), ('shot'), ('dance'),
  ('tower'), ('seal'), ('belt'), ('paper'), ('bar'),
  ('head'), ('spot'), ('witch'), ('switch'), ('tick'),
  ('dog'), ('Nasa'), ('Orion'), ('keyboard'), ('photo'),
  ('piano'), ('box'), ('mug'), ('fridge'), ('sandwich');