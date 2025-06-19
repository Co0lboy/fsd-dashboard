'use client';

import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

const API_GET = 'https://us-central1-fsd-dashboard-backend.cloudfunctions.net/getUsers';
const API_ADD = 'https://us-central1-fsd-dashboard-backend.cloudfunctions.net/addUser';
const API_DELETE = 'https://us-central1-fsd-dashboard-backend.cloudfunctions.net/deleteUser';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await fetch(API_GET);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(API_ADD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await fetch(`${API_DELETE}?id=${id}`, {
        method: 'DELETE',
      });
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      {/* Add User Form */}
      <form onSubmit={handleAddUser} className="mb-6 bg-white p-4 rounded shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border px-4 py-2 rounded w-full"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="border px-4 py-2 rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </form>

      {/* User List Table */}
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2" colSpan={3}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}