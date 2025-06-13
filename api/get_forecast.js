import predictions from '../predictions.json';

export default function handler(req, res) {
  const { element, yin_yang, month } = req.body || {};
  const forecast =
    predictions?.[yin_yang?.toLowerCase()]?.[element?.toLowerCase()]?.[month?.toString()] || "Для этой комбинации пока нет прогноза.";

  res.status(200).json({ forecast });
}
