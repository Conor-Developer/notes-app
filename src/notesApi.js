class notesApi {
  loadData(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = notesApi;
