class LocalData {
  static saveData(label, data) {
    localStorage.setItem(label, JSON.stringify(data));
  }

  static fetchData(label) {
    return JSON.parse(localStorage.getItem(label));
  }

}

export default LocalData;
