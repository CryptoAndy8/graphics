function buildPrompt({ topic = "Crypto update", logos = ["Linea", "Plasma"], extra = "" } = {}) {
  const uniq = [...new Set(logos)];
  const logosClause = `exactly ${uniq.length} logos: ${uniq.join(", ")}; no duplicates; no additional logos`;
  const base =
    `Square 1:1, clean dark backdrop, glossy minimal cards, ${topic}. ` +
    `${logosClause}. crisp vector marks, high contrast, studio lighting. `;
  const neg =
    "low-res, blurry, extra text, watermarks, third-party brands, busy background, clutter, NSFW";
  return `${base}${extra ? extra + ". " : ""}Negative prompt: ${neg}.`;
}

if (require.main === module) {
  console.log(buildPrompt({ topic: "Linea vs Plasma" }));
}

module.exports = { buildPrompt };
