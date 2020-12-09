DROP TABLE IF EXISTS poet CASCADES;
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