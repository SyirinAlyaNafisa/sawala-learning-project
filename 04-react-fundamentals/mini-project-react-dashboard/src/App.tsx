
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

type Lesson = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const initialLessons: Lesson[] = [
  {
    id: 1,
    title: "JavaScript",
    description: "Belajar dasar bahasa JavaScript.",
    completed: false,
  },
  {
    id: 2,
    title: "React Components",
    description: "Belajar membuat komponen React.",
    completed: false,
  },
  {
    id: 3,
    title: "Props",
    description: "Belajar mengirim data ke komponen.",
    completed: false,
  },
  {
    id: 4,
    title: "useState",
    description: "Belajar mengelola state di React.",
    completed: false,
  },
];

function App() {
  const [allLessons, setAllLessons] = useState<Lesson[]>(() => {
    try {
      const saved = localStorage.getItem("lessons");
      return saved ? (JSON.parse(saved) as Lesson[]) : initialLessons;
    } catch {
      return initialLessons;
    }
  });

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("lessons", JSON.stringify(allLessons));
  }, [allLessons]);

  function handleAddLesson() {
    if (!newTitle.trim() || !newDescription.trim()) {
      alert("Judul dan deskripsi harus diisi!");
      return;
    }

    const newLesson: Lesson = {
      id: Date.now(),
      title: newTitle.trim(),
      description: newDescription.trim(),
      completed: false,
    };

    setAllLessons((previous) => [...previous, newLesson]);
    setNewTitle("");
    setNewDescription("");
  }

  function handleDeleteLesson(id: number) {
    setAllLessons((previous) =>
      previous.filter((lesson) => lesson.id !== id)
    );
  }

  function handleToggleLesson(id: number) {
    setAllLessons((previous) =>
      previous.map((lesson) =>
        lesson.id === id
          ? { ...lesson, completed: !lesson.completed }
          : lesson
      )
    );
  }

  const filteredLessons = allLessons.filter((lesson) =>
    `${lesson.title} ${lesson.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const completedCount = allLessons.filter(
    (lesson) => lesson.completed
  ).length;

  return (
    <div className="dashboard">
      <h1>React Dashboard</h1>
      <p>Kelola materi belajar React kamu di sini.</p>

      <div className="summary">
        <div className="card">
          <h3>Total Materi</h3>
          <p>{allLessons.length} materi</p>
        </div>

        <div className="card">
          <h3>Materi Selesai</h3>
          <p>{completedCount} materi</p>
        </div>
      </div>

      <section>
        <h2>Tambah Materi Baru</h2>

        <input
          type="text"
          placeholder="Judul materi..."
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Deskripsi materi..."
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />

        <button onClick={handleAddLesson}>Tambah Materi</button>
      </section>

      <section>
        <h2>Daftar Materi</h2>

        <input
          type="text"
          placeholder="Cari materi..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson) => (
            <Card
              key={lesson.id}
              title={lesson.title}
              description={lesson.description}
              completed={lesson.completed}
              onToggle={() => handleToggleLesson(lesson.id)}
              onDelete={() => handleDeleteLesson(lesson.id)}
            />
          ))
        ) : (
          <p>Materi tidak ditemukan.</p>
        )}
      </section>
    </div>
  );
}

export default App;
