SELECT name FROM public.tag; 

SELECT username, role FROM public.users;

SELECT books.title FROM public.books;


SELECT public.books.title, public.book_comments.text, public.users.username as name
	FROM public.book_comments
	JOIN public.books ON public.book_comments.book_id = public.books.book_id
	JOIN public.users ON public.book_comments.user_id = public.users.user_id
	ORDER BY books.title;

SELECT books.title, tags.name
	FROM public.book_tags
	JOIN public.books on public.book_tags.book_id = public.books.book_id
	JOIN public.tags on public.book_tags.tag_id = public.tags.tag_id
	ORDER BY public.tags.name;

SELECT public.teams.title, public.users.user_id
	FROM public.team_members
	JOIN public.teams ON public.team_members.team_id = public.teams.team_id
	JOIN public.users ON public.team_members.user_id = public.users.user_id;
	
SELECT public.book_chapters.chapter, COUNT(public.book_pages.page)
	FROM public.book_pages
	JOIN public.book_chapters ON public.book_pages.book_chapter_id = public.book_chapters.book_chapter_id
	GROUP BY public.book_chapters.chapter, public.book_chapters.book_chapter_id
	ORDER BY public.book_chapters.book_chapter_id;

SELECT public.genres.name AS genre, AVG(LENGTH(books.description)) AS avg_description_length
	FROM public.genres
	LEFT JOIN public.book_genres ON genres.genre_id = book_genres.genre_id
	LEFT JOIN public.books ON book_genres.book_id = books.book_id
	GROUP BY public.genres.name;

SELECT public.users.username, COUNT(public.page_comments.comment_id) AS num_comments
	FROM public.users
	LEFT JOIN public.page_comments ON public.users.user_id = public.page_comments.user_id
	GROUP BY public.users.username;

SELECT public.reading_progress.status, SUM(public.book_pages.page) AS total_pages_read
	FROM public.reading_progress 
	LEFT JOIN public.book_pages ON public.reading_progress.book_page_id = public.book_pages.book_page_id
	GROUP BY public.reading_progress.status;

SELECT *
	FROM public.book_likes
	JOIN books on books.book_id = book_likes.book_id
	JOIN users on users.user_id = book_likes.user_id
	WHERE like_dislike = true;

SELECT public.books.title, public.book_comments.text, public.users.username as name
	FROM public.book_comments
	JOIN public.books ON public.book_comments.book_id = public.books.book_id
	JOIN public.users ON public.book_comments.user_id = public.users.user_id
	WHERE public.users.user_id = (SELECT public.book_comments.user_id
								 FROM book_comments
								 WHERE LENGTH(text) < 5)
	ORDER BY books.title;
	
SELECT public.books.title, public.book_comments.text, public.users.username as name
	FROM public.book_comments
	JOIN public.books ON public.book_comments.book_id = public.books.book_id
	JOIN public.users ON public.book_comments.user_id = public.users.user_id
	WHERE public.users.user_id = (SELECT user_id
								 FROM users
								 WHERE username = 'User1') 
	ORDER BY books.title

SELECT books.title
	FROM public.book_tags
	JOIN public.books on public.book_tags.book_id = public.books.book_id
	WHERE public.book_tags.tag_id = (SELECT tag_id FROM tags WHERE name = 'tag2')
	GROUP BY public.books.title;