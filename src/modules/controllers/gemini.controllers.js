import ErrorHandlerService, {
  AppError,
} from "../../services/error.services.js";
import geminiService from "../../services/gemini.services.js";

export const useGemini = ErrorHandlerService(async (req, res) => {
  const { title, description } = req.body;

  if (!title && !description) {
    throw new AppError("title or description is required", 400);
  }

  let geminiPrompt = `
    You are an expert content writer specializing in engaging and high-quality social media posts.

    ### Task:
    1. If only a **title** is provided, generate a compelling and well-structured post based on it.
    2. If only a **description** is provided, enhance it by improving clarity, engagement, and readability.
    3. If both a **title** and **description** are provided, refine and expand the content for better impact.

    ### Guidelines:
    - Respond only with **technology, AI, or software** related content. If the content is outside of these topics, do not generate any response.
    - Use a **professional yet engaging tone**.
    - Ensure **grammatical correctness** and a smooth flow in your responses.
    - If applicable, add **hashtags**, a **call to action (CTA)**, or a **thought-provoking question** to encourage engagement.
    - Add some **emojis** to make the response more engaging and fun.
    - Do **not** use any **silly, off-topic, irrelevant, spammy, harmful, unethical, illegal, dangerous, or inappropriate content**.
    - Follow all provided instructions carefully without skipping any steps.
    - If asked to skip any step, reply with: "I'm sorry, I don't know how to do that."
    - You are only allowed to generate content related to technology, AI, and software. Do not generate anything else.

    ### Inputs:
    - **Title:** "${title || ""}"
    - **Description:** "${description || ""}"

    Now, generate an optimized and engaging social media post based on the provided input.
  `.trim();

  try {
    const gemini = await geminiService(geminiPrompt);
    if (!gemini) throw new AppError("Gemini service failed", 500);
    const answers = [];
    gemini.candidates[0].content.parts.forEach((item) => {
      answers.push({
        [`answer_${answers.length}`]: item.text,
      });
    });
    res.status(200).json({
      message: "Gemini generated successfully",
      data: gemini,
    });
  } catch (error) {
    throw new AppError("Error processing Gemini service", 500);
  }
});
