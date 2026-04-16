import { useEffect, useState } from "react";
import API from "../utils/api";
import BoardCard from "./BoardCard";

export default function BoardsSection() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    API.getBoards().then(setBoards);
  }, []);

  return (
    <div>
      <h2>Boards</h2>

      <div className="boards-grid">
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </div>
    </div>
  );
}