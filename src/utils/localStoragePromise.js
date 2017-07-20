export default {
  setItem(key, val) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, val);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },

  getItem(key) {
    return new Promise((resolve, reject) => {
      try {
        resolve(localStorage.getItem(key));
      } catch (err) {
        reject(err);
      }
    });
  },

  removeItem(key) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  },

  clear() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
};
