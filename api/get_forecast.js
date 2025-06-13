import predictions from '../predictions.json';

export default function handler(req, res) {
  let { element, yin_yang } = req.body || {};

  console.log("RAW INPUT:", { element, yin_yang });

  // Фиксируем баг, если SaleBot вообще ничего не передал
  element = typeof element === 'string' ? element.toLowerCase().trim() : "";
  yin_yang = typeof yin_yang === 'string' ? yin_yang.replace("☯️", "").toLowerCase().trim() : "";
  const month = "6";

  const forecast =
    predictions?.[yin_yang]?.[element]?.[month] ||
    `Не найдено: [${yin_yang}][${element}][${month}]`;

  res.status(200).json({ forecast });
}
