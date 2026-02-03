/* HackerStack Design System - Gradient References
   Saved: 2026-02-03
*/

export const gradients = {
  // User's favorite gradients (from 2026-02-03)
  userFavorites: [
    {
      name: "Blue to Green",
      css: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
      description: "Fresh, water-like gradient",
    },
    {
      name: "Deep Ocean",
      css: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
      description: "Dark blue ocean vibes",
    },
    {
      name: "Pink to Blue",
      css: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
      description: "Vibrant sunset vibes",
    },
  ],

  // Our primary purple gradient (NEW ACCENT COLOR)
  primary: {
    name: "Purple Vibes",
    css: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    description: "Our main accent gradient - Purple to Pink",
    hexCodes: ["#8B5CF6", "#EC4899"],
  },

  // Alternative purple options
  alternatives: [
    {
      name: "Classic Purple",
      css: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Traditional purple gradient",
    },
    {
      name: "Neon Purple",
      css: "linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)",
      description: "Bright, vibrant purple",
    },
    {
      name: "Soft Lavender",
      css: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
      description: "Light, soft purple",
    },
    {
      name: "Dark Purple",
      css: "linear-gradient(135deg, #0F0C29 0%, #302B63 0%, #24243E 100%)",
      description: "Dark, moody purple",
    },
  ],
};

/*
  CURRENT PRIMARY COLOR:
  linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)
  
  Usage in CSS:
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
*/
