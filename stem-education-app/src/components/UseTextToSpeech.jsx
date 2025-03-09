// hooks/useTextToSpeech.jsx
import { useCallback } from "react";

function UseTextToSpeech() {
  const speak = useCallback((text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const cancel = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  return { speak, cancel };
}

export default UseTextToSpeech;