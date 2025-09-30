export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
}

function buildGeminiPayload(messages: ChatMessage[]) {
  const contents = messages.map((m) => ({
    role: m.role === 'user' ? 'user' : 'model',
    parts: [{ text: m.content }],
  }));
  return { contents } as const;
}

export async function generateGeminiResponse(messages: ChatMessage[]): Promise<string> {
  const apiKey = import.meta?.env?.VITE_GEMINI_API_KEY as string | undefined;
  if (!apiKey) {
    return "I'm running without an API key right now. Please set VITE_GEMINI_API_KEY to enable intelligent responses.";
  }

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildGeminiPayload(messages)),
      }
    );

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Gemini API error: ${resp.status} ${text}`);
    }

    const data = await resp.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
    return text;
  } catch (err) {
    console.error('Gemini error', err);
    return 'There was an issue contacting the assistant. Please try again in a moment.';
  }
}


