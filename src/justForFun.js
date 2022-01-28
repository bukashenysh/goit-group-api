window.addEventListener('keydown', generatorId);

function generatorId(e) {
  if (e.code === 'KeyQ') {
    const id = Math.floor(Math.random() * 1000000);
    console.log(id);
    fetchMoviesById(id).then(data => console.log(data.title));
  };
};