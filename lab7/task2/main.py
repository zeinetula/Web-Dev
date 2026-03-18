from models import Superhero, Batman, Superman


def main():
    # Создаем экземпляры (объекты) классов
    hero_generic = Superhero("Гражданин Икс", 10, "Новокузнецк")
    bruce = Batman("Бэтмен", 85, "Готэм", 15)
    clark = Superman("Супермен", 100, "Метрополис", 1200)

    justice_league = [hero_generic, bruce, clark]

    print("--- Список участников Лиги ---")
    for hero in justice_league:
        print(hero)

        print(f"Действие: {hero.use_power()}")

        print(hero.train(5))
        print("-" * 30)

    print("\n--- Специальные способности ---")
    print(bruce.call_batmobile())
    print(clark.sun_charge())


if __name__ == "__main__":
    main()