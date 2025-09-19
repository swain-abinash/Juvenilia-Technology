# SEO Plans Component

This component displays SEO plans in an accordion format with a responsive design using Tailwind CSS.

## Features

- ✅ Responsive design with Tailwind CSS
- ✅ Orange, black, and white color scheme
- ✅ Accordion components with + and - icons
- ✅ First accordion expanded by default
- ✅ Popular plan highlighted with orange background
- ✅ Check marks for "Yes" values, cross marks for "No" values
- ✅ Dynamic data mapping from JSON file

## File Structure

```
src/pages/plans/
├── Plan.tsx                    # Main component
├── sections/
│   ├── PlansSection.tsx        # Main layout component
│   └── PlanAccordion.tsx       # Accordion component
└── README.md                   # This file

src/mock/
└── plan.ts                     # Mock data (replace with your Excel data)

src/utils/
└── excelToJson.ts              # Excel to JSON converter utility
```

## Adding Your Excel Data

1. **Place your Excel file** in `src/assets/` folder
2. **Install xlsx package** (if not already installed):
   ```bash
   npm install xlsx
   ```
3. **Uncomment and modify** the code in `src/utils/excelToJson.ts`
4. **Update the converter functions** based on your Excel structure:
   - `determineCategory()` - to categorize services
   - `getPriceForPlan()` - to get pricing for each plan
5. **Run the converter** and copy the output to `src/mock/plan.ts`

## Expected Excel Structure

- **Row 1**: Headers (Service Name, Starter, Popular, Premium, Business)
- **Column 1**: Service names
- **Columns 2-5**: Values for each plan (Yes/No or numbers)

## Customization

### Colors
- Primary: Orange (#f97316)
- Secondary: Black (#000000)
- Background: White (#ffffff)

### Responsive Breakpoints
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns

## Usage

The component is already integrated into the main Plan.tsx file and will automatically display when you navigate to the plans page.
