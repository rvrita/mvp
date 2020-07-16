DROP DATABASE IF EXISTS codenames;
CREATE DATABASE codenames;
USE codenames;

DROP TABLE IF EXISTS vocabulary;
CREATE TABLE vocabulary (
  id INTEGER NOT NULL AUTO_INCREMENT,
  word VARCHAR(255) NOT NULL,
  `collection` VARCHAR(255) NOT NULL DEFAULT 'built-in',
  PRIMARY KEY (word, collection)
);

INSERT INTO vocabulary (word) VALUES
  ('ball'), ('fish'), ('track'), ('peach'), ('pole'),
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
  ('dog'), ('NASA'), ('Orion'), ('keyboard'), ('photo'),
  ('piano'), ('box'), ('mug'), ('fridge'), ('sandwich');


  INSERT INTO vocabulary (collection, word) VALUES
  ('rita1', 'broccoli'), ('rita1','Canada'), ('rita1', 'rabbit'), ('rita1', 'chess'), ('rita1','season'),
  ('rita1', 'pillow'), ('rita1','poem'), ('rita1', 'party'), ('rita1', 'oak'), ('rita1','sandcastle'),
  ('rita1', 'chocolate'), ('rita1','rainbow'), ('rita1', 'elf'), ('rita1', 'cheerleader'), ('rita1','goblin'),
  ('rita1', 'cowboy'), ('rita1','river'), ('rita1', 'jet'), ('rita1', 'gingerbread'), ('rita1','lizard'),
  ('rita1', 'pear'), ('rita1','guitar'), ('rita1', 'nose'), ('rita1', 'engine'), ('rita1','spoon'),
  ('rita1', 'jeans'), ('rita1','puppy'), ('rita1', 'dot'), ('rita1', 'lollipop'), ('rita1','glasses');