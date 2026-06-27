---
title: "Position Sizing: How Much Capital Is Safe to Risk on a Single Stock?"
description: "A complete guide to risk-based position sizing for IDX stocks — stop loss and ATR formulas, a 4-stock example table, concentration rules, and common mistakes to avoid."
category: "saham-syariah"
publishedAt: "2025-06-02"
tags: ["position sizing", "stock risk management", "portfolio management", "stop loss", "ATR", "swing trading", "syariah stocks"]
crossPromo: true
lang: "en"
canonicalId: position-sizing-berapa-persen-modal-aman
translations:
  id: position-sizing-berapa-persen-modal-aman
---

Have you ever put 30–40% of your capital into a single stock because you were "absolutely sure" your analysis was right, only to watch the stock drop 20%? Losing 6–8% of your total portfolio from a single wrong decision is no small thing — it can take months to recover.

This is what happens when traders ignore position sizing. It's not about whether your analysis was right or wrong — it's about how large a bet you're placing on each trade.

This article covers how to calculate risk-based position sizing in a measurable way, so that no single stock can "destroy" your portfolio, even when your analysis is off.

## What Is Position Sizing and Why Is It the Foundation of Stock Risk Management?

Position sizing is the decision of how much capital to allocate to a single trading position. It's not simply "how many lots to buy" — it's a systematic calculation that ensures your risk per trade always stays within a predetermined limit.

The core concept is straightforward: if you are wrong on every trade, the cumulative loss must never threaten the survival of your portfolio. The standard used by professional traders is:

**Risk per trade = maximum 1–2% of total capital**

This means: if your total capital is IDR 100 million and your stop loss is triggered, the maximum you should lose from any single trade is IDR 1–2 million. Not IDR 10 million. Not IDR 20 million.

With this rule, even 10 consecutive losses only erodes 10–20% of your capital — still recoverable. But without disciplined position sizing, a single bad trade can wipe out 30–40% of your capital at once.

## The Risk-Based Position Sizing Formula for Stocks

There are two ways to calculate position sizing — choose the one that best fits your analysis workflow:

### Method 1: Stop Loss-Based (most common)

Use this when you already have a clear stop loss level from your technical analysis.

```
Risk per Trade (IDR)  = Total Capital × Risk Percentage
Number of Lots        = Risk per Trade / (Entry Price - Stop Loss Price)
```

Example:

- **Capital:** IDR 50,000,000
- **Risk per trade:** 1% → IDR 500,000
- **Entry ADRO:** IDR 2,800  |  Stop Loss: IDR 2,656  |  Difference: IDR 144
- **Number of Lots:** 500,000 / 144 = 3,472 shares ≈ 34 lots (1 lot = 100 shares)
- **Capital used:** 3,400 × 2,800 = IDR 9,520,000 (~19% of capital)

**Even though 19% of capital is deployed, the CONTROLLED RISK remains only IDR 500,000 (1%) — because the stop loss is already in place.**

### Method 2: ATR-Based (for dynamic stop losses)

Use this when your stop loss is calculated from ATR, as discussed in [How to Set the Right Stop Loss Using ATR](/en/article/saham-syariah/how-to-set-stop-loss-with-atr).

```
SL Distance (IDR)  = ATR Multiplier × ATR Value
Number of Lots     = Risk per Trade / SL Distance
```

Example with TLKM (defensive category, ATR = IDR 28, multiplier 2.0×):

- **Capital:** IDR 50,000,000  |  1% Risk: IDR 500,000
- **SL Distance:** 2.0 × 28 = IDR 56
- **Number of Lots:** 500,000 / 56 = 8,928 shares ≈ 89 lots
- **Capital used:** 8,900 × 3,200 = IDR 28,480,000 (~57% of capital)

**Note:** If the capital deployed exceeds 25–30% of your total portfolio for a single stock, consider reducing your risk per trade to 0.5% to avoid over-concentration.

## Position Sizing Table: 4 IDX Stocks with IDR 100 Million Capital

Here is a real-world illustration with IDR 100 million capital, 1% risk per trade (IDR 1,000,000), using ATR-based stop losses:

| Stock | Entry (IDR) | ATR (IDR) | SL (IDR) | SL Distance (IDR) | Lots | Capital Used |
|---|---|---|---|---|---|---|
| ADRO (Volatile) | 2,800 | 120 | 2,656 | 144 (1.2×ATR) | ~69 lots | ~IDR 19.3M |
| PGEO (Moderate) | 8,500 | 210 | 8,185 | 315 (1.5×ATR) | ~31 lots | ~IDR 26.4M |
| TLKM (Defensive) | 3,200 | 28 | 3,144 | 56 (2.0×ATR) | ~89 lots | ~IDR 28.5M |
| BRIS (Defensive) | 1,850 | 25 | 1,800 | 50 (2.0×ATR) | ~200 lots | ~IDR 37M |

