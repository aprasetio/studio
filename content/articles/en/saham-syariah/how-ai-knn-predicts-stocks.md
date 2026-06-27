---
title: "How Does AI KNN Predict Stocks? A Plain-Language Explanation"
description: "Learn how the KNN (K-Nearest Neighbors) AI model predicts stock movements — covering its 7 input features, how to read probability scores, realistic accuracy expectations, and how to combine it with other technical signals."
category: "saham-syariah"
publishedAt: "2025-06-03"
tags: ["AI stock prediction", "machine learning stocks", "KNN stocks", "AI stock screener", "KNN probability"]
crossPromo: true
canonicalId: cara-kerja-ai-knn-prediksi-saham
translations:
  id: cara-kerja-ai-knn-prediksi-saham
---

When people first see the word "AI" in a stock screener, reactions tend to fall into two camps: some believe it blindly, others dismiss it entirely. Both reactions miss the mark — because neither is based on understanding what the AI actually does.

This article breaks down how the KNN (K-Nearest Neighbors) model works in a screener to predict stock movements — without intimidating math formulas, but with enough depth that you can use it with realistic expectations.

After reading this, you'll know when AI probability scores can be trusted, when to ignore them, and how to use them as one component in smarter trading decisions.

## What Is KNN and Why Use It for Stock Prediction?

K-Nearest Neighbors (KNN) is one of the most intuitive machine learning algorithms. It works like this analogy: when you're not sure if it will rain today, you recall all past days with similar conditions (cloudy, humid, wind from the west) — then look at what happened on most of those similar days. That's a KNN prediction.

For stocks: the model searches the past 2 years of data for days whose technical conditions most closely resemble the stock's conditions today, then looks at what happened the following day across the majority of those cases.

| Aspect | KNN | Why It Suits Stocks |
|---|---|---|
| How it works | Finds K most similar historical conditions, then votes on the outcome | Stocks often repeat patterns under similar technical conditions |
| Data used | Numerical technical features from historical data | All inputs are available in daily OHLCV data |
| Output interpretation | Probability (0.0–1.0), not a binary signal | Probabilities are more informative than simple buy/sell signals |
| Limitation | Cannot capture unexpected events (black swans) | Needs to be combined with other indicators for confirmation |

## Model Inputs: The 7 Features the AI Reads

The KNN model doesn't "see" prices directly — it reads 7 normalized technical features from the past 2 years of historical data:

| # | Input Feature | What It Measures | Contribution |
|---|---|---|---|
| 1 | RSI (14-period) | Momentum and overbought/oversold conditions | Identifies current momentum vs. similar historical moments |
| 2 | CMF (20-period) | Buying/selling money flow pressure | Confirms whether price movement is supported by volume |
| 3 | Position vs MA20 | Price distance from short-term moving average | Short-term trend context |
| 4 | Position vs MA50 | Price distance from medium-term moving average | Medium-term trend context |
| 5 | Position vs EMA200 | Price distance from long-term EMA | Primary trend context (structurally bullish/bearish) |
| 6 | ATR% (14-period) | Current relative volatility level | Volatility context — whether current conditions are normal or abnormal |
| 7 | Volume Ratio | Today's volume vs. 20-day average | Detects abnormal activity (volume spikes) |

Model output: probability the stock will rise the next day, on a scale of 0.0–1.0. Not a prediction of how much it will rise — only a directional prediction (up or not) along with the model's confidence level.

## How KNN Works: A Simple Analogy

Imagine you have a notebook containing 500 past trading days for ADRO — each page records 7 numbers (RSI, CMF, MA positions, ATR%, volume ratio) and the next day's result (up or down).

Today, ADRO's conditions are: RSI=52, CMF=+0.18, above MA20 (+3%), above MA50 (+8%), above EMA200 (+12%), ATR%=2.1%, volume ratio=1.6×. The model searches for the 15 pages (K=15) whose technical conditions most closely match today's.

Say that from those 15 most similar days: the stock rose the next day on 10 of them, and fell on 5. Then KNN probability = 10/15 = **0.67 (67% chance of rising).**

The model is also retrained each time a chart is opened — meaning the most recent data is always used to find matches, rather than a stale static model.

## Reading the Output: What Do Probability Numbers Mean?

| KNN Probability | Interpretation | Appropriate Action |
|---|---|---|
| **> 0.70** | Strong bullish signal | Strong confirmation for entry — combine with high technical score |
| 0.55 – 0.70 | Bullish bias | Supports entry, but needs confirmation from other components (CMF, Wyckoff phase) |
| 0.45 – 0.55 | Neutral / uncertain | Model has no strong conviction in either direction — seek other confirmation |
| 0.30 – 0.45 | Bearish bias | Mild negative signal — tighten stop loss if already in a position |
| **< 0.30** | Strong bearish signal | No new entries; if already in a position, consider early exit |

**Realistic expectations:** the model's backtesting accuracy is 60–65% for predicting 1-day price direction. This means 35–40% of predictions are wrong. Do not use KNN probability as your sole decision basis — it is one of 6 components, not an oracle.

## How Accurate Is the KNN Model? An Honest Look at Its Limitations

