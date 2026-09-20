// Вся настройка страницы — в этом одном файле.
// Одна запись в items = одна карточка на сайте.
// images: одна картинка для обычного предмета или все расцветки одного предмета.
// attachments: icon — имя файла из images/sets/attach без .png; name — подпись; count — количество.
window.furnitureGuideData = {
  "categories": [
    {
      "id": "furniture",
      "label": "Фурнитура"
    },
    {
      "id": "interior",
      "label": "Интерьер"
    }
  ],
  "items": [
    {
      "id": "Алоэ",
      "name": "Алоэ",
      "category": "interior",
      "images": [
        "/images/furniture/Алоэ.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Армейский_деревянный_ящик_2",
      "name": "Армейский деревянный ящик 2",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_деревянный_ящик_2.png"
      ],
      "capacity": 200,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 1
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Армейский_деревянный_ящик",
      "name": "Армейский деревянный ящик",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_деревянный_ящик.png"
      ],
      "capacity": 100,
      "attachments": [
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Армейский_стол",
      "name": "Армейский стол",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_стол.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 2
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 3
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 2
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "binocular",
          "name": "Бинокль",
          "count": 1
        },
        {
          "icon": "chem_light",
          "name": "Хим. свет",
          "count": 1
        },
        {
          "icon": "radio",
          "name": "Рация",
          "count": 1
        }
      ]
    },
    {
      "id": "furniture-group-1",
      "name": "Армейский ящик большого размера",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_ящик_большого_размера_1.png",
        "/images/furniture/Армейский_ящик_большого_размера_2.png",
        "/images/furniture/Армейский_ящик_большого_размера_3.png",
        "/images/furniture/Армейский_ящик_большого_размера_4.png",
        "/images/furniture/Армейский_ящик_большого_размера_5.png",
        "/images/furniture/Армейский_ящик_большого_размера_6.png",
        "/images/furniture/Армейский_ящик_большого_размера_7.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 3
        }
      ]
    },
    {
      "id": "furniture-group-2",
      "name": "Армейский ящик небольшого размера",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_ящик_небольшого_размера_1.png",
        "/images/furniture/Армейский_ящик_небольшого_размера_2.png",
        "/images/furniture/Армейский_ящик_небольшого_размера_3.png",
        "/images/furniture/Армейский_ящик_небольшого_размера_4.png"
      ],
      "capacity": 50,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 1
        }
      ]
    },
    {
      "id": "furniture-group-4",
      "name": "Армейский ящик огромного размера",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_ящик_огромного_размера_1.png",
        "/images/furniture/Армейский_ящик_огромного_размера_2.png",
        "/images/furniture/Армейский_ящик_огромного_размера_3.png"
      ],
      "capacity": 400,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 5
        }
      ]
    },
    {
      "id": "Армейский_ящик_огромного_размера_с_выбором_категорий_1",
      "name": "Армейский ящик огромного размера с выбором категорий",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_ящик_огромного_размера_с_выбором_категорий_1.png",
        "/images/furniture/Армейский_ящик_огромного_размера_с_выбором_категорий_2.png",
        "/images/furniture/Армейский_ящик_огромного_размера_с_выбором_категорий_3.png",
        "/images/furniture/Армейский_ящик_огромного_размера_с_выбором_категорий_4.png",
        "/images/furniture/Армейский_ящик_огромного_размера_с_выбором_категорий_5.png",
        "/images/furniture/Армейский_ящик_огромного_размера_с_выбором_категорий_6.png"
      ],
      "capacity": 250,
      "attachments": [
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 3
        }
      ]
    },
    {
      "id": "furniture-group-3",
      "name": "Армейский ящик среднего размера",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_ящик_среднего_размера_1.png",
        "/images/furniture/Армейский_ящик_среднего_размера_2.png",
        "/images/furniture/Армейский_ящик_среднего_размера_3.png",
        "/images/furniture/Армейский_ящик_среднего_размера_4.png"
      ],
      "capacity": 200,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 1
        }
      ]
    },
    {
      "id": "Армейский_ящик_среднего_размера_с_выбором_категорий_1",
      "name": "Армейский ящик среднего размера с выбором категорий",
      "category": "furniture",
      "images": [
        "/images/furniture/Армейский_ящик_среднего_размера_с_выбором_категорий_1.png",
        "/images/furniture/Армейский_ящик_среднего_размера_с_выбором_категорий_2.png",
        "/images/furniture/Армейский_ящик_среднего_размера_с_выбором_категорий_3.png",
        "/images/furniture/Армейский_ящик_среднего_размера_с_выбором_категорий_4.png",
        "/images/furniture/Армейский_ящик_среднего_размера_с_выбором_категорий_5.png",
        "/images/furniture/Армейский_ящик_среднего_размера_с_выбором_категорий_6.png"
      ],
      "capacity": 150,
      "attachments": [
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        }
      ]
    },
    {
      "id": "Баллон_с_пропаном",
      "name": "Баллон с пропаном",
      "category": "interior",
      "images": [
        "/images/furniture/Баллон_с_пропаном.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Беседка",
      "name": "Беседка",
      "category": "interior",
      "images": [
        "/images/furniture/Беседка.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Большая_бутыль",
      "name": "Большая бутыль",
      "category": "interior",
      "images": [
        "/images/furniture/Большая_бутыль.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "watertap",
          "name": "Кран",
          "count": 1
        }
      ]
    },
    {
      "id": "Большой_армейский_ящик_1",
      "name": "Большой армейский ящик",
      "category": "furniture",
      "images": [
        "/images/furniture/Большой_армейский_ящик_1.png",
        "/images/furniture/Большой_армейский_ящик_2.png",
        "/images/furniture/Большой_армейский_ящик_3.png",
        "/images/furniture/Большой_армейский_ящик_4.png",
        "/images/furniture/Большой_армейский_ящик_5.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Большой_холодильник",
      "name": "Большой холодильник",
      "category": "furniture",
      "images": [
        "/images/furniture/Большой_холодильник.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 24
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 12
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 8
        },
        {
          "icon": "meat",
          "name": "Мясо",
          "count": 12
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        }
      ]
    },
    {
      "id": "Большой_шкаф",
      "name": "Большой шкаф",
      "category": "furniture",
      "images": [
        "/images/furniture/Большой_шкаф.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 2
        }
      ]
    },
    {
      "id": "Большой_ящик_для_аммуниции",
      "name": "Большой ящик для аммуниции",
      "category": "furniture",
      "images": [
        "/images/furniture/Большой_ящик_для_аммуниции.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 1
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 2
        }
      ]
    },
    {
      "id": "Бонсай",
      "name": "Бонсай",
      "category": "interior",
      "images": [
        "/images/furniture/Бонсай.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Газовая_плита",
      "name": "Газовая плита",
      "category": "furniture",
      "images": [
        "/images/furniture/Газовая_плита.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "gas_ballon",
          "name": "Газовый баллон",
          "count": 1
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 4
        }
      ]
    },
    {
      "id": "Диван_2",
      "name": "Диван",
      "category": "furniture",
      "images": [
        "/images/furniture/Диван_2.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 3
        },
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 3
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 2
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 2
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        }
      ]
    },
    {
      "id": "Диван",
      "name": "Диван",
      "category": "furniture",
      "images": [
        "/images/furniture/Диван.png"
      ],
      "capacity": 150,
      "attachments": [
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        }
      ]
    },
    {
      "id": "Домашние_жалюзи_1",
      "name": "Домашние жалюзи",
      "category": "interior",
      "images": [
        "/images/furniture/Домашние_жалюзи_1.png",
        "/images/furniture/Домашние_жалюзи_2.png",
        "/images/furniture/Домашние_жалюзи_3.png",
        "/images/furniture/Домашние_жалюзи_4.png",
        "/images/furniture/Домашние_жалюзи_5.png",
        "/images/furniture/Домашние_жалюзи_6.png",
        "/images/furniture/Домашние_жалюзи_7.png",
        "/images/furniture/Домашние_жалюзи_8.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Кактус",
      "name": "Кактус",
      "category": "interior",
      "images": [
        "/images/furniture/Кактус.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Картина_1",
      "name": "Картина",
      "category": "interior",
      "images": [
        "/images/furniture/Картина_1.png",
        "/images/furniture/Картина_2.png",
        "/images/furniture/Картина_3.png",
        "/images/furniture/Картина_4.png",
        "/images/furniture/Картина_5.png",
        "/images/furniture/Картина_6.png",
        "/images/furniture/Картина_7.png",
        "/images/furniture/Картина_8.png",
        "/images/furniture/Картина_9.png",
        "/images/furniture/Картина_10.png",
        "/images/furniture/Картина_11.png",
        "/images/furniture/Картина_12.png",
        "/images/furniture/Картина_13.png",
        "/images/furniture/Картина_14.png",
        "/images/furniture/Картина_15.png",
        "/images/furniture/Картина_16.png",
        "/images/furniture/Картина_17.png",
        "/images/furniture/Картина_18.png",
        "/images/furniture/Картина_19.png",
        "/images/furniture/Картина_20.png",
        "/images/furniture/Картина_21.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Кашпо",
      "name": "Кашпо",
      "category": "interior",
      "images": [
        "/images/furniture/Кашпо.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Комод",
      "name": "Комод",
      "category": "furniture",
      "images": [
        "/images/furniture/Комод.png"
      ],
      "capacity": 250,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 1
        }
      ]
    },
    {
      "id": "Конфорка",
      "name": "Конфорка",
      "category": "furniture",
      "images": [
        "/images/furniture/Конфорка.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "gas_ballon",
          "name": "Газовый баллон",
          "count": 1
        }
      ]
    },
    {
      "id": "Маленький_армейский_ящик_1",
      "name": "Маленький армейский ящик",
      "category": "furniture",
      "images": [
        "/images/furniture/Маленький_армейский_ящик_1.png",
        "/images/furniture/Маленький_армейский_ящик_2.png",
        "/images/furniture/Маленький_армейский_ящик_3.png",
        "/images/furniture/Маленький_армейский_ящик_4.png",
        "/images/furniture/Маленький_армейский_ящик_5.png"
      ],
      "capacity": 50,
      "attachments": [
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Маленький_холодильник",
      "name": "Маленький холодильник",
      "category": "furniture",
      "images": [
        "/images/furniture/Маленький_холодильник.png"
      ],
      "capacity": 30,
      "attachments": [
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 12
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 9
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 6
        }
      ]
    },
    {
      "id": "Манекен_1",
      "name": "Манекен",
      "category": "furniture",
      "images": [
        "/images/furniture/Манекен_1.png",
        "/images/furniture/Манекен_2.png",
        "/images/furniture/Манекен_3.png",
        "/images/furniture/Манекен_4.png",
        "/images/furniture/Манекен_5.png",
        "/images/furniture/Манекен_6.png",
        "/images/furniture/Манекен_7.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        }
      ]
    },
    {
      "id": "Матрас",
      "name": "Матрас",
      "category": "interior",
      "images": [
        "/images/furniture/Матрас.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Металлическая_кровать",
      "name": "Металлическая кровать",
      "category": "interior",
      "images": [
        "/images/furniture/Металлическая_кровать.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Монстера",
      "name": "Монстера",
      "category": "interior",
      "images": [
        "/images/furniture/Монстера.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Мусорный_контейнер",
      "name": "Мусорный контейнер",
      "category": "furniture",
      "images": [
        "/images/furniture/Мусорный_контейнер.png"
      ],
      "capacity": 100,
      "attachments": []
    },
    {
      "id": "Набор_креплений_для_оружия_на_стену",
      "name": "Набор креплений для оружия на стену",
      "category": "furniture",
      "images": [
        "/images/furniture/Набор_креплений_для_оружия_на_стену.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 1
        }
      ]
    },
    {
      "id": "Настенный_шкаф_для_оружия",
      "name": "Настенный шкаф для оружия",
      "category": "furniture",
      "images": [
        "/images/furniture/Настенный_шкаф_для_оружия.png"
      ],
      "capacity": 500,
      "attachments": [
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 3
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Настольный_светильник",
      "name": "Настольный светильник",
      "category": "interior",
      "images": [
        "/images/furniture/Настольный_светильник.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "furniture-group-5",
      "name": "Огромный шкаф",
      "category": "furniture",
      "images": [
        "/images/furniture/Огромный_шкаф_1.png",
        "/images/furniture/Огромный_шкаф_2.png",
        "/images/furniture/Огромный_шкаф_3.png"
      ],
      "capacity": 1000,
      "attachments": [
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "axe",
          "name": "Топор",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "hacksaw",
          "name": "Ножовка",
          "count": 1
        },
        {
          "icon": "tape",
          "name": "Скотч",
          "count": 4
        },
        {
          "icon": "pliers",
          "name": "Плоскогубцы",
          "count": 2
        },
        {
          "icon": "hammer",
          "name": "Молоток",
          "count": 4
        },
        {
          "icon": "handsaw",
          "name": "Пила",
          "count": 2
        },
        {
          "icon": "hatchet",
          "name": "Топорик",
          "count": 4
        },
        {
          "icon": "screwdriver",
          "name": "Отвёртка",
          "count": 3
        },
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 10
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 8
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 6
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 20
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 3
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 4
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 4
        }
      ]
    },
    {
      "id": "Оружейная_стойка",
      "name": "Оружейная стойка",
      "category": "furniture",
      "images": [
        "/images/furniture/Оружейная_стойка.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 10
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Оружейный_стенд_2",
      "name": "Оружейный стенд",
      "category": "furniture",
      "images": [
        "/images/furniture/Оружейный_стенд_2.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 10
        }
      ]
    },
    {
      "id": "Оружейный_стенд",
      "name": "Оружейный стенд",
      "category": "furniture",
      "images": [
        "/images/furniture/Оружейный_стенд.png"
      ],
      "capacity": 100,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 16
        }
      ]
    },
    {
      "id": "Оружейный_шкаф",
      "name": "Оружейный шкаф",
      "category": "furniture",
      "images": [
        "/images/furniture/Оружейный_шкаф.png"
      ],
      "capacity": 200,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 7
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 3
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 3
        }
      ]
    },
    {
      "id": "Орхидея",
      "name": "Орхидея",
      "category": "interior",
      "images": [
        "/images/furniture/Орхидея.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Офисные_жалюзи",
      "name": "Офисные жалюзи",
      "category": "interior",
      "images": [
        "/images/furniture/Офисные_жалюзи.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Поленница",
      "name": "Поленница",
      "category": "furniture",
      "images": [
        "/images/furniture/Поленница.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "wood_kora",
          "name": "Кора",
          "count": 8
        },
        {
          "icon": "wooden_mini_brevno",
          "name": "Дрова",
          "count": 8
        }
      ]
    },
    {
      "id": "Самодельная_поленница",
      "name": "Самодельная поленница",
      "category": "furniture",
      "images": [
        "/images/furniture/Самодельная_поленница.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "wood_kora",
          "name": "Кора",
          "count": 8
        },
        {
          "icon": "wooden_mini_brevno",
          "name": "Дрова",
          "count": 8
        }
      ]
    },
    {
      "id": "Сдвоенная_оружейная_стойка",
      "name": "Сдвоенная оружейная стойка",
      "category": "furniture",
      "images": [
        "/images/furniture/Сдвоенная_оружейная_стойка.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 20
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Старая_газовая_плита",
      "name": "Старая газовая плита",
      "category": "furniture",
      "images": [
        "/images/furniture/Старая_газовая_плита.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "gas_ballon",
          "name": "Газовый баллон",
          "count": 1
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 2
        }
      ]
    },
    {
      "id": "Старый_деревянный_стол",
      "name": "Старый деревянный стол",
      "category": "furniture",
      "images": [
        "/images/furniture/Старый_деревянный_стол.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 6
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 8
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 4
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Старый_деревянный_шифонер_1",
      "name": "Старый деревянный шифонер 1",
      "category": "furniture",
      "images": [
        "/images/furniture/Старый_деревянный_шифонер_1.png",
        "/images/furniture/Старый_деревянный_шифонер_2.png",
        "/images/furniture/Старый_деревянный_шифонер_3.png"
      ],
      "capacity": 400,
      "attachments": [
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 1
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 1
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 2
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 1
        }
      ]
    },
    {
      "id": "Старый_светильник_2",
      "name": "Старый светильник",
      "category": "interior",
      "images": [
        "/images/furniture/Старый_светильник_2.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Старый_светильник",
      "name": "Старый светильник",
      "category": "interior",
      "images": [
        "/images/furniture/Старый_светильник.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Старый_шкаф_1",
      "name": "Старый шкаф",
      "category": "furniture",
      "images": [
        "/images/furniture/Старый_шкаф_1.png",
        "/images/furniture/Старый_шкаф_2.png"
      ],
      "capacity": 250,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        }
      ]
    },
    {
      "id": "Старый_шкаф_3",
      "name": "Старый шкаф",
      "category": "furniture",
      "images": [
        "/images/furniture/Старый_шкаф_3.png"
      ],
      "capacity": 150,
      "attachments": [
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 1
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        }
      ]
    },
    {
      "id": "Стеллаж_для_бутылок_вина_светлое_дерево",
      "name": "Стеллаж для бутылок вина",
      "category": "furniture",
      "images": [
        "/images/furniture/Стеллаж_для_бутылок_вина_белый.png",
        "/images/furniture/Стеллаж_для_бутылок_вина_светлое_дерево.png",
        "/images/furniture/Стеллаж_для_бутылок_вина_темное_дерево.png",
        "/images/furniture/Стеллаж_для_бутылок_вина_черный.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "bottle",
          "name": "Бутылка вина",
          "count": 20
        }
      ]
    },
    {
      "id": "Стеллаж_для_игрушек_светлое_дерево",
      "name": "Стеллаж для игрушек",
      "category": "furniture",
      "images": [
        "/images/furniture/Стеллаж_для_игрушек_белый.png",
        "/images/furniture/Стеллаж_для_игрушек_светлое_дерево.png",
        "/images/furniture/Стеллаж_для_игрушек_темное_дерево.png",
        "/images/furniture/Стеллаж_для_игрушек_черный.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "toy",
          "name": "Игрушка",
          "count": 12
        }
      ]
    },
    {
      "id": "Стеллаж_для_кроссовок_светлое_дерево",
      "name": "Стеллаж для кроссовок",
      "category": "furniture",
      "images": [
        "/images/furniture/Стеллаж_для_кроссовок_белый.png",
        "/images/furniture/Стеллаж_для_кроссовок_светлое_дерево.png",
        "/images/furniture/Стеллаж_для_кроссовок_темное_дерево.png",
        "/images/furniture/Стеллаж_для_кроссовок_черный.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "sneaker",
          "name": "Кроссовки",
          "count": 10
        }
      ]
    },
    {
      "id": "Стеллаж_для_материалов_2",
      "name": "Стеллаж для материалов",
      "category": "furniture",
      "images": [
        "/images/furniture/Стеллаж_для_материалов_2.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "lamp",
          "name": "Газовая лампа",
          "count": 1
        },
        {
          "icon": "pliers",
          "name": "Плоскогубцы",
          "count": 1
        },
        {
          "icon": "hammer",
          "name": "Молоток",
          "count": 1
        },
        {
          "icon": "handsaw",
          "name": "Пила",
          "count": 1
        },
        {
          "icon": "hatchet",
          "name": "Топорик",
          "count": 1
        },
        {
          "icon": "axe",
          "name": "Топор",
          "count": 1
        },
        {
          "icon": "shovel",
          "name": "Лопата",
          "count": 1
        }
      ]
    },
    {
      "id": "Стеллаж_для_материалов",
      "name": "Стеллаж для материалов",
      "category": "furniture",
      "images": [
        "/images/furniture/Стеллаж_для_материалов.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "woodenplanks",
          "name": "Доски",
          "count": 50
        },
        {
          "icon": "woodenlog",
          "name": "Бревна",
          "count": 100
        },
        {
          "icon": "metal",
          "name": "Металл",
          "count": 40
        },
        {
          "icon": "shovel",
          "name": "Лопата",
          "count": 2
        },
        {
          "icon": "handsaw",
          "name": "Пила",
          "count": 2
        },
        {
          "icon": "hacksaw",
          "name": "Ножовка",
          "count": 2
        },
        {
          "icon": "axe",
          "name": "Топор",
          "count": 1
        },
        {
          "icon": "pliers",
          "name": "Плоскогубцы",
          "count": 2
        },
        {
          "icon": "hatchet",
          "name": "Топорик",
          "count": 2
        },
        {
          "icon": "hammer",
          "name": "Молоток",
          "count": 2
        },
        {
          "icon": "pickaxe",
          "name": "Кирка",
          "count": 1
        },
        {
          "icon": "nails",
          "name": "Пачка гвоздей",
          "count": 5
        },
        {
          "icon": "tape",
          "name": "Скотч",
          "count": 1
        },
        {
          "icon": "rope",
          "name": "Веревка",
          "count": 1
        }
      ]
    },
    {
      "id": "Суккулент",
      "name": "Суккулент",
      "category": "interior",
      "images": [
        "/images/furniture/Суккулент.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Теплица",
      "name": "Теплица",
      "category": "furniture",
      "images": [
        "/images/furniture/Теплица.png"
      ],
      "capacity": null,
      "attachments": [
        {
          "icon": "seeds",
          "name": "Посадочных мест",
          "count": 11
        }
      ]
    },
    {
      "id": "Терракотта",
      "name": "Терракотта",
      "category": "interior",
      "images": [
        "/images/furniture/Терракотта.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Торшер",
      "name": "Торшер",
      "category": "interior",
      "images": [
        "/images/furniture/Торшер.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Тропическое_растение",
      "name": "Тропическое растение",
      "category": "interior",
      "images": [
        "/images/furniture/Тропическое_растение.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Тумбочка_2",
      "name": "Тумбочка 2",
      "category": "furniture",
      "images": [
        "/images/furniture/Тумбочка_2.png"
      ],
      "capacity": 50,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 1
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 1
        },
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 2
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 4
        }
      ]
    },
    {
      "id": "Тумбочка",
      "name": "Тумбочка",
      "category": "furniture",
      "images": [
        "/images/furniture/Тумбочка.png"
      ],
      "capacity": 50,
      "attachments": [
        {
          "icon": "pliers",
          "name": "Плоскогубцы",
          "count": 1
        },
        {
          "icon": "hammer",
          "name": "Молоток",
          "count": 1
        },
        {
          "icon": "tape",
          "name": "Скотч",
          "count": 1
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 1
        },
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 2
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 4
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        }
      ]
    },
    {
      "id": "Умывальник",
      "name": "Умывальник",
      "category": "interior",
      "images": [
        "/images/furniture/Умывальник.png"
      ],
      "capacity": null,
      "attachments": []
    },
    {
      "id": "Холодильник_днепр",
      "name": "Холодильник днепр",
      "category": "furniture",
      "images": [
        "/images/furniture/Холодильник_днепр.png"
      ],
      "capacity": 40,
      "attachments": [
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 7
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 7
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 4
        },
        {
          "icon": "meat",
          "name": "Мясо",
          "count": 7
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        }
      ]
    },
    {
      "id": "Холодильник_зил",
      "name": "Холодильник зил",
      "category": "furniture",
      "images": [
        "/images/furniture/Холодильник_зил.png"
      ],
      "capacity": 50,
      "attachments": [
        {
          "icon": "foodcan",
          "name": "Банка еды",
          "count": 8
        },
        {
          "icon": "sodacan",
          "name": "Банка газировки",
          "count": 6
        },
        {
          "icon": "bottle_water",
          "name": "Бутылка воды",
          "count": 4
        },
        {
          "icon": "meat",
          "name": "Мясо",
          "count": 8
        },
        {
          "icon": "pot",
          "name": "Кастрюля",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        }
      ]
    },
    {
      "id": "Шкаф_1",
      "name": "Шкаф",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_1.png",
        "/images/furniture/Шкаф_2.png",
        "/images/furniture/Шкаф_3.png",
        "/images/furniture/Шкаф_4.png",
        "/images/furniture/Шкаф_5.png",
        "/images/furniture/Шкаф_6.png",
        "/images/furniture/Шкаф_7.png",
        "/images/furniture/Шкаф_8.png"
      ],
      "capacity": 150,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 2
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        }
      ]
    },
    {
      "id": "Шкаф_для_оружия",
      "name": "Шкаф для оружия",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_для_оружия.png"
      ],
      "capacity": 500,
      "attachments": [
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "canteen",
          "name": "Фляга",
          "count": 1
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 10
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 5
        }
      ]
    },
    {
      "id": "Шкаф_оружейный_кабинет",
      "name": "Шкаф оружейный кабинет",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_оружейный_кабинет.png"
      ],
      "capacity": 50,
      "attachments": [
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 5
        },
        {
          "icon": "pistol",
          "name": "Пистолет",
          "count": 1
        }
      ]
    },
    {
      "id": "Шкаф_с_выбором_категорий_1_1",
      "name": "Шкаф с выбором категорий",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_с_выбором_категорий_1_1.png",
        "/images/furniture/Шкаф_с_выбором_категорий_1_2.png",
        "/images/furniture/Шкаф_с_выбором_категорий_1_3.png",
        "/images/furniture/Шкаф_с_выбором_категорий_1_4.png",
        "/images/furniture/Шкаф_с_выбором_категорий_1_5.png",
        "/images/furniture/Шкаф_с_выбором_категорий_1_6.png"
      ],
      "capacity": 200,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 3
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        }
      ]
    },
    {
      "id": "Шкаф_с_выбором_категорий_2_1",
      "name": "Шкаф с выбором категорий",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_с_выбором_категорий_2_1.png",
        "/images/furniture/Шкаф_с_выбором_категорий_2_2.png",
        "/images/furniture/Шкаф_с_выбором_категорий_2_3.png",
        "/images/furniture/Шкаф_с_выбором_категорий_2_4.png",
        "/images/furniture/Шкаф_с_выбором_категорий_2_5.png",
        "/images/furniture/Шкаф_с_выбором_категорий_2_6.png"
      ],
      "capacity": 200,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 3
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        }
      ]
    },
    {
      "id": "Шкаф_с_выбором_категорий_3_1",
      "name": "Шкаф с выбором категорий",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_с_выбором_категорий_3_1.png",
        "/images/furniture/Шкаф_с_выбором_категорий_3_2.png",
        "/images/furniture/Шкаф_с_выбором_категорий_3_3.png",
        "/images/furniture/Шкаф_с_выбором_категорий_3_4.png",
        "/images/furniture/Шкаф_с_выбором_категорий_3_5.png",
        "/images/furniture/Шкаф_с_выбором_категорий_3_6.png"
      ],
      "capacity": 200,
      "attachments": [
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 2
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 3
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "jacket",
          "name": "Куртка",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        }
      ]
    },
    {
      "id": "Шкаф_с_рольставнями_1",
      "name": "Шкаф с рольставнями",
      "category": "furniture",
      "images": [
        "/images/furniture/Шкаф_с_рольставнями_1.png",
        "/images/furniture/Шкаф_с_рольставнями_2.png"
      ],
      "capacity": 300,
      "attachments": [
        {
          "icon": "helmet",
          "name": "Шлем",
          "count": 1
        },
        {
          "icon": "mask",
          "name": "Маска",
          "count": 1
        },
        {
          "icon": "eyewear",
          "name": "Очки",
          "count": 1
        },
        {
          "icon": "gloves",
          "name": "Перчатки",
          "count": 1
        },
        {
          "icon": "boots",
          "name": "Ботинки",
          "count": 1
        },
        {
          "icon": "armband",
          "name": "Повязка",
          "count": 1
        },
        {
          "icon": "vest",
          "name": "Бронежилет",
          "count": 1
        },
        {
          "icon": "belt",
          "name": "Ремень",
          "count": 1
        },
        {
          "icon": "pants",
          "name": "Штаны",
          "count": 1
        },
        {
          "icon": "backpack",
          "name": "Рюкзак",
          "count": 1
        },
        {
          "icon": "weapon",
          "name": "Оружие",
          "count": 13
        },
        {
          "icon": "ammobox",
          "name": "Ящик боеприпасов",
          "count": 3
        },
        {
          "icon": "firstadkit",
          "name": "Аптечка",
          "count": 3
        },
        {
          "icon": "woodencrate",
          "name": "Ящик",
          "count": 1
        }
      ]
    }
  ]
};
