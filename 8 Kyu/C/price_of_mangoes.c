// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

unsigned mango(unsigned quantity, unsigned price) {
    unsigned sets_of_three = quantity / 3;
    unsigned remaining_mangoes = quantity % 3;
    return (2 * sets_of_three + remaining_mangoes) * price;
}