| Metric | Value | Interpretation |
|---|---|---|
| 1-day directional accuracy | **60–65%** | Better than random (50%), but not perfect |
| Training data | 2 years of historical OHLCV + indicators | Retrained each time a chart is opened |
| Best conditions for the model | Clear trend + normal volume | Historical patterns are more consistent and repeatable |
| Worst conditions for the model | Unexpected events, news shocks, black swans | No historical patterns to reference |
| Prediction horizon | 1 day ahead (short-term) | Accuracy drops significantly for 3–5 day predictions |

**Important note:** 60–65% accuracy does not mean 6–7 out of 10 trades are profitable. Accuracy only measures how often the directional prediction is correct — whether a trade is profitable or not depends on how large the move is and whether a stop loss is in place.

## How KNN Fits Into the 6-Component Scoring System

KNN is one of 6 components that make up the screener's total score. It doesn't stand alone — it interacts with the other 5 components:

| Combination | Condition | Signal Strength |
|---|---|---|
| High KNN + positive CMF | Prob > 0.65 + CMF > +0.10 | **VERY STRONG — AI and money flow aligned** |
| High KNN + Donchian breakout | Prob > 0.65 + price at upper band | STRONG — momentum and historical pattern confirm each other |
| High KNN but negative CMF | Prob > 0.65 + CMF < -0.05 | MIXED — AI is bullish but money flow doesn't support it; proceed with caution |
| Low KNN but other scores high | Prob < 0.45 + other components positive | WATCH — AI not confirming; reduce position size |

**Best practice:** use KNN as an additional filter, not the primary driver. If the technical score is already 8+ but KNN < 0.45, consider delaying entry or reducing lot size. If KNN > 0.70 but the technical score is only 5, KNN alone isn't enough.

## Example: Reading AI Output on IDX Stocks

| Stock | KNN Prob | Total Score | CMF Condition | Conclusion |
|---|---|---|---|---|
| PGEO | **0.72** | 10/12 (STRONG BUY) | +0.28 (strong) | **Three signals aligned — valid entry with 1% risk** |
| ADRO | 0.61 | 8/12 (BUY) | +0.14 (moderate) | Two of three signals positive — entry with 0.5% risk |
| TLKM | 0.51 | 6/12 (BUY) | +0.03 (neutral) | AI not confirming, CMF neutral — wait or skip |
| SMGR | **0.31** | 5/12 (NEUTRAL) | -0.12 (negative) | **All signals negative — no new entries** |

## Practical Steps for Using AI KNN in Trading Decisions

1. Open the screener and look at the KNN probability column for your target stock
2. **If prob > 0.65:** AI supports entry; confirm with total score and CMF
3. **If prob 0.45–0.65:** AI is neutral; rely more on other technical components
4. **If prob < 0.45:** AI doesn't support entry; reduce lot size or wait until prob improves
5. Never use KNN probability alone — always view it in the context of the full 6-component score
6. Remember: the model is retrained each session — today's probability can differ from yesterday's even if price hasn't changed much
7. For final decisions, always rely on ATR-based stop loss and measured position sizing

## Common Mistakes When Using AI Stock Prediction

- **Blindly trusting probability numbers** — 0.75 does not mean 75% guaranteed profit; it's a directional probability based on historical patterns
- **Skipping stop loss because AI says it will rise** — AI is wrong 35–40% of the time; stop loss is always required
- **Overtrading because there's always a high-prob stock each day** — selectivity still matters; high probability must be accompanied by a strong technical score and supportive market context
- **Expecting AI to predict black swans** — pattern-based models cannot anticipate sudden news events, crises, or unprecedented events
- **Directly comparing probabilities across different stocks** — a prob of 0.70 in a volatile stock is not the same as 0.70 in a defensive stock; volatility context differs

## Conclusion

The KNN AI in this screener is not a magic ball that predicts markets perfectly — but it's not a gimmick either. With 60–65% accuracy for 1-day directional prediction, it provides a real statistical edge when used as one component within a larger system.

Its strength lies in consistency: the model objectively processes 7 technical features without emotional bias, finds similarities across hundreds of historical days, and produces output that can be directly integrated with other technical signals. Use it with realistic expectations, and it will become one of the most useful components in your trading toolkit.

## FAQ: AI KNN Stock Prediction

**Q: Does the KNN model continuously learn from new data automatically?**

A: The model is retrained each time a stock chart is opened, using the most recent 2 years of historical data. So yesterday's data is already incorporated into today's model. This is not deep learning that trains continuously — but a regular retraining process that ensures the model stays relevant to current market conditions.

**Q: Why can the KNN probability for the same stock differ on different days even if the price hasn't changed much?**

A: Because all 7 input features (RSI, CMF, MA positions, ATR%, volume ratio) change every day — even small changes in RSI or volume ratio can significantly shift which historical days are considered "most similar." This is also why the model should be read day by day, not held as a reference across multiple days.

**Q: Is KNN better suited for certain stocks than others?**

A: Yes. KNN works best on stocks with consistent technical patterns and sufficient historical data (liquid stocks that have been listed long enough). For newly IPO'd stocks (less than 2 years of data) or illiquid stocks (inconsistent volume), model accuracy may be lower than the average 60–65%.
