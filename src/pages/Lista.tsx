import { useEffect, useState } from "react";
import type { User } from "../types/User";
import UserList from "../components/UserList";
import React from "react";

export default function Lista() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <UserList users={users} />
    </div>
  );
}
