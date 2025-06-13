import predictions from '../predictions.json';

export default function handler(req, res) {
  const { element, yin_yang } = req.body || {}; // month мы больше не берём из тела

  const forecast =
    predictions?.[yin_yang?.toLowerCase()]?.[element?.toLowerCase()]?.["6"]
    || "Для этой комбинации пока нет прогноза.";

  res.status(200).json({ forecast });
}
