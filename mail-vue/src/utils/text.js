export function getTextWidth(text, font = '14px sans-serif') {
    // Force set Canvas resolution
    const canvas = document.createElement('canvas');
    canvas.width = 2000; // Sufficiently large canvas
    canvas.style.width = '1000px'; // Avoid CSS scaling interference
    const ctx = canvas.getContext('2d');
    ctx.font = font;
    return ctx.measureText(text).width;
}