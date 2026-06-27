---
title: "How to Set the Right Stop Loss Using ATR (Not Arbitrary Percentages)"
description: "Learn how to calculate stock stop loss levels using ATR (Average True Range) — the professional trader's method that adapts stop loss placement to each stock's actual volatility."
category: "saham-syariah"
publishedAt: "2026-06-02"
tags: ["stock stop loss", "how to calculate stop loss", "ATR", "risk management", "swing trading", "technical analysis"]
crossPromo: true
author: "VersoKit"
canonicalId: cara-menentukan-stop-loss-berbasis-atr
translations:
  id: cara-menentukan-stop-loss-berbasis-atr
---

Set a stop loss at -5%, only to watch the stock bounce back up the moment it gets cut? Or the opposite — skipping stop losses entirely because you're "confident in the fundamentals," only to be stuck holding for months?

Both are the same mistake: a stop loss that isn't grounded in the stock's actual volatility data.

This article explains how to calculate a stop loss using ATR (Average True Range) — the method professional traders use to align stop loss levels with each stock's volatility profile, rather than applying a generic percentage to everything.

## What Is ATR and Why Should Stop Losses Be Based on It?

ATR, or Average True Range, is an indicator that measures the average daily price movement of a stock over a given period — typically the last 14 days.

ATR doesn't indicate price direction (up or down). It only measures **how far the price moves in a single day**, from high to low, including gaps from the previous day.

Why does this matter for stop losses? Because every stock has a different "breathing room":

- **BRIS** (Islamic bank, highly liquid): moves ±1% per day under normal conditions
- **ADRO** (commodities): can move ±3–4% per day during volatile seasons
- **Third-tier stocks**: can swing ±8–10% in a single day

If you set a -5% stop loss on ADRO, it could get triggered during a normal fluctuation — not because the trend has reversed. Conversely, -5% on BBCA may be too wide and expose you to excessive risk.

**ATR helps you set a stop loss that respects the stock's volatility, not an arbitrary number.**

## How to Calculate an ATR-Based Stop Loss: The Adaptive Formula

The base formula:

> **ATR% = ATR ÷ Close Price × 100**

From the ATR%, determine the stock's volatility category and apply the appropriate multiplier:

| Category | ATR% | Stop Loss | Take Profit |
|---|---|---|---|
| High Volatility (Commodities, tier 2–3) | > 3% | 1.2 × ATR | 2.5 × ATR |
| Moderate (Sectoral blue chips) | 1%–3% | 1.5 × ATR | 3.0 × ATR |
| Defensive (BRIS, TLKM, large consumer stocks) | < 1% | 2.0 × ATR | 3.5 × ATR |

*Minimum risk/reward is always 1:2 for all categories. ATR is calculated over 14 periods.*

### Category 1 — High Volatility Stocks (ATR% > 3%)

Typical examples: ADRO, PGEO, commodity stocks, second-tier stocks during trending phases.

**Stop Loss   = Entry − (1.2 × ATR)**  
**Take Profit = Entry + (2.5 × ATR)**

The SL multiplier is smaller (1.2×) because volatility is already high — a wider stop would make the absolute risk per trade too large.

### Category 2 — Moderate Volatility Stocks (ATR% 1%–3%)

Typical examples: sectoral blue chip stocks, liquid mid-caps.

**Stop Loss   = Entry − (1.5 × ATR)**  
**Take Profit = Entry + (3.0 × ATR)**

This is the most common zone for mid-to-large IDX stocks. The multiplier balances protection from noise with enough room for price movement.

### Category 3 — Defensive Stocks (ATR% < 1%)

Typical examples: BRIS, TLKM, large consumer stocks.

**Stop Loss   = Entry − (2.0 × ATR)**  
**Take Profit = Entry + (3.5 × ATR)**

Defensive stocks move slowly. A larger multiplier is needed so the stop loss isn't triggered by ordinary daily noise — which is small in point terms but meaningful relative to the ATR.

## Real Examples: Calculating Stop Loss on IDX Stocks

