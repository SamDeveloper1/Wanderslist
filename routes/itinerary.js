const express = require("express");
const router = express.Router({mergeParams: true});
const {isLoggedIn} = require("../middleware");
const {GoogleGenerativeAI} = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
router.post("/generate", isLoggedIn,async(req,res)=>{
    try {
         const {days, location, country} = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash" });
    const prompt = `Create a detailed ${days}-day trip itinerary for ${location}, ${country}. 
    Format the response as JSON only, no extra text, like this:
    {
      "location": "${location}, ${country}",
      "days": [
        {
          "day": 1,
          "title": "Day title",
          "morning": "Morning activity description",
          "afternoon": "Afternoon activity description", 
          "evening": "Evening activity description",
          "food": "Local food to try today",
          "tip": "One helpful travel tip for the day"
        }
      ]
    }
    Make it realistic, specific to the location with actual place names.`;
      const modelsToTry = ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3-flash-preview"];
        let result;
        let success = false;
        for (const modelName of modelsToTry) {
            try {
                // 2. Added generationConfig to force the model to respond ONLY in raw JSON
                const model = genAI.getGenerativeModel({ 
                    model: modelName,
                    generationConfig: { responseMimeType: "application/json" }
                });
                
                result = await model.generateContent(prompt);
                success = true;
                break; // Break out of the loop if execution is successful
                
            } catch (err) {
                console.warn(`Model ${modelName} encountered an issue. Status: ${err.status}`);
                
                // If it is a temporary 503 (Traffic overload), continue the loop to try the next model
                if (err.status === 503) {
                    continue;
                }
                // If it's a critical error (like an invalid API Key), throw it immediately
                throw err;
            }
        }
        if (!success) {
            return res.status(503).json({
                success: false, 
                message: "Gemini servers are experiencing unusually high traffic. Please wait a moment and try again."
            });
        }
        const text = result.response.text();
     // Clean response and parse JSON
    const itinerary = JSON.parse(text);
    res.json({success: true, itinerary});

        
    } catch (err) {
        console.log("Gemini Error",err);
        res.status(500).json({success: false, message: err.message});

    }
   
})
module.exports = router;