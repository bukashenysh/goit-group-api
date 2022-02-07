async function onSearch(e) {
  e.preventDefault();
  clearImageMarkup();
  apiService.query = e.currentTarget.elements.searchQuery.value;
  // apiService.resetPage(refs.btnLoadMore.classList.add('is-hidden'));
  const data = await apiService.fetchImages();
  // if (data.totalHits === 0) {
  //   alertNoImagesFound();
  // }
  // if (data.totalHits !== 0) {
  //   refs.btnLoadMore.classList.remove('is-hidden');
  //   alertImagesFound(data);
  // }
  // if (page > totalPages && data.totalHits !== 0) {
  //   refs.btnLoadMore.classList.add('is-hidden');
  //   alertEndOfSearch();
  // }
  // appendImagesMarkup(data);
}
