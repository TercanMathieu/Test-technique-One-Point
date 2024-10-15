declare module "./reportWebVitals" {
  // Typage de la fonction exportée
  const reportWebVitals: (callback: (metric: any) => void) => void;
  export default reportWebVitals;
}
