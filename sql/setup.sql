DROP TABLE IF EXISTS poet CASCADE;
DROP TABLE IF EXISTS poems;

CREATE TABLE poet (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    name TEXT NOT NULL UNIQUE,
    date_of_birth INTEGER NOT NULL,
    date_of_death INTEGER
)

CREATE TABLE poems (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    author TEXT REFERENCES poet(name),
    title TEXT NOT NULL, 
    text TEXT NOT NULL
)

-- INSERT INTO poet (name, date_of_birth, date_of_death) VALUES ('Sylvia Plath', 1932, 1963);
-- SELECT * FROM poet;

-- INSERT INTO poems (author, title, text) 
-- VALUES ('Sylvia Plath', 'Metaphors', 'I’m a riddle in nine syllables,
-- An elephant, a ponderous house,
-- A melon strolling on two tendrils.
-- O red fruit, ivory, fine timbers!
-- This loaf’s big with its yeasty rising.
-- Money’s new-minted in this fat purse.
-- I’m a means, a stage, a cow in calf.
-- I’ve eaten a bag of green apples,
-- Boarded the train there’s no getting off.');
-- SELECT * FROM poems;