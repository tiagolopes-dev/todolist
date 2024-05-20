import TodoLogo from "../../assets/Logo.svg";
import { AiOutlineFileSearch } from "react-icons/ai";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddtask: (taskTitle: string) => void;
}

export function Header({ onAddtask }: Props) {
  const [title, setTitle] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddtask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={TodoLogo} />

      <form className={styles.newTaskFrom} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlineFileSearch size={20} />
        </button>
      </form>
    </header>
  );
}
