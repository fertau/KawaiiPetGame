# Guía de Generación de Assets para Kawaii Pet Game

Utiliza estos prompts en herramientas como Midjourney, DALL-E 3, o Leonardo.ai para obtener los mejores resultados.

## Estilo General (Para todos los prompts)
*   **Estilo**: Kawaii, Vector Art, Flat Design, 2D Game Asset.
*   **Colores**: Pastel palettes (Pink, Mint, Baby Blue, Cream).
*   **Técnico**: High resolution, sharp outlines, isolated on white background.

---

## 1. Mascota (`pet_idle.png`)
Queremos una mascota tierna que sea el centro de atención.

**Prompt Sugerido:**
> A very cute round pink bunny character, kawaii style, vector art, flat design, thick dark outlines, simple joyful expression, sitting pose, soft pastel colors, isolated on a pure white background, minimal shading, 2d game sprite --no background, shadow, grid

**Consejo:** Si usas Midjourney, añade `--v 5` o `--niji 5` para un estilo más artístico/anime.

---

## 2. Iconos de Interfaz (`icon_*.png`)
Estos deben ser claros y parecer "stickers" o pegatinas.

**Manzana (Comida) - `icon_apple.png`**
> A cute red apple food icon, kawaii sticker style, white border around the object, simple vector art, glossy finish, isolated on white background

**Pelota (Juego) - `icon_ball.png`**
> A cute colorful beach ball toy icon, kawaii sticker style, white border around the object, simple vector art, pastel colors, isolated on white background

**Cama (Sueño) - `icon_bed.png`**
> A cute cozy wooden bed with a fluffy pillow icon, kawaii sticker style, white border around the object, simple vector art, isolated on white background

**Jabón (Limpieza) - `icon_soap.png`**
> A cute pink bar of soap with bubbles icon, kawaii sticker style, white border around the object, simple vector art, isolated on white background

---

## 3. Fondo (`background.png`)
El entorno donde vive la mascota.

**Prompt Sugerido:**
> A cute kawaii living room background for a 2d video game, pastel colors, cozy atmosphere, fluffy rug, window with curtains, potted plants, wide angle view, vector art style, clean lines, symmetric composition --ar 4:3

---

---

## 4. Estados y Animaciones (`pet_*.png`)
Para que tu mascota se sienta viva, necesitamos imágenes para cada acción. Mantén el mismo personaje (ej. el Conejito Rosa) pero cambiando su pose.

**Comiendo (`pet_eating.png`)**
> A very cute round pink bunny character, kawaii style, eating a red apple, joyful expression with puffy cheeks, vector art, flat design, thick dark outlines, isolated on white background

**Jugando (`pet_playing.png`)**
> A very cute round pink bunny character, kawaii style, playing with a colorful beach ball, jumping in excitement, vector art, flat design, thick dark outlines, isolated on white background

**Durmiendo (`pet_sleeping.png`)**
> A very cute round pink bunny character, kawaii style, sleeping peacefully with 'zZ' bubbles, eyes closed, cozy pose, vector art, flat design, thick dark outlines, isolated on white background

**Bañándose (`pet_cleaning.png`)**
> A very cute round pink bunny character, kawaii style, covered in soap bubbles, happy expression, vector art, flat design, thick dark outlines, isolated on white background

---

## Instrucciones de Post-Procesamiento

1.  **Eliminar Fondo**: La mayoría de IAs generarán un fondo blanco o de color sólido. Usa herramientas como [remove.bg](https://www.remove.bg) o Photoshop para eliminarlo y dejarlo **100% transparente**.
2.  **Renombrar**: Asegúrate de guardar los archivos con los nombres exactos listados arriba para cada mascota (ej. `kitty_eating.png`, `doggy_playing.png`).
3.  **Ubicación**: Coloca los archivos limpios en:
    `/Users/fernando.tauscher/.gemini/antigravity/scratch/kawaii-pet-game/assets/`
