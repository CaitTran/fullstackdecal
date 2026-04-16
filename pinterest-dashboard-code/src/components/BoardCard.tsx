export default function BoardCard({ Board }) {
  return (
    <div className="board-card">
      <img src={board.image_url} alt={board.title} />
      <p>{board.title}</p>
    </div>
  );
}