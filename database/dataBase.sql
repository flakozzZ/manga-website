CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role INTEGER NOT NULL DEFAULT 0,
    avatar BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE teams(
    team_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team_members(
    team_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (team_id) REFERENCES teams (team_id),
    FOREIGN KEY (book_id) REFERENCES books (book_id)
);

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    orig_title VARCHAR(255),
    title VARCHAR(255),
    banner BYTEA,
    cover BYTEA,
    description VARCHAR(1000),
    publication_year INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE book_chapters(
    book_chapter_id SERIAL PRIMARY KEY,
    book_id INTEGER,
    chapter VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES books (book_id)
);

CREATE TABLE book_pages(
    book_page_id SERIAL PRIMARY KEY,
    book_chapter_id INTEGER,
    page INTEGER,
    image BYTEA,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (book_chapter_id) REFERENCES book_chapters (book_chapter_id)
);

CREATE TABLE book_comments(
    comment_id SERIAL PRIMARY KEY,
    user_id INTEGER,
    book_id INTEGER,
    text VARCHAR(1000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (book_id) REFERENCES books (book_id)
);

CREATE TABLE tags(
    tag_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
);

CREATE TABLE book_tags(
    tag_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY (tag_id) REFERENCES tags (tag_id),
    FOREIGN KEY (book_id) REFERENCES books (book_id)
);

CREATE TABLE genres(
    genre_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
);

CREATE TABLE book_genres(
    genre_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY (genre_id) REFERENCES genres (genre_id),
    FOREIGN KEY (book_id) REFERENCES books (book_id)
);
