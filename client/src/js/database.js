import { openDB } from 'idb';
import { header } from './header';

const dbName = "jate";
const storeName = "jate";
const contentKey = 1;

const initdb = async () =>
  openDB(dbName, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB(dbName);
  const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
  const key = await store.put({ content, id: contentKey })
  console.log('Inserted content with key ', key, 'data: ', content)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB(dbName);
  const store = db.transaction(storeName, 'readwrite').objectStore(storeName);
  const data = await store.get(contentKey);
  if (!data) {
    return header
  }
  console.log('Got Data ', contentKey, 'data: ', data.content)
  return data.content;
}
initdb();
