# Customization Guide - Saveurs Pro

## Quick Start

All customization is done through config files in `src/data/`. No need to touch component code for basic changes.

## Configuration Files

### 1. `src/data/client.json` - Brand Identity & Features

```json
{
  "name": "Saveurs",
  "tagline": "Comida franco-peruana",
  "themeColor": "#1c3d79",
  "whatsapp": "996569239",
  "instagram": "saveurs_dulces_salados",
  "email": "",
  "address": "La Molina, Lima",
  "hours": "9AM - 9PM",
  "currency": "S/.",
  "productModal": 1,           // 1 = show modal | 0 = hidden
  "popularSection": 1          // 1 = show "Lo más pedido" | 0 = hidden
}
```

### 2. `src/data/menu.json` - Products

Add, remove, or edit products here. Change prices, categories, emoji, popularity flags - no code needed.

### 3. `src/data/delivery.json` - Lima Delivery Zones

22 Lima districts with delivery fees. Update as needed for your service area.

### 4. `src/index.css` - Brand Colors

Edit the `@theme` color variables to change all brand colors globally.

## Feature Toggles

- **productModal**: 1 = show product details in modal | 0 = hidden
- **popularSection**: 1 = show popular items | 0 = hidden

## Customization = Config File Edits Only

✅ DO edit: `src/data/*.json` and `src/index.css`
❌ DO NOT edit: Component files (*.jsx)

No component code needs to be touched for customization.

## Deployment

```bash
npm run build
bash scripts/deploy.sh build
```
