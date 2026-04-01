# Sorting Visualizer

A browser-based tool for watching sorting algorithms work in real time. Each bar represents an array element — its height is its value. Swap, compare, and sorted states are color-coded so you can follow exactly what each algorithm is doing at every step.

## Algorithms

| Algorithm | Average | Worst | Space | Notes |
|---|---|---|---|---|
| Bubble Sort | O(n²) | O(n²) | O(1) | Simple, educational |
| Selection Sort | O(n²) | O(n²) | O(1) | Minimal swaps |
| Insertion Sort | O(n²) | O(n²) | O(1) | Fast on nearly-sorted data |
| Cocktail Sort | O(n²) | O(n²) | O(1) | Bi-directional bubble sort |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Divide and conquer |
| Quick Sort | O(n log n) | O(n²) | O(log n) | Pivot-based partitioning |

## Color Legend

| Color | Meaning |
|---|---|
| White | Unsorted element |
| Red | Currently being compared |
| Green | Element in its sorted position |
| Blue | Pivot element (Quick Sort) / Merge target (Merge Sort) |

## Controls

- **Algorithm buttons** — click any to start sorting immediately
- **Time slider** — controls the delay between steps (left = faster, right = slower)
- **Size slider** — controls how many bars are generated (10–300)
- **Reset** — generates a new random array
- **Stop** — halts the current sort mid-execution

## Running Locally

No build step required — it's plain HTML, CSS, and JavaScript.

```bash
git clone https://github.com/your-username/Sorting-Visualizer.git
cd Sorting-Visualizer
```

Then open `index.html` in your browser, or serve it with any static file server:


## Project Structure

```
Sorting-Visualizer/
├── index.html
├── style.css
├── algo/
│   ├── bubble.js
│   ├── selection.js
│   ├── insertion.js
│   ├── cocktailSort.js
│   ├── mergeSort.js
│   └── quickSort.js
└── helper/
    ├── delay.js       # Promise-based delay + sort-complete animation
    ├── getInd.js      # Global state, array generation, slider/reset events
    ├── swap.js        # DOM swap helpers and color utilities
    └── end.js         # Algorithm button event handlers
```

## Tech

Vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.
