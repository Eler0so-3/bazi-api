import predictions from '../predictions.json';

export default async function handler(req, res) {
  let body = {};

  if (req.method === 'POST') {
    try {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const rawBody = Buffer.concat(buffers).toString();
      body = JSON.parse(rawBody);
    } catch (e) {
      return res.status(400).json({ error: 'Ошибка чтения тела запроса' });
    }
  }

  let { element, yin_yang } = body;

  element = typeof element === 'string' ? element.toLowerCase().trim() : "";
  yin_yang = typeof yin_yang === 'string' ? yin_yang.replace("☯️", "").toLowerCase().trim() : "";
  const month = "6";

  const forecast =
    predictions?.[yin_yang]?.[element]?.[month] ||
    `Не найдено: [${yin_yang}][${element}][${month}]`;

  res.status(200).json({ forecast });
}
