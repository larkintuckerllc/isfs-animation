const BASE = `${window.location.protocol}//${window.location.hostname}`;
export const BASE_URL_HTTP = `${BASE}:3000`;
export const BASE_URL_SOCKET = `${BASE}:3001`;
export const MATRIX = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
export const DIMENSIONS = [{
  width: 1920,
  height: 1080,
  scale: 0.84,
  padding: 0,
  spacing: 28,
  margin: 20,
}, {
  width: 1920,
  height: 1080,
  scale: 0.84,
  padding: 0,
  spacing: 28,
  margin: 60,
}, {
  width: 1080,
  height: 1920,
  scale: 1,
  padding: 111,
  spacing: 112,
  margin: 0,
}];