### Example 1: ADRO (Commodity Stock — High Volatility Category)

| | |
|---|---|
| Close Price | Rp 2,800 |
| ATR 14 Periods | Rp 120 |
| ATR% | 120 ÷ 2,800 × 100 = **4.3%** → Category: High Volatility |
| Stop Loss | 2,800 − (1.2 × 120) = 2,800 − 144 = **Rp 2,656** |
| Take Profit | 2,800 + (2.5 × 120) = 2,800 + 300 = **Rp 3,100** |
| Risk/Reward | 300 ÷ 144 = **2.08 ✓** (above 1:2) |

### Example 2: TLKM (Defensive Stock — Defensive Category)

| | |
|---|---|
| Close Price | Rp 3,200 |
| ATR 14 Periods | Rp 28 |
| ATR% | 28 ÷ 3,200 × 100 = **0.88%** → Category: Defensive |
| Stop Loss | 3,200 − (2.0 × 28) = 3,200 − 56 = **Rp 3,144** |
| Take Profit | 3,200 + (3.5 × 28) = 3,200 + 98 = **Rp 3,298** |
| Risk/Reward | 98 ÷ 56 = **1.75 ⚠** Below 1:2 |

> **Note:** If the R/R falls below 1:2 after calculating with ATR, skip the trade or wait for a better entry price.

## How to Apply This in Practice: Step by Step

1. Open the chart for the stock you want to buy — use the daily timeframe
2. Add the ATR indicator with a period of 14 (the universal standard)
3. Note the current ATR value shown below the chart
4. Calculate ATR% = ATR ÷ Close Price × 100
5. Determine the category: >3% (volatile), 1–3% (moderate), <1% (defensive)
6. Calculate SL and TP using the multiplier for your category
7. Check R/R: must be at least 1:2 — if not, don't enter yet
8. Set the stop loss in your trading platform using the calculated figure
9. **Do not move the stop loss lower after it's been set — that's breaking your own rules**

## Common Mistakes to Avoid

- **Using a fixed percentage for all stocks** — e.g., always -5% without considering each stock's volatility
- **Stop loss too close to entry** — makes you vulnerable to "stop hunts" from normal daily movement
- **Stop loss too far from entry** — that's not risk management, it's gambling
- **Not calculating Take Profit before entering** — without a TP, you don't know if the trade is mathematically worth it
- **Moving the stop loss lower when price approaches the SL level** — this is the most dangerous mistake and turns small losses into large ones
- **Using ATR from a different timeframe** — always use the daily ATR for swing trading positions

## Conclusion

A good stock stop loss isn't about what percentage to use — it's about how far the price can "breathe" naturally before you can conclude that the trend has actually reversed.

ATR provides that answer objectively, based on the stock's own historical volatility data. With the ATR-based stop loss calculation and the three-category adaptive formula above, you can:

- Avoid stop losses that are too tight and frequently triggered by daily noise
- Ensure every trade has at least a 1:2 R/R before entering
- Calibrate your risk to the character of each stock, not just habit

Next step: combine ATR stop losses with proper [position sizing](/en/article/saham-syariah/position-sizing-how-much-capital-to-risk) so that total risk per trade never exceeds 1–2% of your total capital.

## FAQ: ATR-Based Stop Losses

**Q: Which ATR period is most accurate for swing trading?**

A: The industry standard is ATR 14 periods on the daily chart. It's responsive enough to recent volatility changes without being too noisy, unlike shorter periods (e.g., ATR 5, which is overly sensitive to a single anomalous day).

**Q: Does ATR stop loss work for syariah stocks?**

A: Yes. ATR is a purely price-based technical indicator — it has nothing to do with a company's business structure. It can be used for syariah (Islamic-compliant) or conventional stocks, whether on the IDX or Wall Street.

**Q: What if the ATR changes after I've entered a position?**

A: You don't need to adjust an already-placed stop loss to match a new ATR value — unless you're using a trailing stop (moving the SL upward as price rises). Never move your stop loss lower just because price is approaching the SL level.
