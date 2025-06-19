import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Response } from 'express';

admin.initializeApp();
const db = admin.firestore();

// 🔄 Reusable CORS setup
function setCorsHeaders(res: Response) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}

// ✅ Get all users
export const getUsers = functions.https.onRequest(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Add a user
export const addUser = functions.https.onRequest(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const { name, email } = req.body;

    if (!name || !email) {
      res.status(400).send('Missing name or email');
      return;
    }

    const newUser = await db.collection('users').add({ name, email });
    res.status(201).json({ id: newUser.id });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Delete a user
export const deleteUser = functions.https.onRequest(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'DELETE') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      res.status(400).send('Missing or invalid ID');
      return;
    }

    await db.collection('users').doc(id).delete();
    res.status(200).send(`User ${id} deleted successfully`);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
});