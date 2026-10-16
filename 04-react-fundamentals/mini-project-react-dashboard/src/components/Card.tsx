
type LessonCardProps = {
  title: string;
  description: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

function Card({
  title,
  description,
  completed,
  onToggle,
  onDelete,
}: LessonCardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      <p className={completed ? "completed" : "pending"}>
        Status: {completed ? "Sudah selesai" : "Belum selesai"}
      </p>

      <button onClick={onToggle}>
        {completed ? "Batalkan" : "Tandai selesai"}
      </button>

      <button
        onClick={onDelete}
        style={{ marginLeft: "10px", backgroundColor: "#dc2626" }}
      >
        Hapus
      </button>
    </div>
  );
}

export default Card;
