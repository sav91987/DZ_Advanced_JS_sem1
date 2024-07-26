/* Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
 */
console.log(`Задание 1
    `);

class Album {
    constructor(title, artist, year) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }
}

const album1 = new Album("Mutter", "Rammstein", 2001);
const album2 = new Album("Toxicity", "System of a Down", 2001);
const album3 = new Album("Meteora", "Linkin Park", 2003);

const albums = [album1, album2, album3];

const musicCollection = {
    albums,
    *[Symbol.iterator]() {
        for (const album of this.albums) {
            yield album;
        }
    },
};

for (const album of musicCollection) {
    console.log(
        `Исполнитель: ${album.artist} - Название альбома: ${album.title} (${album.year} г.)`
    );
}

console.log(`
    `);

/* Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
 */
console.log(`Задание 2
    `);

class Client {
    constructor(name) {
        this.name = name;
        this.orders = new Map();
    }
}

const dishes = new Map();
const cooks = new Map();

pizzaId = 1;
sushiId = 2;
dessertId = 3;

dishes
    .set("Пепперони", pizzaId)
    .set("Маргарита", pizzaId)
    .set("Калифорния", sushiId)
    .set("Филадельфия", sushiId)
    .set("Тирамису", dessertId)
    .set("Чизкейк", dessertId);

cooks.set(pizzaId, "Виктор").set(sushiId, "Ольга").set(dessertId, "Дмитрий");

const clientAlexey = new Client("Алексей");
clientAlexey.orders.set(clientAlexey, ["Пепперони", "Тирамису"]);

const clientMaria = new Client("Мария");
clientMaria.orders.set(clientMaria, ["Калифорния", "Маргарита"]);

const clientIrina = new Client("Ирина");
clientIrina.orders.set(clientIrina, ["Чизкейк", "Сосиска в тесте"]);

function showOrder(client) {
    let orderMessage = `Клиент ${client.name} заказал(а):
`;
    for (const order of client.orders.get(client)) {
        const dish = dishes.get(order);
        if (!dish) {
            console.error(`Блюда "${order}" не найдено.`);
        } else {
            orderMessage += `${order} - Готовит: ${cooks.get(dish)}
`;
        }
        
    }

    console.log(orderMessage);
}

showOrder(clientAlexey);
showOrder(clientMaria);
showOrder(clientIrina);
