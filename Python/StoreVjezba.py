class Store:
    def __init__(self, name: str):
        self.name = name
        self.items = []

    def add_item(self, name: str, price: float) -> list:
        item = {'name': name, 'price': price}
        self.items.append(item)
        return self.items

    def stock_price(self) -> float:
        return sum(item['price'] for item in self.items)

    def __str__(self) -> str:
        return f"Store: {self.name}, Items: {len(self.items)}, Total value: {self.stock_price():.2f}"

    #staticmethod
    def franchise(store):
        return Store(store.name + " - Franchise")

    #staticmethod
    def compare_value(store1, store2):
        if store1.stock_price() > store2.stock_price():
            return store1.name
        elif store2.stock_price() > store1.stock_price():
            return store2.name
        else:
            return "Equal value"

    #classmethod
    def from_year(cls, year: int):
        return cls(f"generated-{year}")

    #classmethod
    def from_item_list(cls, items_list: list):
        store = cls("Custom Store")
        for name, price in items_list:
            store.add_item(name, price)
        return store

# Testiranje klase
if __name__ == "__main__":
    store = Store("Moj dućan")
    print("Dodavanje artikala:")
    print(store.add_item("Kruh", 1.5))
    print(store.add_item("Mlijeko", 2.0))
    print(store.add_item("Jaja", 3.2))
    print("\nSvi artikli:", store.items)
    print("Ukupna cijena zaliha:", store.stock_price())
