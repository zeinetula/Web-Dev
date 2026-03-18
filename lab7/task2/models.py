class Superhero:
    """Базовый класс для всех супергероев."""

    def __init__(self, name, power_level, city):
        self.name = name
        self.power_level = power_level
        self.city = city

    def use_power(self):
        """Метод, который будет переопределен в дочерних классах."""
        return f"{self.name} использует базовые навыки героя."

    def train(self, boost):
        """Увеличивает уровень силы героя."""
        self.power_level += boost
        return f"{self.name} потренировался! Новый уровень силы: {self.power_level}"

    def __str__(self):
        return f"Герой: {self.name} | Сила: {self.power_level} | Город: {self.city}"


class Batman(Superhero):

    def __init__(self, name, power_level, city, gadgets_count):
        super().__init__(name, power_level, city)
        self.gadgets_count = gadgets_count

    def use_power(self):
        return f"{self.name} использует гаджеты ({self.gadgets_count} шт.) и исчезает в тени!"

    def call_batmobile(self):
        return f"{self.name} вызывает Бэтмобиль в {self.city}!"


class Superman(Superhero):
    """Класс Супермена, наследуемый от Superhero."""

    def __init__(self, name, power_level, city, flight_speed):
        super().__init__(name, power_level, city)
        self.flight_speed = flight_speed

    def use_power(self):
        return f"{self.name} стреляет лазерами из глаз и летит со скоростью {self.flight_speed} км/ч!"

    def sun_charge(self):
        self.power_level += 50
        return f"{self.name} зарядился от солнца. Сила выросла до {self.power_level}!"