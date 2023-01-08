import {
  collection,
  addDoc,
  DocumentReference,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

export const saveResponse = async (
  data: object,
): Promise<DocumentReference> => {
  const res = await addDoc(collection(db, "form-responses"), data);
  return res;
};

export const getResponses = async (): Promise<QuerySnapshot> => {
  const res = await getDocs(collection(db, "form-responses"));
  return res;
};
