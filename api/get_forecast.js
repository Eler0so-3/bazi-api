import predictions from '../predictions.json';

export default function handler(req, res) {
  let { element, yin_yang } = req.body || {};

  // Нормализация
  element = (element || "").toLowerCase().trim();
  yin_yang = (yin_yang || "").replace("☯️", "").trim().toLowerCase();
  const month = "6"; // фиксированный июнь

  const forecast =
    predictions?.[yin_yang]?.[element]?.[month] ||
    `Не найдено: [${yin_yang}][${element}][${month}]`;

  res.status(200).json({ forecast });
}
