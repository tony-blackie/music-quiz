export const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);

  return () => {
    window.removeEventListener("storage", listener);
  };
};

export const getSnapshot = () => {
  return localStorage.getItem("quiz");
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

      this.storage.write(JSON.stringify({ ...parsed, ...data }));
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

const QuizSerializer = new Serializer("quiz");

export default QuizSerializer;
