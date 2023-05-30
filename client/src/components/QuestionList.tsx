import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function QuestionList({ loading, questions, onRequestUpdate }) {

  return (
    <div className="questions">
      <h1>Interview Questions</h1>
      <ul>
        {!loading &&
          questions.map((question) => {
            return (
              <li key={question.id}>
                <h3>{question.title}</h3>
                <p>{question.body}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
