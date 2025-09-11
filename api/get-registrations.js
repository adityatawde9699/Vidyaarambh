
export default async function handler(req, res) {
  // IMPORTANT: Replace this with YOUR published Google Sheet CSV URL
  const SHEET_URL = '(https://docs.google.com/spreadsheets/d/e/2PACX-1vRFm1CSPoYtJrnugsIWlq_TNxpj5GWSJ4VuYubwx-gDf2s4KlgLBZf4OpBuk7sE0L9U_eD743Nz94s5/pub?gid=588079090&single=true&output=csv)';

  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }

    const csvText = await response.text();

    // The CSV is just text. We split it by lines.
    const rows = csvText.split('\n');

    // Find the row with our counter. In this setup, it's the first row.
    const firstRow = rows[0];
    const columns = firstRow.split(',');

    // Assuming your counter is in the 3rd column (C), its index is 2.
    const registrationCount = parseInt(columns[2], 10);

    if (isNaN(registrationCount)) {
        throw new Error('Could not parse registration count from sheet.');
    }

    // Allow our website to access this API endpoint
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate'); // Cache for 60s

    // Send the data back as JSON
    return res.status(200).json({ count: registrationCount });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
