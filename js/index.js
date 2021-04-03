import Model from './model.js';
import View from './view.js';

/**
 * DOMContentLoaded es para  que toda la pagina este renderizada y no haya
 * problemas al usar algunos ID.
 */
 document.addEventListener('DOMContentLoaded', function () {
   const model = new Model();
   const view = new View();
   model.setView(view);
   view.setModel(model);
 });