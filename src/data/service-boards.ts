// src/data/service-boards.ts
//
// The three service boards from the homepage hero: one isometric board per
// service with its blocks on top (Product an app screen, Marketing a content
// card and text lines, Sales pipeline bars lying flat). Shared by the hero
// (HomeHeroVisual.astro) and the service cards (ServiceBoard.astro), so the
// same picture always means the same service.

export type ServiceId = 'product' | 'marketing' | 'sales';

// board size (x length, y depth, thickness) and the label strip along the front edge
export const W = 136, D = 100, T = 6, STRIP = 18;

// one block on the board: x0, x1, y0, y1, height, top face class ('acc' department colour, 'ink' navy, '' white)
export type Block = [number, number, number, number, number, string];

export const boardBlocks: Record<ServiceId, Block[]> = {
  // main content sits towards the front corner, where the slice above does not cover it
  product: [
    [8, W - 8, 8, 20, 4, 'acc'],                          // top bar of the app screen
    // the two UI blocks share the top bar's outer edges (8 and W - 8), with a 12 gap
    [8, (W - 12) / 2, 32, D - STRIP - 4, 8, 'acc'],
    [(W + 12) / 2, W - 8, 32, D - STRIP - 4, 14, 'acc'],
  ],
  marketing: [
    [12, W - 12, 12, 30, 3, ''],                          // headline strip
    [12, 62, 40, 46, 2, 'ink'],                           // text lines
    [12, 54, 52, 58, 2, 'ink'],
    [12, 46, 64, 70, 2, 'ink'],
    [74, W - 12, 40, D - STRIP - 4, 8, 'acc'],            // content card
  ],
  // pipeline bars grow in length across the board (y), not upwards (z)
  sales: [
    [20, 40, 50, D - STRIP - 4, 8, 'acc'],
    [58, 78, 30, D - STRIP - 4, 8, 'acc'],
    [96, 116, 10, D - STRIP - 4, 8, 'acc'],
  ],
};

// browser dots on the app screen's top bar (x positions, at y 14 on top of the bar)
export const productDots = [16, 24, 32];
