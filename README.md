# Cards

A model and implementation of a deck of cards in JavaSript.

## Assumptions

- 52 cards in a deck
- 4 suits of values 2-10, Jack, Queen, King, Ace
- 1 suit/value diad per card

## Model

### Card

Made up of one suit/value pair.

Properties:

- Suit
- Color
- Symbol
- Value

### Suit enum

1. Clubs, black, ♣
2. Diamonds, red, ◆
3. Hearts, red, ♥
4. Spades, black, ♠

### Value enum

Ascending order

1. Ace
2. 2
3. 3
4. 4
5. 5
6. 6
7. 7
8. 8
9. 9
10. 10
11. Jack
12. Queen
13. King

### Deck

The set of `4 x 13` suit/value cards.

#### Order

> When you first open a deck, you’ll usually see the Jokers at the face, followed by the Spades and Diamonds in ascending order, then the Clubs and Hearts in descending order. At the very back or top of the deck, you’ll get a few ad cards...

Via [Ambitious with Cards](https://ambitiouswithcards.com/new-deck-order/)

1. Spade values in Ascending order
2. Diamond values in Ascending order
3. Club values in Descending order
4. Heart values in Descending order
