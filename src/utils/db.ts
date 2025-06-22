// src/utils/db.ts

import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const addDataToCollection = async (collectionName: string, data: any) => {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const backupData = async () => {
  console.log("Automated backup data process initiated")
}

export const rollbackData = async () => {
console.log("Rollback data process initiated, to previous version")
}
