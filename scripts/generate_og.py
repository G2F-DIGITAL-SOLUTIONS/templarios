#!/usr/bin/env python3
"""Generate the default Open Graph / social card (1200x630) as a PNG.

Run from the project root:  python3 scripts/generate_og.py

Uses system serif fonts (Georgia) so no font files need to be committed. The
result is a small, self-contained dark "engraved" card matching the site
identity. Re-run whenever the tagline changes.
"""
from __future__ import annotations

import os

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT = os.path.join("public", "og-default.png")

GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEORGIA_ITALIC = "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"
ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"

PARCHMENT = (245, 240, 230)
GOLD = (201, 168, 98)
GOLD_DIM = (138, 109, 59)
STONE = (183, 173, 161)


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    if os.path.exists(path):
        return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def main() -> None:
    img = Image.new("RGB", (W, H), (12, 10, 8))
    draw = ImageDraw.Draw(img, "RGBA")

    # Vertical gradient backdrop.
    for y in range(H):
        t = y / H
        r = int(30 * (1 - t) + 12 * t)
        g = int(26 * (1 - t) + 10 * t)
        b = int(22 * (1 - t) + 8 * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Warm radial glow at the top.
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for i in range(420, 0, -8):
        alpha = int(70 * (i / 420) ** 2)
        gd.ellipse(
            [W // 2 - i * 1.6, -i * 0.9, W // 2 + i * 1.6, i * 0.9],
            fill=(184, 147, 78, alpha),
        )
    img = Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB")
    draw = ImageDraw.Draw(img, "RGBA")

    # Engraved frame.
    draw.rectangle([24, 24, W - 24, H - 24], outline=GOLD_DIM + (140,), width=2)
    draw.rectangle([34, 34, W - 34, H - 34], outline=GOLD_DIM + (60,), width=1)

    # Templar cross emblem.
    cx, cy = 156, 315
    draw.rectangle([cx - 8, cy - 120, cx + 8, cy + 120], fill=GOLD)
    draw.rectangle([cx - 42, cy - 104, cx + 42, cy - 88], fill=GOLD)
    draw.rectangle([cx - 34, cy - 70, cx + 34, cy - 54], fill=GOLD)

    x = 250
    draw.text((x, 150), "ORDEM DOS CAVALEIROS TEMPLÁRIOS", font=font(GEORGIA, 33), fill=PARCHMENT)
    draw.line([(x, 215), (W - 90, 215)], fill=GOLD_DIM + (200,), width=2)

    draw.text((x, 290), "Tradição, conhecimento", font=font(GEORGIA_ITALIC, 62), fill=GOLD)
    draw.text((x, 370), "e serviço ao próximo.", font=font(GEORGIA_ITALIC, 62), fill=GOLD)

    draw.text(
        (x, 490),
        "Non nobis, Domine, non nobis, sed nomini tuo ad gloriam",
        font=font(ARIAL, 22),
        fill=STONE,
    )

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({os.path.getsize(OUT)} bytes)")


if __name__ == "__main__":
    main()