import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import axios from "axios";

const MyNotes = () => {
  const [temp, setTemp] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleViewDetails = (id) => {
    if (temp.includes(id)) {
      setTemp(temp.filter((e) => e !== id));
    } else {
      setTemp([...temp, id]);
    }
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Vipul Kumar">
      <Link to="createnote">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
          Create New Note
        </button>
      </Link>

      {notes.map((note) => {
        return (
          <div
            className="mb-4 border"
            key={note._id}
            onClick={() => {
              handleViewDetails(note._id);
            }}
          >
            <div className="flex justify-between bg-[#eee] p-2 items-center">
              <p>{note.title}</p>
              <div className="flex">
                <button
                  href={`/note/${note._id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            {temp.includes(note._id) && (
              <blockquote className="p-4">
                <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-xl">
                  Category - {note.category}
                </span>
                <p className="mt-2">{note.content}</p>
                <footer>Created on - date</footer>
              </blockquote>
            )}
          </div>
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;
