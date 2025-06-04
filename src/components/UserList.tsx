import { List, ListItem, ListItemText } from "@mui/material";
import type { User } from "../types/User";

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText
            primary={user.nome}
            secondary={`${user.email} - ${user.telefone}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
