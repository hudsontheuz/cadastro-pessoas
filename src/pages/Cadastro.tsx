import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";
import type { User } from "../types/User";
import React from "react";

export default function Cadastro() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const addUser = (user: User) => {
    const updated = [...users, user];
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Cadastro de Usuários</h2>
      <UserForm onAddUser={addUser} />
    </div>
  );
}
