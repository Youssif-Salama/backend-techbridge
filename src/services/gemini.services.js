import { GoogleGenAI } from "@google/genai";
import env from "dotenv";
env.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const geminiService = async (prompt) => {
  return await ai.models.generateContent({
    model: "gemini-2.0-flash-lite-001",
    contents: prompt,
    config: {
      maxOutputTokens: 500,
      temperature: 0.1,
      systemInstruction:"You are TechBridge Ai Model Provided By Gemini, Modified By TechBridge Backend Developer youssif salama and your name is TechBridge Ai Model",
    }
  });
};

export default geminiService;