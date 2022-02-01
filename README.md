// https://image.tmdb.org/t/p/w500/dKdcyyHUR5WTMnrbPdYN5y9xPVp.jpg // Explanation:

// чтоб начать работу, в консоли устанавливаем npm instal axios, копируем 2 - 12 строки с
переменными и экспортом axios // и копируем функцию, которая Вас интересует, на 44-48 строчках вызов
функций, и минимальное количество аргументов

также не забываем подключить в html разметку скрипт index.js <script src="./index.js"></script>

// 1. функция fetchMoviesBySearch дает объект {page, results, total_pages, total_results}, // для
пагинации мы используем { page, total_pages }, // для отрисовки страницы надо забирать results{id,
poster_path, original_title(если планируем // реализовать локализацию, то надо брать title),
genres_ids(список жанров по id с названием находится в функции genresList), // release_date(получаем
строку в формате YYYY - MM - DD, в дальнейшем надо приводить к формату YYYY)}; // аргументами для
функции являются (основной аргумент)"строка поиска", // (второстипенные аргументы) localization,
page, url = "search/movie"("movie" можно заменить на "tv", они разные);

// 2. функция fetchMoviesByID дает объект где нам надо забрать {poster_path, original_title,
overview, vote_avarage, vote_counts, // popularity, title, genres(или genres.id так как мы все равно
будем реализовывать замену id на название)}; // аргументами для функции являются (основной аргумент)
"id = число", // (второстипенные аргументы) "type"(по умолчанию "movie" можно заменить на "tv"),
"language = en-US";

// 3. функция fetchTrendingMovies дает объект {page, results, total_pages, total_results}, // для
пагинации мы используем { page, total_pages }, // для отрисовки страницы надо забирать results{id,
poster_path, original_title(если планируем // реализовать локализацию, то надо брать title),
genres_ids(список жанров по id с названием находится в функции genresList), // release_date(получаем
строку в формате YYYY - MM - DD, в дальнейшем надо приводить к формату YYYY)} // аргументами для
функции являются page, url = "movie/day"("movie" можно заменить на "tv" или "all", они разные; //
"day" можно заменить на "week"), localization;

// 4. для того, чтобы забрать обложку используем https://image.tmdb.org/t/p/w500/${poster_path}

// 5. функция genresList дает объект {id:00, name:"строка, название жанра"}; // аргументами для
функции являются url = "movie"("movie" можно заменить на "tv", по умолчанию "movie");

// 6. localization(по умолчанию всегда "en-US" фунция languageList() дает масивы языков, которые
возможны к использованию, но не всегда есть перевод);
