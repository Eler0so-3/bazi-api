import predictions from '../predictions.json';

export default function handler(req, res) {
  let { element, yin_yang } = req.body || {};

  // отладка
  console.log("RAW INPUT:", { element, yin_yang });

  // нормализация входных значений
  if (typeof element === 'string') {
    element = element.trim().toLowerCase();
  } else {
    element = '';
  }

  if (typeof yin_yang === 'string') {
    yin_yang = yin_yang.replace("☯️", "").trim().toLowerCase();
  } else {
    yin_yang = '';
  }

  const month = "6"; // фиксируем месяц

  const forecast =
    predictions?.[yin_yang]?.[element]?.[month] ||
    `Не найдено: [${yin_yang}][${element}][${month}]`;

  res.status(200).json({ forecast });
}
