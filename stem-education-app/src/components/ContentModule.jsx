import React from "react";

function ContentModule({ speak, cancel }) {
  const content = "Welcome to our accessible education app! This content is designed to be accessible for all users.STEM education for students with disabilities aims to make Science, Technology, Engineering, and Mathematics (STEM) subjects accessible and inclusive. It focuses on Universal Design for Learning (UDL), which offers flexible teaching methods, assistive technology to support independent learning, and a modified curriculum tailored to diverse needs. Inclusive instruction ensures that educators use strategies to accommodate various disabilities, and hands-on, real-world learning experiences foster problem-solving skills. This approach helps students develop confidence, critical thinking, and prepares them for careers in STEM fields, promoting equal opportunities for all.";

  return (
    <main id="content" aria-labelledby="content-heading">
      <h2 id="content-heading">Educational Content</h2>
      <p>{content}</p>
      <button onClick={() => speak(content)} aria-label="Start reading content">
        Read Aloud
      </button>
      <button onClick={cancel} aria-label="Stop reading content">
        Stop
      </button>
    </main>
  );
}

export default ContentModule;