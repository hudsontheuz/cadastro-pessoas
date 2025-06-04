import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import type { User } from "../types/User";
import React from "react";

interface Props {
  onAddUser: (user: User) => void;
}

export default function UserForm({ onAddUser }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: Date.now(),
      nome,
      email,
      telefone,
    };
    onAddUser(newUser);
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </Box>
  );
}
