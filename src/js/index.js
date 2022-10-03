import '../styles/styles.scss';

function getData() {
  let response = fetch('https://fortniteapi.io/v2/items/list?lang=ru', { method: 'GET', headers: { Authorization: '24d13aee-b446a7e4-bbdedcee-62e62bf4' } })
    .then((response) => response.json())
    .then((response) => {
      // const res = response.items.filter((item) => item.name.indexOf('Ара') > 0); // Фильтрация по имени
      // const res = response.items.filter((item) => item.set !== null);
      // const res = response.items.map((item) => item.set !== null && item.set.name); // Фильтрация по названию набора
      const types = response.items.map((item) => item.type.name); // Фильтрация по типу
      const res = response.items.filter((item) => item.type.name.toLowerCase() === 'Экипировка'.toLowerCase()); // Фильтрация по экипировка
      console.log('Тип героя: ', new Set(types));
      console.log('Массив по типам: ', res);
    });
}

// getData();

// products = [{}, {}, {}];

// basket = {
//   total: 1000, // Общая стоимость
//   items: [...{ count: 10 }, ...{ count: 10 }], // Объекты товаров, добленных в корзину + доп. свойство count
// };

// productProps = {
//   isFavorite: false, // Дополнительные св-ва у каждого объекта товара
// };
