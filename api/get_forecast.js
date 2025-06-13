import predictions from '../predictions.json';

export default function handler(req, res) {
  let { element, yin_yang, month } = req.body || {};

  // Нормализация
  element = (element || "").toLowerCase().trim();
  yin_yang = (yin_yang || "").replace("☯️", "").trim().toLowerCase();
  month = "6"; // жёстко подставляем июнь

  const forecast =
    predictions?.[yin_yang]?.[element]?.[month] ||
    "Для этой комбинации пока нет прогноза.";

  res.status(200).json({ forecast });
}
