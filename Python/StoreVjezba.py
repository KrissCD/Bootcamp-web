from typing import List, Dict

class Store:
    def __init__(self, name: str):
        # Inicijalizacija imena prodavaonice i prazne liste artikala
        self.name = name
        self.items: List[Dict[str, float | str]] = []

    def add_item(self, name: str, price: float) -> List[Dict[str, float | str]]:
        # Dodavanje artikla kao rječnik u listu artikala
        item: Dict[str, float | str] = {'name': name, 'price': price}
        self.items.append(item)
        return self.items

    def stock_price(self) -> float:
        # Računanje ukupne vrijednosti zaliha
        total = float(sum(float(item['price']) for item in self.items))  # type: float
        return total


# Testiranje klase
if __name__ == "__main__":
    # Kreiranje instance prodavaonice
    my_store = Store("Mala Trgovina")

    # Dodavanje artikala
    my_store.add_item("Kruh", 1.2)
    my_store.add_item("Mlijeko", 0.99)
    my_store.add_item("Sir", 2.5)

    # Ispis svih artikala
    print("Artikli u trgovini:", my_store.items)

    # Ispis ukupne vrijednosti zaliha
    print("Ukupna vrijednost zaliha:", my_store.stock_price())
