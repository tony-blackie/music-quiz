export const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);

  return () => {
    window.removeEventListener("storage", listener);
  };
};

export const getSnapshot = () => {
  return JSON.stringify({
    quiz: localStorage.getItem("quiz"),
    name: localStorage.getItem("name"),
  });
};

export class Storage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  write(data: string) {
    localStorage.setItem(this.key, data);
  }

  read() {
    return localStorage.getItem(this.key);
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}

export class Serializer {
  storage: Storage;
  constructor(key: string) {
    this.storage = new Storage(key);
  }
  write(data: any) {
    try {
      const currentStorage = this.storage.read();

      if (!currentStorage) {
        this.storage.write(JSON.stringify(data));

        return;
      }

      const parsed = JSON.parse(currentStorage);

      const value =
        typeof data === "object"
          ? JSON.stringify({ ...parsed, ...data })
          : data;

      this.storage.write(value);
    } catch (e) {
      console.log("Got an error while reading the storage: ", e);
    }
  }

  clear() {
    this.storage.clear();
  }

  read() {
    this.storage.read();
  }
}

export const QuizSerializer = new Serializer("quiz");
export const NameSerializer = new Serializer("name");
