import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import type { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Креатин Qazprotein Creatine 300гр',
      description: 'Qazprotein Creatine Monohydrate - это чистейший креатин моногидрат фармацевтического качества. Продукт микронизирован (измельчен) до предельного показателя 200 mesh, что гарантирует максимальное усвоение и предотвращает дискомфорт в желудочно-кишечном тракте.',
      price: 4190,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h02/86530483716126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h17/86530483748894.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-qazprotein-creatine-monohydrate-neitral-nyi-150-g-112792116/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1HBdhGxsjD8K713yHHSQq-HrH5tOiM3rlWijID179wik7BcLjYa00xoC3mwQAvD_BwE'
    },
    {
      id: 2,
      name: 'Наушники Apple EarPods',
      description: 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука. ✨',
      price: 10700,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h55/hd8/84353546846238.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000'
    },
    {
      id: 3,
      name: 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
      description: 'Смарт часы YUNTEKO DMi50 — умнее других "умных" часов, крепче твоих нервов, и работает дольше, чем ты на работе!🔥',
      price: 44990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p54/58332181.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1HBdhGxsjD8K713yHHSQq-HrH5tOiM3rlWijID179wik7BcLjYa00xoC3mwQAvD_BwE'
    },
    {
      id: 4,
      name: 'Настольная игра Дженга цветная',
      description: 'Классика в современном исполнении. Долгая автономность, качественная сборка и ностальгический дизайн. Отличный вариант для звонков и простых задач.',
      price: 1287,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h27/66183688585246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h27/66183688585246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/pd0/97899097.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dzhenga-tsvetnaja-107745304/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1HBdhGxsjD8K713yHHSQq-HrH5tOiM3rlWijID179wik7BcLjYa00xoC3mwQAvD_BwE'
    },
    {
      id: 5,
      name: 'Пластинка Arctic Monkeys - AM',
      description: 'Arctic Monkeys - AM — культовый альбом английской рок-группы, выпущенный в 2013 году на 180-граммовом виниле в формате Gatefold.',
      price: 28999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h16/64395659345950.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/h16/64395659345950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p63/pf5/78003887.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/arctic-monkeys---am-106709569/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1HBdhGxsjD8K713yHHSQq-HrH5tOiM3rlWijID179wik7BcLjYa00xoC3mwQAvD_BwE'
    },
    {
      id: 6,
      name: 'Гитара акустическая Levinson LA-R38B-BK Pack 1',
      description: 'Акустическая гитара Levinson LA-R38B-BK Pack 1 — отличный выбор для музыкантов любого уровня, предлагающая высокое качество звука и удобство в использовании.',
      price: 20900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb2/p5c/99693286.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb2/p5c/99693286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/pab/59026823.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p35/p3f/69589896.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/gitara-akusticheskaja-levinson-la-r38b-bk-pack-1-112338990/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1HBdhGxsjD8K713yHHSQq-HrH5tOiM3rlWijID179wik7BcLjYa00xoC3mwQAvD_BwE'
    },
    {
      id: 7,
      name: 'Цифровое пианино Smart Piano SP-88037',
      description: 'Цифровое пианино Smart Piano SP-88037 — это доступный и функциональный инструмент, подходящий как для начинающих, так и для тех, кто уже имеет опыт игры на пианино.',
      price: 32726,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h12/64921909166110.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h43/h12/64921909166110.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/hbe/64921910345758.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tsifrovoe-pianino-smart-piano-sp-88037-106561552/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1HBdhGxsjD8K713yHHSQq-HrH5tOiM3rlWijID179wik7BcLjYa00xoC3mwQAvD_BwE'
    },
    {
      id: 8,
      name: 'Ударный инструмент Акустические барабаны черного цвета полный комплект',
      description: 'Полноценная акустическая барабанная установка Black Edition — идеальный выбор как для начинающих, так и для опытных музыкантов, ценящих мощное звучание и стильный внешний вид.',
      price: 250000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4b/p3c/58709644.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4b/p3c/58709644.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p2e/58709648.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pda/p1f/58709650.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/komplekt-barabanov-8761007-900557668-chernyi-144133573/?c=750000000'
    },
    {
      id: 9,
      name: 'Книга Клейсон Дж.: Самый богатый человек в Вавилоне',
      description: 'Эта книга — настоящее лекарство от нищеты. Если вы всерьез решили стать богатым, она поможет вам заглянуть в суть финансовых проблем и добиться реального успеха. Обсуждаемые автором принципы универсальны и неизменны. Они докажут вам свою действенность так же, как доказали ее многим другим людям, став ключом к стабильному финансовому прогрессу и процветанию.',
      price: 3111,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h16/63820893093918.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h16/63820893093918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbd/hac/63820895977502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h19/63820900302878.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kleison-dzh-samyi-bogatyi-chelovek-v-vavilone-100034456/?c=750000000'
    },
    {
      id: 10,
      name: 'Книга Кристи А.: Убийства по алфавиту',
      description: 'В английском алфавите 26 букв. В подписи преступника, затеявшего с Эркюлем Пуаро игру при помощи писем, всего три буквы, первые, А, B и С. Он планирует совершить убийства в местах, названия которых расположены в алфавитном порядке. ',
      price: 2425,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p65/pfb/35777135.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p65/pfb/35777135.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/pfb/35777136.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pfb/35777137.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000'
    }
  ];

  

}
