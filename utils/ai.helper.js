const { GoogleGenerativeAI } = require("@google/generative-ai");

// Make sure to load the API key from the environment
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// Use the fast and capable flash model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.generateSummary = async (content) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return "API key missing. Unable to generate summary.";
    }

    const cleanContent = content.replace(/<[^>]*>?/gm, "").trim();

    const prompt = `
      You are an expert article editor and copywriter.
      Read the following article content and write a single, compelling 1-2 sentence summary that would make a reader want to click and read more. 
      Do not include any pleasantries, just return the summary text itself.

      Article Content:
      ${cleanContent.substring(0, 3000)}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();

  } catch (err) {
    console.error("AI Summary Error:", err);
    return "An interesting new article that explores a variety of exciting topics.";
  }
};

exports.improveContent = async (content, action = 'rewrite') => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return `<p><em>Error: GEMINI_API_KEY is not configured on the backend.</em></p><br/>${content}`;
    }

    const cleanContent = content.replace(/<[^>]*>?/gm, "").trim();
    let prompt = "";

    switch (action) {
      case 'title':
        prompt = `Generate a single, catchy, and professional title for the following article. Do not include quotes or any extra text, just the raw title.
        
        Article: ${cleanContent.substring(0, 2000)}`;
        break;

      case 'grammar':
        prompt = `You are an expert copy editor. Please fix any grammar, spelling, and spelling errors in the following HTML content. 
        Keep the original meaning entirely intact, and preserve the HTML structure exactly. Return ONLY the corrected HTML.
        
        Content:
        ${content}`;
        break;

      case 'concise':
        prompt = `You are an expert copy editor. Make the following HTML content significantly more concise and punchy. Remove fluff and wordiness.
        Preserve the core meaning and preserve the HTML structure. Return ONLY the corrected HTML.
        
        Content:
        ${content}`;
        break;

      case 'rewrite':
      default:
        prompt = `You are an expert writer. Rewrite the following HTML content so that it flows better and is clearer to read. 
        Enhance the vocabulary slightly but keep the original intent and tone. Preserve the HTML formatting. Return ONLY the rewritten HTML.
        
        Content:
        ${content}`;
        break;
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();

  } catch (err) {
    console.error("AI Improvement Error:", err);
    return `<p><em>Error generating AI response. Please try again later.</em></p><br/>${content}`;
  }
};
