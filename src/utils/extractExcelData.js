const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Function to extract data from Excel file
const extractExcelData = () => {
  try {
    // Read the Excel file
    const filePath = path.join(process.cwd(), 'src', 'assets', 'JT Packages.xlsx');
    const workbook = XLSX.readFile(filePath);
    
    // Get the first worksheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    console.log('Excel Data:', JSON.stringify(jsonData, null, 2));
    
    // Process the data to match our structure
    const headers = jsonData[0] || [];
    const rows = jsonData.slice(1);
    
    console.log('Headers:', headers);
    console.log('Rows:', rows);
    
    // Create plans array
    const plans = [];
    const categories = new Map();
    
    // Process each row (service/feature)
    rows.forEach((row, rowIndex) => {
      const serviceName = row[0];
      if (!serviceName || serviceName === '') return;
      
      // Determine category based on service name or position
      let category = 'Services';
      if (serviceName.includes('On Page') || serviceName.includes('Content')) {
        category = 'On-Page SEO';
      }
      
      if (!categories.has(category)) {
        categories.set(category, []);
      }
      categories.get(category).push(serviceName);
      
      // Add to each plan
      headers.slice(1).forEach((planName, planIndex) => {
        if (!plans[planIndex]) {
          plans[planIndex] = {
            name: planName,
            price: getPriceForPlan(planName),
            keywords: getKeywordsForPlan(planName)
          };
        }
        plans[planIndex][serviceName] = row[planIndex + 1] || 'No';
      });
    });
    
    const result = {
      plans: plans.filter(plan => plan.name),
      categories: Array.from(categories.entries()).map(([title, items]) => ({
        title,
        items
      }))
    };
    
    console.log('Processed Data:', JSON.stringify(result, null, 2));
    
    // Write to file
    const outputPath = path.join(process.cwd(), 'src', 'mock', 'plan.ts');
    const fileContent = `export const planData = ${JSON.stringify(result, null, 2)};`;
    
    fs.writeFileSync(outputPath, fileContent);
    console.log('Data written to src/mock/plan.ts');
    
    return result;
  } catch (error) {
    console.error('Error extracting Excel data:', error);
    return null;
  }
};

const getPriceForPlan = (planName) => {
  const prices = {
    'STANDARD': 'USD 300/Month',
    'PREMIUM': 'USD 500/Month', 
    'BUSINESS': 'USD 800/Month',
    'PLATINUM': 'USD 6000/Year'
  };
  return prices[planName] || '';
};

const getKeywordsForPlan = (planName) => {
  const keywords = {
    'STANDARD': 30,
    'PREMIUM': 50,
    'BUSINESS': 80,
    'PLATINUM': 150
  };
  return keywords[planName] || 0;
};

// Run the extraction
extractExcelData();