*Actual risk on every row = IDR 1,000,000 (1% of capital). What differs is only the number of lots and capital used.*

**Note on BRIS:** even though the share price is low (IDR 1,850), the number of lots becomes very large (~200 lots) because the ATR is small. The 37% capital deployment is above the ideal 25% limit. Reduce risk to 0.5% → lots drop to ~100, capital ~IDR 18.5M.

## Concentration Rules: Don't Let a Single Stock Dominate Your Portfolio

Position sizing is not only about risk per trade — it's also about how capital is distributed across your entire portfolio. Two additional rules matter here:

### Rule 1: Maximum 20–25% Capital per Stock

No matter how confident you are in your analysis, never put more than 20–25% of your capital into a single stock. This protects against unexpected fundamental risk — poor earnings reports, defaults, or sudden negative news that even a stop loss cannot avoid (a gap-down at market open, for instance).

### Rule 2: Maximum 5–8 Active Positions at Once

Too many positions means you cannot monitor all of them effectively. With 5–8 positions and evenly distributed capital, each stock receives a 12–20% allocation — enough to meaningfully impact your portfolio, but not enough to destroy it.

## How to Apply Stock Position Sizing in Practice: Step by Step

1. Determine the total active capital you will be trading (separate from your emergency fund)
2. Set your risk percentage per trade: 1% for swing trading, 0.5% for large or defensive positions
3. Calculate risk in IDR: Capital × Risk Percentage
4. Analyze the stock and identify a valid entry level (breakout, support, technical signal)
5. **Calculate the stop loss first** — use ATR or a technical support level, not a fixed percentage
6. Calculate the distance from entry to stop loss in IDR
7. Calculate the number of lots: Risk (IDR) / SL Distance (IDR), then round down
8. Check: does the capital deployed exceed 25%? If yes, reduce the lot size or skip the trade
9. Check total active positions: are there already 5–8 stocks? If yes, wait for one to close first
10. **Record all parameters** — entry, SL, TP, lots, capital used, risk — before executing the trade

## Common Mistakes in Stock Risk Management

- **Deciding lot size first, then finding a stop loss** — it should be the reverse: calculate SL first, then calculate lots
- **"All in" on one stock because you're very confident** — conviction does not change market probabilities
- **Inconsistent risk percentages** — 1% on trade A, 5% on trade B — that is not a system
- **Forgetting to account for transaction costs** — commissions, taxes, and spreads can be significant with large lot sizes
- **Not updating position sizing when capital changes** — if your capital grows by 20%, your risk per trade must be recalculated
- **Using borrowed capital or margin** — position sizing based on borrowed funds is far more dangerous because losses are multiplied by leverage
- **Adding to a position while a stock is falling (averaging down)** without recalculating total overall risk

## Conclusion

Stock position sizing is not about how much you can win — it's about how much you are allowed to lose. By capping your risk at a maximum of 1–2% per trade and not concentrating more than 25% of your capital in a single stock, you build a system that can survive even when your analysis is frequently wrong.

The consistently profitable trader is not the one who is always right, but the one who never loses too much when they are wrong. That is the true essence of stock risk management.

Combine this position sizing approach with [ATR-based stop losses](/en/article/saham-syariah/how-to-set-stop-loss-with-atr) and strong technical signals for a complete and structured trading system.

## FAQ: Stock Position Sizing

**Q: Isn't 1% risk per trade too small? Profits will be very slow.**

A: Slow on a single trade, but safe as a system. With a 55% win rate and a 1:2 risk-to-reward ratio, a 1% risk per trade generates approximately 16% return over 100 trades. Consistency is far more important than aggression — especially when you are still building a track record.

**Q: How does position sizing work for syariah stocks that are illiquid?**

A: For stocks with low daily volume, reduce the risk per trade to 0.5% and make sure the calculated lot size does not exceed 5–10% of the stock's average daily volume. If your position size is too large relative to its liquidity, you will struggle to exit at your intended stop loss price.

**Q: Does position sizing apply to long-term investing as well?**

A: For long-term investing without strict stop losses, a different approach is used: a maximum allocation of 10–15% per stock, and a minimum diversification of 8–12 stocks across different sectors. The underlying principle remains the same — no single position should be able to destroy the portfolio if the investment thesis turns out to be wrong.
